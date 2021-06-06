import React from 'react';


const LogoutButton = () => {


  return (
      <button
      variant="outline-info" 
      onClick={() => logout()}>
        Log Out
      </button>
    
  );
};

export default LogoutButton;