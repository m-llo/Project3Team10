import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/Login/LoginButton.js';

const Login = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    !isAuthenticated &&
    <div className='login-component fluid text-center' style={{'marginTop': '10%'}}>
      <h1>Restricted Access</h1>
      <h4>Please log in to continue</h4>
      <LoginButton />
    </div>
  )
}

export default Login