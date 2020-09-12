import React from 'react';
import { Route } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
        <Routes />
        <GlobalStyle />
    </>
  );
}

export default App;
