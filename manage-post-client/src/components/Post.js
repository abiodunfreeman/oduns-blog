import React, { useState, useEffect } from 'react';
import './styles/css/post.css';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  //fetch posts from server on page load
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

  function handleDeletePost(id) {
    console.log(id);
  }
  const publishedPost = posts
    .filter(post => post.published === true)
    .map(post => {
      return (
        <li key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.message}</p>
          <button onClick={() => handleDeletePost(post._id)}>delete</button>
        </li>
      );
    });
  return <ul id="posts-container">{publishedPost}</ul>;
};
export default Posts;
