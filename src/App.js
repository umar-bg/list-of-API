jsx
// src/App.js
import React, { useState, useEffect } from 'react';
import fetchPosts from './api/api';
import PostList from './components/PostList';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={data} />
    </div>
  );
}

export default App;