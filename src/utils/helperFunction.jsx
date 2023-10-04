import { LIVE_CHAT_MOCK_DATA } from "./liveChatMockData";

/**
 * Generating Random Dummy Messages for Live Chat
 *
 * @return {*}
 */
export const fetchLiveChatRandomData = () => {
  return LIVE_CHAT_MOCK_DATA[
    Math.floor(Math.random() * LIVE_CHAT_MOCK_DATA.length - 1) + 1
  ];
};

/**
 * Converting YouTube Duration data to Hour, Minute, and Second
 *
 * @param {*} duration
 * @return {*}
 */
export const convertYouTubeDuration = (duration) => {
  // Regular expression to match the YouTube duration format
  const durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

  // Extract hours, minutes, and seconds using the regular expression
  const match = duration.match(durationRegex);

  if (!match) {
    return "Invalid Duration";
  }

  // Parse hours, minutes, and seconds from the matched groups
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  // Format the duration based on the presence of hours
  let formattedDuration = "";
  if (hours > 0) {
    formattedDuration += `${hours.toString().padStart(2, "0")}:`;
  }
  formattedDuration += `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return formattedDuration;
};
