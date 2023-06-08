import React from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthProvider as ContextAuthProvider } from "./AuthContext";
import { auth, provider } from "../firebase";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const authInstance = getAuth();
      const result = await signInWithPopup(authInstance, provider);
      const user = result.user;
      // Set the user after successful login
      navigate("/MainApp"); // Redirect to MainApp page after successful login
    } catch (error) {
      console.error(error);
      // Handle error during login process
    }
  };

  return (
    <ContextAuthProvider>
      <button onClick={signInWithGoogle}>Google ile Giriş Yap</button>
      {children}
    </ContextAuthProvider>
  );
};

export default AuthProvider;
