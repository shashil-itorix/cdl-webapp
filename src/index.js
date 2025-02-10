import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer, Zoom } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom} />
    </Auth0Provider>,
);
