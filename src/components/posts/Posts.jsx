import React from "react";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Posts = ({userId}) => {
  const fetchPosts = async () => {
    const response = await makeRequest.get("/posts?userId="+userId);
    return response.data;
  };
  const { data, isLoading, error } = useQuery(['posts'], fetchPosts);
  // const { isLoading, error, data } = useQuery(["posts"], () => {
  //   makeRequest.get("/posts").then((res) => {
  //     return res.data;
  //   });

  // if (isLoading) return "Loading...";
  // if (error) return "An error has occurred: " + error.message;
  // };
  // console.log(data);
  // const posts = [
  //   {
  //     id: 1,
  //     name: "Ayesha Khan",
  //     userId: 1,
  //     profilePic:
  //       "https://images.ctfassets.net/hrltx12pl8hq/6czYVzKLCtCAjcfDc6Q9h2/b268534ee924bcd993e530919d5f96d1/Holiday-Look-Book_Thumb.jpg?fit=fill&w=480&h=270",
  //     desc: "Hello assume me as a girl!",
  //     img: "https://images.ctfassets.net/hrltx12pl8hq/6czYVzKLCtCAjcfDc6Q9h2/b268534ee924bcd993e530919d5f96d1/Holiday-Look-Book_Thumb.jpg?fit=fill&w=480&h=270",
  //   },
  //   {
  //     id: 2,
  //     name: "Saniya Khan",
  //     userId: 2,
  //     profilePic:
  //       "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png",
  //     img: "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png",
  //     desc: "Hello assume me Ias a girl!",
  //   },
  // ];

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
    </div>
  );
};
export default Posts;