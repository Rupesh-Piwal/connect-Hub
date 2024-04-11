import React from "react";
import Logo from "../assets/twitter-x.svg";
import { GoHomeFill } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";
import { FiBell } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GoBookmark } from "react-icons/go";

const Navigations = () => {
  return (
    <div className="w-[32%] bg-white font-sans ">
      <div className="ml-[30%] border-2 w-[70%] h-full border-black flex flex-col gap-[18px] pt-3">
        <div>
          <img className="ml-5" style={{ width: "36px" }} src={Logo} alt="" />
        </div>
        <div className="flex items-center gap-[20px] hover:bg-gray-300 cursor py-2.5 rounded-3xl w-min px-5 cursor-pointer">
          <div>
            <GoHomeFill style={{ width: "32px", height: "32px" }} />
          </div>
          <div className="text-xl font-semibold">Home</div>
        </div>
        <div className="flex items-center gap-[20px] hover:bg-gray-300  py-2.5 rounded-3xl  w-min px-5 cursor-pointer">
          <div>
            <FaRegUser style={{ width: "30px", height: "30px" }} />
          </div>
          <div className="text-xl font-semibold">Profile</div>
        </div>

        <div className="flex items-center gap-[20px] hover:bg-gray-300  py-2.5 rounded-3xl  w-min px-5 cursor-pointer">
          <div>
            <CgSearch style={{ width: "32px", height: "32px" }} />
          </div>
          <div className="text-xl font-semibold">Explore</div>
        </div>
        <div className="flex items-center gap-[20px] hover:bg-gray-300  py-2.5 rounded-3xl  w-min px-5 cursor-pointer">
          <div>
            <FiBell style={{ width: "32px", height: "32px" }} />
          </div>
          <div className="text-xl font-semibold">Notifications</div>
        </div>
        <div className="flex items-center gap-[20px] hover:bg-gray-300 py-2.5 rounded-3xl  w-min px-5 cursor-pointer">
          <div>
            <HiOutlineEnvelope style={{ width: "32px", height: "32px" }} />
          </div>
          <div className="text-xl font-semibold">Messages</div>
        </div>
        <div className="flex items-center gap-[20px] hover:bg-gray-300  py-2.5 rounded-3xl  w-min px-5 cursor-pointer">
          <div>
            <GoBookmark style={{ width: "32px", height: "32px" }} />
          </div>
          <div className="text-xl font-semibold">Bookmarks</div>
        </div>

        <div className="button mt-4 mb-12 ">
          <button className="bg-violet-600 hover:bg-violet-700 w-[70%] py-3 rounded-3xl text-lg text-white font-semibold">
            Post
          </button>
        </div>
        <div className="profile flex items-center gap-[20px] cursor-pointer hover:bg-gray-300 py-3 rounded-3xl">
          <div>
            <img
              style={{ width: "50px" }}
              className="rounded-full ml-3"
              src="https://avatars.githubusercontent.com/u/97403179?s=400&u=ef6d2576225d289c623027bb4f8246251d424cba&v=4"
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">Rupesh Piwal</p>
            <p className="text-gray-500">@rupeshstwt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
