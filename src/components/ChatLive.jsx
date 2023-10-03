import React, { useEffect } from "react";
import ChatLiveItem from "./ChatLiveItem";
import { fetchLiveChatRandomData } from "../utils/helperFunction";
import { useDispatch, useSelector } from "react-redux";
import { addToLiveChat } from "../store/slices/liveChatSlice";

const ChatLive = () => {
  const dispatch = useDispatch();
  const liveChatData = useSelector((store) => store.liveChat.data);

  useEffect(() => {
    let timmer = setTimeout(() => {
      dispatch(addToLiveChat(fetchLiveChatRandomData()));
    }, 1500);

    return () => clearTimeout(timmer);
  }, [liveChatData]);

  return (
    <div className="w-[600px] border border-black h-[500px] ml-5 rounded-lg shadow-lg overflow-y-auto flex flex-col-reverse">
      {liveChatData.map((liveChat, index) => (
        <ChatLiveItem
          key={index}
          name={liveChat.first_name}
          message={liveChat.message}
        />
      ))}
    </div>
  );
};

export default ChatLive;
