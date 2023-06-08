import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import GoogleButton from "./components/GoogleButton";
import "./components/Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";


const Login = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuthContext();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/MainApp");
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 id="logo-login">Note It!</h1>
        <GoogleButton onClick={handleGoogleSignIn} id="logo-login" />
      </div>
    </div>
  );
};

export default Login;
