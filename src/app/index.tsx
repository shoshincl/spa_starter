import './main.css';
import '../i18n';

import { HelmetProvider } from 'react-helmet-async';

import Router from '../routes';
import Userfront from '@userfront/core';

import { BrowserRouter } from 'react-router-dom';

Userfront.init(process.env.REACT_APP_UF_TENANT_ID);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
