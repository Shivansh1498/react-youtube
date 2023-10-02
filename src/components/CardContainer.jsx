import React from "react";

const CardContainer = ({ image, title, viewCount, likeCount }) => {
  return (
    <div className="w-[400px] h-72 rounded-lg shadow-2xl overflow-hidden cursor-pointer">
      <img src={image} alt="main image" className="w-full h-52" />
      <h1 className="font-bold h-12 line-clamp-2 px-2">{title}</h1>
      <div className="px-2">
        <span>{Intl.NumberFormat().format(viewCount)} views</span> -{" "}
        <span>{Intl.NumberFormat().format(likeCount)} likes</span>
      </div>
    </div>
  );
};

export default CardContainer;
