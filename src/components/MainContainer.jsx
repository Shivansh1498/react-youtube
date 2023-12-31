import React, { useEffect } from "react";
import CardList from "./CardList";
import {
  YOUTUBE_VIDEO_LIST_API,
  YOUTUBE_VIDEO_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../store/slices/allVideoSlice";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const dispatch = useDispatch();
  const allVideos = useSelector((store) => store.allVideos.data);

  const getYoutubeVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_LIST_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  // const getSearchResult = async () => {
  //   const data = await fetch(YOUTUBE_VIDEO_SEARCH_API("tiger 3 teaser"));
  //   const json = await data.json();
  //   console.log(json.items[0]);
  // };
  useEffect(() => {
    // getSearchResult();
    getYoutubeVideoData();
  }, []);

  if (allVideos.length === 0) return <Shimmer />;

  return (
    <div className="w-full">
      <CardList />
    </div>
  );
};

export default MainContainer;
