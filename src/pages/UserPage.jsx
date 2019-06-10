import React, { useEffect } from 'react';
import useUser from '../hooks/user/useUser';
import useUsersPosts from '../hooks/user/useUsersPosts';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

/**
 * User profile page.
 */
export default function UserPage(props) {
  const userId = props.match.params.userId;
  const { user } = useUser(userId);
  const { userPosts } = useUsersPosts(userId);
  useEffect(() => {
    document.title = `Melancholic's Posts - @${user.username} profile`;
  }, [user.username]);

  const styles = {
    link: {
      color: '#3f51b5',
      textDecoration:'none'
    },
  }

  return (
    <div>
      @{user.username}
      <h2>{user.name}</h2>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <p>
        website: <a href={user.website}>{user.website}</a>
      </p>
      <h2>Posts</h2>
      <List>
        {userPosts.map(post => (
          <ListItem key={post.id}>
            <Link to={`/posts/${post.id}`} style={styles.link}><span >{post.title}</span></Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
