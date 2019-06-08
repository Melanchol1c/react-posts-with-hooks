import React from 'react';
import usePosts from '../hooks/usePosts';
import { Link } from 'react-router-dom';

/**
 * List of posts component
 */
export default function ArticlesList() {
  const { posts, error, loading } = usePosts();
  return (
    <div>
      {error ? (
        <span>There is an error with server...</span>
      ) : loading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {posts.map(post => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
              <p>{post.body.substr(0, 200)}...</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
