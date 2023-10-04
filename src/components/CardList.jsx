import React, { useEffect } from "react";
import CardContainer from "./CardContainer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardList = () => {
  const allVideos = useSelector((store) => store.allVideos.data);

  return (
    <div className="py-3 px-5 flex flex-wrap gap-5">
      {allVideos.map((video) => (
        <Link to={`/watch/${video.id}`} key={video.id}>
          <CardContainer
            image={video?.snippet?.thumbnails?.high?.url}
            title={video?.snippet?.title}
            likeCount={video?.statistics?.likeCount}
            viewCount={video?.statistics?.viewCount}
            duration={video?.contentDetails?.duration}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
