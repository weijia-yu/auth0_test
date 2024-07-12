import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="domain"
    clientId="id"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/dashboard"
    }}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
