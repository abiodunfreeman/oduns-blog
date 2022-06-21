import React, { useState } from 'react';

const Form = () => {
  // states
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    published: false,
  });
  const [json, setJson] = useState('jsonn');

  //onChange / onSubmit
  const handleFormSubmit = async e => {
    e.preventDefault();
    setJson(JSON.stringify(formData));

    try {
      const add = await fetch('http://localhost:5000/posts/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(add);
    } catch (err) {
      console.error();
    }
  };
  const handleFormChange = e => {
    const target = e.target.name;
    console.log(formData);

    setFormData(oldFormData => {
      return {
        ...oldFormData,
        [target]: target === 'published' ? !formData.published : e.target.value,
      };
    });
  };

  //return
  return (
    <div>
      <h2>{json}</h2>
      <h1>{formData.title}</h1>
      <h1>{formData.message}</h1>
      <h1>{formData.published}</h1>
      <form action="/posts/create/" method="post" onSubmit={handleFormSubmit}>
        <label for="post-form-title">Title:</label>
        <input
          type="text"
          name="title"
          id="post-form-title"
          onChange={handleFormChange}
        />
        <label for="post-form-message">message:</label>
        <textarea
          type="text"
          name="message"
          id="post-form-message"
          onChange={handleFormChange}
        />
        <label for="post-form-published">Publish?</label>

        <input
          type="checkbox"
          name="published"
          id="post-form-published"
          onChange={handleFormChange}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};
export default Form;
