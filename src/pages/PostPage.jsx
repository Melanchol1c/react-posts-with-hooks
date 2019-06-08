import React, { Fragment } from 'react';
import usePosts from '../hooks/usePost';

/**
 * Post's page.
 */
export default function PostPage(props) {
  const postId = props.match.params.postId;
  const { post, error, loading } = usePosts(postId);

  return (
    <div>
      {error ? (
        <span>Sorry, there is an error with server...</span>
      ) : loading ? (
        <span>Loading...</span>
      ) : (
        <Fragment>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </Fragment>
      )}
    </div>
  );
}
