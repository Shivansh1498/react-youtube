import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayingContainer = () => {
  const { id } = useParams();

  return (
    <div className="p-4 w-full">
      <iframe
        className="w-2/3 aspect-video"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayingContainer;
