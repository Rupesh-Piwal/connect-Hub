import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

const Post = () => {
  return (
    <>
      <div className=" w-full  m-2 flex flex-row  border-t border-gray-700 bg-black  ">
        <div className=" w-[18%]">
          <img
            className="rounded-full mx-[25%] my-3 w-[40px] sm:w-[60px]"
            src="https://avatars.githubusercontent.com/u/97403179?s=400&u=ef6d2576225d289c623027bb4f8246251d424cba&v=4"
            alt=""
          />
        </div>
        <div className=" w-[82%] pl-2 mt-3">
          <div className="  flex flex-row gap-2 ">
            <p className="font-bold text-white">Rupesh Piwal</p>
            <p className="text-gray-500">@rupeshtwts</p>
            <p className="text-gray-500 font-se">14h</p>
          </div>
          <div className=" mt-3 mb-5 text-white">i got remote job...!!!</div>
          <div className="flex flex-row justify-start items-center gap-[50px]   h-[30px] ">
            <div className="flex items-center gap-2">
              <FaRegComment
                className=" rounded-full "
                style={{
                  color: "gray",
                  cursor: "pointer",
                  width: "30px",
                }}
              />{" "}
              <p className="text-gray-500">30</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRetweet
                style={{
                  color: "gray",
                  cursor: "pointer",
                }}
              />{" "}
              <p className="text-gray-500">5</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineHeart
                style={{
                  color: "gray",
                  cursor: "pointer",
                }}
              />{" "}
              <p className="text-gray-500">30</p>
            </div>
            <div>
              <BiBookmark
                style={{
                  color: "gray",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
