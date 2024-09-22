import React from 'react'
import { useEffect, useState } from "react"
import {auth} from '../../backend/firebaseconfig'
import { onAuthStateChanged } from 'firebase/auth';


function AuthListener() {
    const[loggedIn, setLoggedIn] = useState(false);

    const[checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        });
    }, []);

    return {loggedIn, checkingStatus}

}

export default AuthListener


