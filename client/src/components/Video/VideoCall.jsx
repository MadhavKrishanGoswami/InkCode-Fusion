import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./VideoPlayer";
import Controls from "./controls";

//import "./Video.css";
const VideoRoom = ({ roomId }) => {
  const APP_ID = process.env.AGORA_APP_ID || "d702f637f7b34bde9607a32f20812a66";
  const TOKEN = null;
  const CHANNEL = roomId;
  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });

  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  const [isMicEnabled, setIsMicEnabled] = useState(true);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);

  const [tracks, setTracks] = useState([]);

  const toggleMic = () => {
    localTracks[0].setEnabled(!isMicEnabled);
    setIsMicEnabled(!isMicEnabled);
  };

  const toggleCamera = () => {
    localTracks[1].setEnabled(!isCameraEnabled);
    setIsCameraEnabled(!isCameraEnabled);
  };

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if (mediaType === "audio") {
      user.audioTrack.play();
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then((uid) =>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        client.publish(tracks);
      });

    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off("user-published", handleUserJoined);
      client.off("user-left", handleUserLeft);
      client.unpublish(tracks).then(() => client.leave());
    };
  }, []);

  return (
    <div className="VideoCall flex flex-col absolute w-[40vw] lg:w-[45vw] top-[14vw] left-[50vw] z-[100]">
      <div className="grid gap-4 grid-rows-3 grid-cols-3 lg:gri overflow-hidden">
        {users.map((user) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
      <div className="fixed bottom-[1.6vw] right-[29.9vw]">
        <Controls
          toggleMic={toggleMic}
          toggleCamera={toggleCamera}
          isMicEnabled={isMicEnabled}
          isCameraEnabled={isCameraEnabled}
          className="mt-4"
        />
      </div>
      {/*<div className="w-[40vw] h-[10vw] bg-black">video</div>
      <div className="w-[40vw] h-[10vw]">video</div>
      <div className="w-[40vw] h-[10vw]">video</div>
      <div className="w-[40vw] h-[10vw]">video</div>
        <div className="w-[40vw] h-[10vw]">video</div>*/}
    </div>
  );
};
export default VideoRoom;
