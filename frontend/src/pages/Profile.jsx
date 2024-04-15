
import FollowingFeed from "../components/FollowingFeed";
import Post from "../components/Post";

const Profile = ({}) => {
  return (
    <>
      <div className="relative">
        <img
          src="https://pbs.twimg.com/profile_banners/1455007168520806400/1712137381/1500x500"
          alt="Cover Photo"
          className="w-full"
        />
        <div className="absolute bottom-[-50px] left-[20px]">
          <img
            src="https://avatars.githubusercontent.com/u/97403179?s=400&u=ef6d2576225d289c623027bb4f8246251d424cba&v=4"
            alt="Profile Photo"
            className="w-[100px] h-[100px] rounded-full border-4 border-black lg:w-[180px] lg:h-[180px]"
          />
        </div>
      </div>
      <div className="name bg-pink-500 mt-[55px] ml-[30px]">
        <p className="text-3xl text-white">Rupesh Piwal</p>
        <p className="text-xl text-gray-600">@rupeshtwts</p>
      </div>
      <div className="bio ml-[30px] my-2.5">building cool stuf in js/ts</div>
      <div className="bg-yellow-300 flex gap-[30px] ml-[30px]">
        <p>
          145 <span>Following</span>
        </p>
        <p>
          2034 <span>Followers</span>
        </p>
      </div>
    </>
  );
};

export default Profile;
