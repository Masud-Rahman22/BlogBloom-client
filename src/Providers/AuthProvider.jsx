import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Config/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
            const loggedUser = { email: userEmail }

            if (currentUser !== null) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            // else{
            //     axiosSecure.post('/logout',loggedUser)
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            // }
        })
        return () => {
            unsubscribe()
        }
    }, [user?.email])
    const authInformation = {
        googleLogin,
        loading,
        register,
        Login,
        Logout,
        user
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;