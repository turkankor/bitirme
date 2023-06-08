import React from "react";


const GoogleButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="google-button">
      Google ile giriş yap!
    </button> 
    
  );
};

export default GoogleButton;
