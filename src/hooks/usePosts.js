import { useEffect, useState } from 'react';
import Axios from 'axios';

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Custom hook to work with list of posts.
 * @returns {Object} Returns posts list and error flag.
 */
export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get(POSTS_API_URL)
      .then(res => setPosts(res.data))
      .catch(() => setError(true));
    console.log('effect used');
  }, []);

  return { posts, error };
}
