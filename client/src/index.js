import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderHistory from "./Auth0";
// import  Auth0Provider  from '@auth0/auth0-react';




ReactDOM.render(
  <Router>
    {/* <Auth0ProviderHistory> */}
      <App />
    {/* </Auth0ProviderHistory> */}
  </Router>,
  document.getElementById('root')
  
  
);
