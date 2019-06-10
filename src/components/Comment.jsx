import React from 'react';
import { Typography, ListItemText, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 * Comment component for rendering in list of comments
 */
function Comment(props) {
  const styles = {
    author: {
      opacity: 0.6
    }
  }

  return (
    <div>
      <ListItem>
        <ListItemText
          primary={
            <div>
              <h4 style={styles.author}>@{props.email}</h4>
              <h3>{props.name}</h3>
            </div>
          }
          secondary={
            <React.Fragment>
              <Typography component='span' variant='body1' color='textPrimary'>
                {props.body}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}

Comment.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  body: PropTypes.string,
};

export default Comment;
