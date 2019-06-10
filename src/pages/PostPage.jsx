import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePost from '../hooks/usePost';
import Comments from '../components/Comments';
import ErrorMsg from '../components/ErrorMsg';
import Loader from '../components/Loader/Loader';

/**
 * Post's page.
 */
export default function PostPage(props) {
  useEffect(() => {
    document.title = `Melancholic's Posts - ${post.title} profile`;
  });

  const postId = props.match.params.postId;
  const {
    post,
    user,
    comments,
    postError,
    postLoading,
    commentsError,
    commentsLoading,
  } = usePost(postId);

  const styles = {
    postTitle: {
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    link: {
      color: '#3f51b5',
    },
    commentsSectionTitle: {
      textAlign: 'center',
      marginBottom: -20,
      marginTop: 50,
    },
  };

  return (
    <div>
      {postError && <ErrorMsg />}
      {postLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <h4>
            Author:
            <Link to={`/users/${user.id}`}>
              <span style={styles.link}>@{user.username}</span>
            </Link>
          </h4>
          <h2 style={styles.postTitle}>{post.title}</h2>
          <p>{post.body}</p>
          <h2 style={styles.commentsSectionTitle}>Comments</h2>
          {commentsError && <ErrorMsg />}
          {commentsLoading ? <Loader /> : <Comments comments={comments} />}
        </Fragment>
      )}
    </div>
  );
}
