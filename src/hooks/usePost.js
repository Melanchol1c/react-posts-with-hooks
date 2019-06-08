import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Custom hook to work with selected post by id.
 * @param {Number} postId Id of post.
 * @returns {Object} Returns post object and error flag.
 */
export default function usePosts(postId) {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get(`${POSTS_API_URL}/${postId}`)
      .then(res => setPost(res.data))
      .catch(() => setError(true));
  }, [postId]);

  return { post, error };
}
