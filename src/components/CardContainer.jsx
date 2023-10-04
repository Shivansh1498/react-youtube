import React from "react";
import { convertYouTubeDuration } from "../utils/helperFunction";

const CardContainer = ({ image, title, viewCount, likeCount, duration }) => {
  const convertedDuration = convertYouTubeDuration(duration);

  return (
    <div className="w-[400px] h-72 rounded-lg shadow-xl overflow-hidden cursor-pointer relative hover:shadow-2xl">
      <img src={image} alt="main image" className="w-full h-52" />
      <span className="absolute bottom-[83px] right-2 text-white bg-gray-800 px-2 text-sm rounded-md">
        {convertedDuration}
      </span>
      <h1 className="font-bold h-12 line-clamp-2 px-2">{title}</h1>
      <div className="px-2">
        <span>{Intl.NumberFormat().format(viewCount)} views</span> -{" "}
        <span>{Intl.NumberFormat().format(likeCount)} likes</span>
      </div>
    </div>
  );
};

export default CardContainer;
