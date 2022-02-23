import './main.css';
import '../i18n';

import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

import { HelmetProvider } from 'react-helmet-async';

import Router from '../routes';
import Userfront from '@userfront/core';

import { BrowserRouter } from 'react-router-dom';

Userfront.init(process.env.REACT_APP_UF_TENANT_ID);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_GRAPHQL_API_URI,
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': process.env.REACT_APP_CLIENT_NAME,
    'client-version': process.env.REACT_APP_CLIENT_VERSION,
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
