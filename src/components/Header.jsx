import React from 'react';
import { Typography, Toolbar, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

/**
 * Application header component
 */
export default function Header() {
  const styles = {
    navbar: {
      marginBottom: 90,
    },
    navbarTitle: {
      color: '#fff',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.navbar}>
      <AppBar color='primary'>
        <Toolbar>
          <Link to='/'>
            <Typography variant='h5'>
              <b style={styles.navbarTitle}>Melancholic's Posts</b>
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
