import React from 'react';
import usePosts from '../hooks/usePosts';
import { Link } from 'react-router-dom';

/**
 * List of posts component
 */
export default function ArticlesList() {
  const { posts, error, loading } = usePosts();

  /**
   * Cut post's body by selected number of symbols.
   * @param {String} postBody Body of post.
   * @param {Number} resultLength Number of symbols of result short body (default is 150).
   * @returns {String} Returns final short body.
   */
  function cutLongBody(postBody, resultLength = 150) {
    return `${postBody.substr(0, resultLength)}...`;
  }
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
              <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{cutLongBody(post.body)}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
