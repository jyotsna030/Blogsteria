// src/components/Post.js
import React from 'react';

const Post = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default Post;
