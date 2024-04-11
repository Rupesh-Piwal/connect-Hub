import React from "react";
import FeedTabs from "./FeedTabs";



const Feed = () => {
  return (
    <div className=" w-[46%] overflow-y-auto custom-scrollbar bg-gray-600">
      <FeedTabs />
    </div>
  );
};

export default Feed;
