import React from 'react';
import MuiProvider from './themProvider/MUI';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/app.route';
import './index.css';

function App() {
  return (
    <MuiProvider direction={'rtl'}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </MuiProvider>
  );
}

export default App;
