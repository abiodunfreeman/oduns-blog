import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //fetch posts from server
  useEffect(() => {
    fetch('/posts/')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(jsonRes => setPosts(jsonRes));
  });

  return (
    <div>
      {posts.map(post => (
        <li>
          <h1>{post.title}</h1>
          <h2>{post.message}</h2>
        </li>
      ))}
    </div>
  );
};
export default Posts;
