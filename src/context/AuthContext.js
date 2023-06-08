import { createContext, useContext, useState } from "react";
import { auth, provider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      setUser(user); // Kullanıcıyı ayarlayın
    } catch (error) {
      console.error(error);
      // Giriş işlemi sırasında bir hata oluşursa burada işleyin
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
