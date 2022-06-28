import React, { useState, useEffect } from 'react';
import './styles/css/post.css';
import axios from 'axios';
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currPost, setCurrPost] = useState();
  //fetch posts from server
  useEffect(() => {
    /* 
    fetch('/posts/')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(jsonRes => setPosts(jsonRes));
    */
    const fetchPost = async () => {
      try {
        const res = await fetch('/posts/');
        const json = await res.json();

        setPosts(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);
  useEffect(() => {
    // setPostJSX(prevJSX => {
    //   return posts.map(post => {
    //     return (
    //       <div key={post._id}>
    //         <h1>{posts[0].title}</h1>
    //         <h2>{posts[0].message}</h2>
    //       </div>
    //     );
    //   });
    // });
  }, [posts]);

  const handleDeletePost = async id => {
    console.log('delete post ran');
    const res = await axios.delete(
      `http://localhost:5000/posts/62b136482afb4c7e8f894236/delete`
    );
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
      {/* <ul id="posts-container">
        {posts.map(post => (
          <li key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.message}</p>
          </li>
        ))}
      </ul> */}
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
