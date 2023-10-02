export const YOUTUBE_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}`;
