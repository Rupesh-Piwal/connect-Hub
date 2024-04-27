import Logo from "../assets/twitter-logo.jpg";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import NavsMobile from "./NavsMobile.jsx";

const Feed = () => {
  return (
    <div className="w-full lg:w-[46%] ">
      <div className="w-full bg-black lg:hidden flex justify-between items-center px-1.5 py-4">
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
          <AiOutlinePlusCircle
            style={{
              color: "#8B5CF6",
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      </div>
      <div className="w-full lg:w-[46%] overflow-y-auto custom-scrollbar bg-black">
        <div>
          hello
        </div>
      </div>
      <NavsMobile />
    </div>
  );
};

export default Feed;
