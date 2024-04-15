import React from "react";
import Navigations from "../components/Navigations.jsx";
import Feed from "../components/Feed";
import RightColumn from "../components/RightColumn";

const Home = () => {
  return (
    <div className="grid lg:grid-cols-3  ">
      <Navigations />
      <Feed />
      <RightColumn />
    </div>
  );
};

export default Home;
