import React from "react";
import { DEFAULT_PROFILE_IMAGE_URL } from "../utils/constants";

const ChatLiveItem = ({ name, message }) => {
  return (
    <div className="p-2 mx-auto my-2 w-11/12 min-h-[2.5rem] shadow-md flex items-center">
      <img
        src={DEFAULT_PROFILE_IMAGE_URL}
        alt="profile image"
        className="w-8 h-auto"
      />
      <div className="ml-2 flex">
        <p className="font-bold">{name}</p>
        <span className="ml-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatLiveItem;
