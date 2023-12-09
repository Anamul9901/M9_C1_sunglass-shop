/* eslint-disable react/prop-types */

import { createContext, useEffect, useState  } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebaseConfig";


export const AuthContex = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})


    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // email,pass sign up
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    //email,pass log in
    const logInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    
    // using observer
    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) =>{
    //         setUser(user)
    //     });
    // },[])

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            setUser(user)
        });
        return ()=>{
            unSubscribe();
        } 
            
    },[])


    console.log(user)


    const authentications = {
        googleLogin,
        createUser,
        logInUser,
    }


    return (
        <AuthContex.Provider value={authentications}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;