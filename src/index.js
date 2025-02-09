import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_BASE_URL}
      clientId={process.env.REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: `https://${process.env.REACT_APP_BASE_URL}/api/v2/`,
        scope: "read:current_user profile email"
      }}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);
