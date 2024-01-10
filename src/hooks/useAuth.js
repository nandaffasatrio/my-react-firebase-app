// useAuth.js
import { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "./firebase"; // Replace with your Firebase setup

const useAuth = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGoogle,
    signOut,
  };
};

export default useAuth;
