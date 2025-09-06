jsx
// src/components/PostItem.js
import React from 'react';

const PostItem = ({ post }) => {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </li>
  );
};

export default PostItem;
