import React from 'react';
import { Container } from '@mui/material';

import MainPage from './components/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <Container maxWidth="md">
      <MainPage />
    </Container>
  );
}

export default App;
