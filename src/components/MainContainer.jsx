import React, { useEffect } from "react";
import CardList from "./CardList";
import { YOUTUBE_VIDEO_LIST_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../store/slices/allVideoSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  const getYoutubeVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_LIST_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  useEffect(() => {
    getYoutubeVideoData();
  }, []);

  return (
    <div className="w-full">
      <CardList />
    </div>
  );
};

export default MainContainer;
