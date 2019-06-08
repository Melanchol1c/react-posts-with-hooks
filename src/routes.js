import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostPage from './pages/PostPage'

const AppRouter = () => (
  <Switch>
    <Route exact path='/' component={PostsList} />
    <Route path='/posts/:postId' component={PostPage} />
  </Switch>
);

export default AppRouter;
