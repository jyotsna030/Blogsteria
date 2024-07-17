// src/pages/Blog.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import Post from '../components/Post';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await db.collection('posts').get();
      const postsData = postsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      postsData.forEach((post) => {
        dispatch({ type: 'ADD_POST', payload: post });
      });
      setLoading(false);
    };

    fetchPosts();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
