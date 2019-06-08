import React from 'react';

/**
 * Component of current post
 */
export default function Post(props) {
  return (
    <li>
      {props.data.title} <br />
      {props.data.body.substr(0, 100)}...
    </li>
  );
}
