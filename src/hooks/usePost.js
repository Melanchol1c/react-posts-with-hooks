import { useEffect, useState } from 'react';
import Axios from 'axios';
import { POSTS_API, USERS_API, COMMENTS_API } from '../apiUrls';

/**
 * Custom hook to work with selected post by id.
 * @param {Number} postId Id of post.
 * @returns {Object} Returns post, comments, user data, error flag, loading flag.
 */
export default function usePost(postId) {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  const [postError, setPostError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [commentsError, setCommentsError] = useState(false);

  const [postLoading, setPostLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      setPostLoading(true);
      setUserLoading(true);
      setCommentsLoading(true);

      setPostError(false);
      setCommentsError(false);
      setUserError(false);

      try {
        const postRes = await Axios.get(`${POSTS_API}/${postId}`);
        setPost(postRes.data);
        setPostLoading(false);
      } catch (error) {
        setPostError(true);
        setPostLoading(false);
      }

      try {
        if (post.userId) {
          const userRes = await Axios.get(`${USERS_API}/${post.userId}`);
          setUser(userRes.data);
          setUserLoading(false);
        }
      } catch (error) {
        setUserError(true);
        setUserLoading(false);
      }

      try {
        const commentsSearchParams = new URLSearchParams();
        commentsSearchParams.append('postId', postId);
        const commentsRes = await Axios.get(
          `${COMMENTS_API}?${commentsSearchParams}`
        );
        setComments(commentsRes.data);
        setCommentsLoading(false);
      } catch (error) {
        setCommentsError(true);
        setCommentsLoading(false);
      }
    };

    fetchPostData();
  }, [post.userId, postId]);

  return {
    post,
    postError,
    postLoading,
    user,
    comments,
    userError,
    commentsError,
    userLoading,
    commentsLoading,
  };
}
