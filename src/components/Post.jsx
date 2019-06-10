import React from 'react';
import { Typography, ListItemText, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

/**
 * Post component.
 */
export default function Post({ post }) {
  /**
   * Cut post's body by selected number of symbols.
   * @param {String} postBody Body of post.
   * @param {Number} resultLength Number of symbols of result short body (default is 150).
   * @returns {String} Returns final short body.
   */
  function cutLongBody(postBody, resultLength = 150) {
    return `${postBody.substr(0, resultLength)}...`;
  }

  const styles = {
    link: { textDecoration: 'none' },
  };

  return (
    <div>
      <ListItem key={post.id}>
        <ListItemText
          primary={
            <Link to={`/posts/${post.id}`} style={styles.link}>
              <Typography variant='h5' color='primary'>
                {post.title}
              </Typography>
            </Link>
          }
          secondary={
            <React.Fragment>
              <Typography variant='subtitle2' color='textPrimary'>
                {cutLongBody(post.body)}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}
