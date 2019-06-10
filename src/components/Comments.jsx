import React from 'react';
import Comment from './Comment';
import { List } from '@material-ui/core';

/**
 * List of comments component.
 */
export default function Comments(props) {
  return (
    <div>
      <List>
        {props.comments.map(comment => (
          <Comment
            key={comment.id}
            email={comment.email}
            name={comment.name}
            body={comment.body}
          />
        ))}
      </List>
    </div>
  );
}
