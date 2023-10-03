import React from "react";
import { useParams } from "react-router-dom";
import ChatLive from "./ChatLive";
import CommmentContainer from "./CommmentContainer";

const VideoPlayingContainer = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="p-4 w-full flex">
        <iframe
          className="w-full aspect-video h-[500px]"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <ChatLive />
      </div>
      <CommmentContainer />
    </div>
  );
};

export default VideoPlayingContainer;
