import React, { useEffect, useRef, useState } from "react";
import { useClient, useMicrophoneAndCameraTracks } from "./settings";
import { Grid } from "@mui/material";
import Controls from "./Controls";
import Video from "./Video";

function VideoCall({ roomId, setInCall }) {
  const appId = "3da6cda93a904025a290b01977919361";
  const channel = roomId;
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  useEffect(() => {
    const init = async () => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });
      client.on("user-unpublished", (user, type) => {
        if (type === "audio") {
          if (user.audioTrack) user.audioTrack.stop();
        }
        if (type === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
        client.on("user-left", (user) => {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        });
      });
      try {
        await client.join(appId, channel, null, null);
      } catch (err) {
        console.log(err);
      }
      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };
    if (ready && tracks) {
      try {
        init();
      } catch (err) {
        console.log(err);
      }
    }
    if (setStart(false)) {
      client.leave();
      client.removeAllListeners();
      tracks[0].close();
      tracks[1].close();
    }

    setStart(false);
    setInCall(false);
  }, [channel, tracks, ready, client]);

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item style={{ height: "5%" }}>
        {ready && tracks && (
          <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
        )}
      </Grid>
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <Video tracks={tracks} users={users} />}
      </Grid>
    </Grid>
  );
}

export default VideoCall;
