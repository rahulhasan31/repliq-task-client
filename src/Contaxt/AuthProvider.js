import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

const auth=getAuth(app)
export const authContext=createContext()

const AuthProvider = ({children}) => {
    const [user , setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout=()=>{
        return signOut(auth)
        .then(result=>{
            console.log(result);
        })
        
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log(currentUser.uid);
           setLoading(false)
        })
        return ()=>{unsubscribe()} 
    },[])
    const info={createUser, login, user,logout }
    return (
        <div>
            <authContext.Provider value={info}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;