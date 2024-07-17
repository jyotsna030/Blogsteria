// src/components/AddPost.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const addPost = () => {
    db.collection('posts').add({
      title,
      content,
    }).then(docRef => {
      dispatch({ type: 'ADD_POST', payload: { id: docRef.id, title, content } });
    });
  };

  return (
    <div>
      <h2>Add Post</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></textarea>
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default AddPost;
