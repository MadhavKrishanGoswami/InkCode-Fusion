import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3da6cda93a904025a290b01977919361";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: null };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
