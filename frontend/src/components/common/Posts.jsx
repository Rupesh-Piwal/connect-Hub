import { POSTS } from "../../utils/dummy";
import Post from "./Post";
import PostSkeleton from "../skeletons/PostSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const Posts = ({ feedType, username, userId }) => {
  const getPostEndpoint = (feedType, username, userId) => {
    if (feedType === "forYou") {
      return "/api/posts/all";
    } else if (feedType === "following") {
      return "/api/posts/following";
    } else if (feedType === "posts") {
      return `/api/posts/user/${username}`;
    } else if (feedType === "likes") {
      return `/api/posts/likes/${userId}`;
    } else {
      return "/api/posts/all"; // Default fallback
    }
  };

  const POST_ENDPOINT = getPostEndpoint();
  const {
    data: posts,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await axios.get(POST_ENDPOINT);
        const data = res.data;
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        throw new Error(error.response?.data?.error || "Something went wrong");
      }
    },
  });

  useEffect(() => {
    refetch();
  }, [feedType, refetch, username]);

  return (
    <>
      {(isLoading || isRefetching) && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && !isRefetching && posts?.length === 0 && (
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && !isRefetching && posts && (
        <div>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
