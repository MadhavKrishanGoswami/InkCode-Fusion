const ACTIONS = {
  JOIN: "join",
  JOINED: "joined",
  DISCONNECTED: "disconnected",
  CODE_CHANGE: "code-change",
  SYNC_CODE: "sync-code",
  LEAVE: "leave",
  RECEIVE_MESSAGE: "receive_message",
  SEND_MESSAGE: "send_message",
  DRAW: "draw",
  RUN_CODE: "run_code",
  OUTPUT: "output",
} as const;

export default ACTIONS;
