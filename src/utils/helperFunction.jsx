import { LIVE_CHAT_MOCK_DATA } from "./liveChatMockData";

export const fetchLiveChatRandomData = () => {
  return LIVE_CHAT_MOCK_DATA[
    Math.floor(Math.random() * LIVE_CHAT_MOCK_DATA.length - 1) + 1
  ];
};
