import { useState, useEffect } from 'react';
import { COMMENTS_API } from '../apiUrls';
import Axios from 'axios';

/**
 * Custom hook for comments of the post.
 */
export default function useComments(postId) {
  const [comments, setComments] = useState([]);
  const [commentsError, setCommentsError] = useState(false);
  useEffect(() => {
    const commentsSearchParams = new URLSearchParams();
    commentsSearchParams.append('postId', postId);
    const postCommentsUrl = `${COMMENTS_API}?${commentsSearchParams}`;

    Axios.get(postCommentsUrl)
      .then(res => {
        setComments(res.data);
      })
      .catch(() => setCommentsError(true));
  }, [postId]);

  return { comments, commentsError };
}
