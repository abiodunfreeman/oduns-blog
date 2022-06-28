import React, { useState, useEffect } from 'react';
import './styles/css/post.css';
import axios from 'axios';
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currPost, setCurrPost] = useState();
  const fetchPost = async () => {
    //fetch posts from server
    try {
      const res = await fetch('/posts/');
      const json = await res.json();

      setPosts(json);
    } catch (err) {
      console.log(err);
    }
  };

  // loads post on init load
  useEffect(() => {
    fetchPost();
  }, []);

  const handleDeletePost = async id => {
    console.log('delete post ran');
    const res = await axios.delete(`http://localhost:5000/posts/${id}/delete`);
    fetchPost();
    console.log(res);
  };
  const handlePostClick = id => {
    console.log('slkfjsl;k');
    const selectedPost = posts
      .filter(post => post._id === id)
      .map(post => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <h2>{post.message}</h2>
          <h3>{post.published ? 'yup' : 'no'}</h3>
          <button onClick={() => handleDeletePost(post._id)}>
            delete post
          </button>
        </div>
      ))[0];
    console.log(selectedPost);
    setCurrPost(selectedPost);
  };

  return (
    <div id="post-container">
      <div style={{ display: 'flex' }}>
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          {posts.map(post => (
            <button
              style={{ display: 'block', margin: '1rem 0' }}
              onClick={() => handlePostClick(post._id)}
              key={post._id}
            >
              {post.title}
            </button>
          ))}
        </nav>
      </div>
      <div id="current-post">{currPost}</div>
    </div>
  );
};
export default Posts;
