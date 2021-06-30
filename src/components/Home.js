import React, { useContext } from 'react'
import Messages from './Messages'
import Welcome from './Welcome'
import { ContextProvider } from "../context/ContextProvider";

function Home() {
    const { user } = useContext(ContextProvider);   
    return (
        <>
            {user ? <Messages /> : <Welcome />}
        </>
    )
}

export default Home
