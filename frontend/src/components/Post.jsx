import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

const Post = () => {
  return (
    <>
      <div className="bg-yellow-400 w-full h-[250px] m-2 flex flex-row relative  ">
        <div className="bg-blue-300 w-[18%]">
          <img
            style={{ width: "40px" }}
            className="rounded-full ml-3"
            src="https://avatars.githubusercontent.com/u/97403179?s=400&u=ef6d2576225d289c623027bb4f8246251d424cba&v=4"
            alt=""
          />
        </div>
        <div className=" w-[82%] bg-red-200 pl-2">
          <div className=" bg-green-300 flex flex-row gap-2 ">
            <p>Rupesh Piwal</p>
            <p>rupeshtwts</p>
            <p>20 hr</p>
          </div>
          <div className="bg-purple-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit{" "}
          </div>
          <div className="flex flex-row justify-center items-center gap-[40px] left-[18%] bg-indigo-400 absolute bottom-0 h-[30px]">
            <div className="flex items-center gap-2">
              <FaRegComment /> <p>30</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineHeart /> <p>30</p>
            </div>
            <div>
              <BiBookmark />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 w-full h-[250px] m-2 flex flex-row relative ">
        <div className="bg-blue-300 w-[18%]">
          <img
            style={{ width: "40px" }}
            className="rounded-full ml-3"
            src="https://avatars.githubusercontent.com/u/97403179?s=400&u=ef6d2576225d289c623027bb4f8246251d424cba&v=4"
            alt=""
          />
        </div>
        <div className=" w-[82%] bg-red-200 pl-2">
          <div className=" bg-green-300 flex flex-row gap-2 ">
            <p>Rupesh Piwal</p>
            <p>rupeshtwts</p>
            <p>20 hr</p>
          </div>
          <div className="bg-purple-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit{" "}
          </div>
          <div className="flex flex-row justify-center items-center gap-[40px] left-[18%] bg-indigo-400 absolute bottom-0 h-[30px]">
            <div className="flex items-center gap-2">
              <FaRegComment /> <p>30</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineHeart /> <p>30</p>
            </div>
            <div>
              <BiBookmark />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 w-full h-[250px] m-2 flex flex-row relative ">
        <div className="bg-blue-300 w-[18%]">
          <img
            style={{ width: "40px" }}
            className="rounded-full ml-3"
            src="https://avatars.githubusercontent.com/u/97403179?s=400&u=ef6d2576225d289c623027bb4f8246251d424cba&v=4"
            alt=""
          />
        </div>
        <div className=" w-[82%] bg-red-200 pl-2">
          <div className=" bg-green-300 flex flex-row gap-2 ">
            <p>Rupesh Piwal</p>
            <p>rupeshtwts</p>
            <p>20 hr</p>
          </div>
          <div className="bg-purple-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit{" "}
          </div>
          <div className="flex flex-row justify-center items-center gap-[40px] left-[18%] bg-indigo-400 absolute bottom-0 h-[30px]">
            <div className="flex items-center gap-2">
              <FaRegComment /> <p>30</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineHeart /> <p>30</p>
            </div>
            <div>
              <BiBookmark />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
