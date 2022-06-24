import React, { useState, useEffect } from 'react';
import './styles/css/post.css';
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
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <ul id="posts-container">
      {posts.map(post => (
        <li key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.message}</p>
          {post.published ? (
            <button type="button" disabled>
              publish
            </button>
          ) : (
            <button type="button">publish</button>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Posts;
