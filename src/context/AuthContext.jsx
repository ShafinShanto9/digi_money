import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { auth, db } from "../firebase"

const UserContext = createContext()
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

      const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        return setDoc(doc(db, 'users', email), {
        saveCoin: [],
        });
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logOut, user }}>
      {children}
    </UserContext.Provider>
  );
    
}

export const UserAuth = () => {
    return useContext(UserContext)
}