import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';

const AppRouter = () => (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route exact path='/posts/:postId' component={PostPage} />
    <Route exact path='/users/:userId' component={UserPage} />
  </Switch>
);

export default AppRouter;
