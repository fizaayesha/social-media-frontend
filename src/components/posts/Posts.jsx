import React from "react";
import Post from "../post/Post";
import "./posts.scss";
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Ayesha Khan",
      userId: 1,
      profilePic:
        "https://images.ctfassets.net/hrltx12pl8hq/6czYVzKLCtCAjcfDc6Q9h2/b268534ee924bcd993e530919d5f96d1/Holiday-Look-Book_Thumb.jpg?fit=fill&w=480&h=270",
      desc: "Hello assume me as a girl!",
      img: "https://images.ctfassets.net/hrltx12pl8hq/6czYVzKLCtCAjcfDc6Q9h2/b268534ee924bcd993e530919d5f96d1/Holiday-Look-Book_Thumb.jpg?fit=fill&w=480&h=270",
    },
    {
      id: 2,
      name: "Saniya Khan",
      userId: 2,
      profilePic:
        "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png",
      img: "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png",
      desc: "Hello assume me as a girl!",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <div className="post">
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};
export default Posts;
