import { useEffect, useState } from 'react';
import Axios from 'axios';
import { POSTS_API } from '../apiUrls';

/**
 * Custom hook to work with list of posts.
 * @returns {Object} Returns posts list and error flag.
 */
export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get(POSTS_API)
      .then(res => setPosts(res.data))
      .catch(() => setError(true));
  }, []);

  return { posts, error };
}
