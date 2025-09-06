jsx
// src/api/api.js
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export default fetchPosts;