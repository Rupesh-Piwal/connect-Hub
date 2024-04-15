import React from "react";
import FeedTabs from "./FeedTabs";
import Logo from "../assets/twitter-logo.jpg";
import { Link } from "react-router-dom";
import { AiFillBell } from "react-icons/ai";

const Feed = () => {
  return (
    <>
      <div className="w-full h-[100px] bg-black lg:hidden flex justify-between items-center px-1.5 ">
        <div>
          <Link to={"/"}>
            <img
              style={{ width: "40px" }}
              className="rounded-full ml-3"
              src="https://avatars.githubusercontent.com/u/97403179?s=400&u=ef6d2576225d289c623027bb4f8246251d424cba&v=4"
              alt=""
            />
          </Link>
        </div>
        <div>
          <img src={Logo} alt="" width="40px" />
        </div>
        <div>
          <AiFillBell
            style={{
              color: "#ffffff",
              width: "30px",
              height: "35px",
            }}
          />
        </div>
      </div>
      <div className="w-full lg:w-[46%] overflow-y-auto custom-scrollbar bg-gray-600">
        <FeedTabs />
      </div>
    </>
  );
};

export default Feed;
