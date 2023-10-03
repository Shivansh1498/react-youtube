import React from "react";
import { DEFAULT_PROFILE_IMAGE_URL } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <>
      <div className="p-3 flex items-center bg-gray-100 mb-2 rounded-lg">
        <img
          src={DEFAULT_PROFILE_IMAGE_URL}
          alt="profile image"
          className="w-8 h-auto"
        />
        <div className="ml-2 flex">
          <p className="font-bold">{name}</p>
          <span className="ml-2">{text}</span>
        </div>
      </div>
    </>
  );
};

export default Comment;
