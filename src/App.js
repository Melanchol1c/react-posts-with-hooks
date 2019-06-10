import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';
import Header from './components/Header';
import { Container } from '@material-ui/core';

/**
 * Main application component
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container>
          <AppRouter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
