import { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

const NavsMobile = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed bottom-0 w-full bg-black border-t border-gray-600 py-3 px-4 flex justify-between transition-transform transform ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <GoHomeFill style={{ color: "#ffffff", width: "35px", height: "35px" }} />
      <BiSearch style={{ color: "#ffffff", width: "35px", height: "35px" }} />
      <AiOutlinePlusCircle
        style={{
          color: "#8B5CF6",
          width: "38px",
          height: "38px",
        }}
      />
      <HiOutlineEnvelope
        style={{ color: "#ffffff", width: "35px", height: "35px" }}
      />
      <FiBookmark style={{ color: "#ffffff", width: "35px", height: "35px" }} />
    </div>
  );
};

export default NavsMobile;
