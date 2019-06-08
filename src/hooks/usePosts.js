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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Melancholic Blog - All Posts'
    Axios.get(POSTS_API)
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return { posts, loading, error };
}
