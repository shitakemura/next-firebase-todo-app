import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

type AuthContextType = {
  user: firebase.User | null;
  isLoading: boolean;
};

const AuthContext = createContext({} as AuthContextType);

type AuthProviderType = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribed();
  });

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
