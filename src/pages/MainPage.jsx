import React, { useEffect } from 'react';
import PostsList from '../components/PostsList'

/**
 * Main page
 */
export default function MainPage() {
  useEffect(() => {
    document.title = `Melancholic's Posts - All posts`;
  });

  return <PostsList />;
}
