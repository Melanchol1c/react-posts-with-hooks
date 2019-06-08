import React from 'react';
import usePosts from '../hooks/usePosts';
import Post from './Post';

/**
 * List of articles component
 */
export default function ArticlesList() {
  const { posts, error } = usePosts();
  return (
    <div>
      {error ? (
        <span>There is an error with server...</span>
      ) : (
        <ul>
          {posts.map(postData => (
            <Post key={postData.id} data={postData} />
          ))}
        </ul>
      )}
    </div>
  );
}
