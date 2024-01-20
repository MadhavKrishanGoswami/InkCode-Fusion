import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./VideoPlayer";
import Controls from "./controls";

//import "./Video.css";
const VideoRoom = ({ roomId, leaveRoom, showChat, showPeople }) => {
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
    <>
      <div className="VideoCall flex flex-row space-x-6 absolute top-[14vw] left-[50vw] z-[100]">
        {users.map(
          (user) =>
            isCameraEnabled && (
              <VideoPlayer
                key={user.uid}
                user={user}
                isCameraEnabled={isCameraEnabled}
              />
            )
        )}
      </div>
      <div className="fixed bottom-[0.9vw] right-[25vw]">
        <Controls
          toggleMic={toggleMic}
          toggleCamera={toggleCamera}
          isMicEnabled={isMicEnabled}
          isCameraEnabled={isCameraEnabled}
          leaveRoom={leaveRoom}
        />
      </div>
    </>
  );
};
export default VideoRoom;
