import React from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';

function MainPage(): JSX.Element {
  return (
    <div style={{ marginTop: '100px' }}>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default MainPage;
