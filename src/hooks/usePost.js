import { useEffect, useState } from 'react';
import Axios from 'axios';
import { POSTS_API } from '../apiUrls';

/**
 * Custom hook to work with selected post by id.
 * @param {Number} postId Id of post.
 * @returns {Object} Returns post object and error flag.
 */
export default function usePost(postId) {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get(`${POSTS_API}/${postId}`)
      .then(res => setPost(res.data))
      .catch(() => setError(true));
  }, [postId]);

  return { post, error };
}
