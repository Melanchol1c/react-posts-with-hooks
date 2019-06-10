import React from 'react';
import usePosts from '../hooks/usePosts';
import { List } from '@material-ui/core';
import Post from './Post';
import ErrorMsg from './ErrorMsg';
import Loader from './Loader/Loader';

/**
 * List of posts component
 */
export default function PostsList() {
  const { posts, error, loading } = usePosts();

  return (
    <div>
      {error && <ErrorMsg />}

      {loading ? (
        <Loader />
      ) : (
        <List>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </List>
      )}
    </div>
  );
}
