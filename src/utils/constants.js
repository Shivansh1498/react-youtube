export const YOUTUBE_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}`;

export const YOUTUBE_VIDEO_SEARCH_API = (searchQuery) =>
  `https://youtube.googleapis.com/youtube/v3/search?q=${searchQuery}&maxResults=50&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }`;

export const DEFAULT_PROFILE_IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWXvjCtsKhCd5uDDa427zET7OjCVa_r8JzQ&usqp=CAU";
