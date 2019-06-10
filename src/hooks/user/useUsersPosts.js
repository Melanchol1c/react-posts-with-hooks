import { useState, useEffect } from 'react';
import { POSTS_API } from '../../apiUrls';
import Axios from 'axios';

/**
 *
 * @param {Number} userId Id of user need to fetch posts.
 */
export default function useUsersPosts(userId) {
  const [userPosts, setUserPosts] = useState([]);
  const [userPostsError, setUserPostsError] = useState(false);

  useEffect(() => {
    const postsSearchParams = new URLSearchParams();
    postsSearchParams.append('userId', userId);

    Axios.get(`${POSTS_API}?${postsSearchParams}`)
      .then(res => {
        setUserPosts(res.data);
      })
      .catch(() => {
        setUserPostsError(true);
      });
  }, [userId]);

  return { userPosts, userPostsError };
}
