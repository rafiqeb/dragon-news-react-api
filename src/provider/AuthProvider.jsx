import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../components/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const creatNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        creatNewUser, user, setUser, logout, userLogin, loading,
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

export default AuthProvider;