import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import PageWrapper from './Page/PageWrapper';

function App() {
  return (
    <Router history={history}>
      <PageWrapper>
        <Routes />
      </PageWrapper>
    </Router>
  );
}
export default App;