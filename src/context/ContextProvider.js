/* eslint-disable no-lone-blocks */
import React, { createContext, useEffect, useState } from 'react';
import {auth, db} from '../config'
import firebase from 'firebase';

export const ContextProvider = createContext();

const ContextFun = (props) => {
    const [user, setuser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [allmsg, setAllmsg] = useState([]);
    const register = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            firebase.auth().signInWithRedirect(provider);
        })
    }
    const sendMsg = (msg) => {
        db.collection("messages").add({
            msg,
            photo: user.photoURL,
            username: user.displayName,
            email: user.email,
            currentTime: firebase.firestore.FieldValue.serverTimestamp(),    
        })
    }
    const logout = () => {
        auth.signOut().then(() => {
            setuser(null);
        })
    }

    





    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setuser(user);
            setLoader(false);
        })
        //fetch message from database

        db.collection("messages").orderBy("currentTime","asc").onSnapshot((snp) => {
            
            setAllmsg(snp.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data()   
            })))
        })


    },[])
    //console.log(user);
    //console.log(allmsg); 
    
    return(<ContextProvider.Provider value={{register, user, loader, logout, sendMsg, allmsg}}>
                {props.children}
         </ContextProvider.Provider>)
}

export default ContextFun