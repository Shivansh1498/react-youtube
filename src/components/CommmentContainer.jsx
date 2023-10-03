import React from "react";
import CommentsList from "./CommentsList";
import { COMMENTS_MOCK_DATA } from "../utils/commentsMockData";

const CommmentContainer = () => {
  return (
    <div className="mx-4 mb-5 p-2 border border-black rounded-lg">
      <h1 className="font-bold text-xl mb-3">Comments:</h1>
      <CommentsList comments={COMMENTS_MOCK_DATA} />
    </div>
  );
};

export default CommmentContainer;
