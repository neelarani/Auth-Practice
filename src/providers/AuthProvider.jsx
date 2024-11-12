import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../fireBase/fireBase-init';

export const AuthContext = createContext(null);

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('current User', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    loading,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 * create context with null as default
 * create provider
 * set a value with something (authInfo)
 * use the authProvider in the main.jsx
 * access the children idside the authProvider  in the main.jsx
 * export AuthContext
 *
 */
