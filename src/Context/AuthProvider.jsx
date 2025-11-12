import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInGoogle = () => {
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
  };

  const createUser =(email, password)=>{
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInwithEmail =(email, password)=>{
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutuser = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
     setUser(currentUser)
      setLoading(false)
    })

    return ()=>{
      unsubscribe()
    }
  },[])

  const authInfo = {
    signInGoogle,
    createUser,
    signInwithEmail,
    signOutuser,
    user,
    loading
  };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
