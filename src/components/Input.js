import React, { useState, useContext } from 'react'
import { ContextProvider } from '../context/ContextProvider'

function Input() {
    const [msg, Setmsg] = useState("");
    const {sendMsg } = useContext(ContextProvider);
    const storeMsg = (e) => {
        e.preventDefault();
        sendMsg(msg);
        Setmsg("");
    }   
    return (
        <>
        <div className="input__form">
            <form onSubmit={storeMsg}>
                <input 
                type="text"
                 className="input__control"
                  placeholder="Write your Message here"
                  onChange={(e) => Setmsg(e.target.value)}
                  value={msg}
                  required  
                   />
            </form>
        </div>
        </>
    )
}

export default Input
