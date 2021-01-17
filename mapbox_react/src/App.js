
import React, { useEffect, useRef, useState, useCallback } from 'react'
// import useChat from './useChat'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Input, message, Tag } from 'antd'
import Map from './Map'
import Form from './form'
import useChat from './useChat'
import PhotoLibrary from './photoLibrary/PhotoLibrary'

function App() {
    // const { status, opened, messages, sendMessage, clearMessages } = useChat()

    const [windowmaster, setMaster] = useState('')
    const [mst, setPressed] = useState(0)
    //const bodyRef = useRef(null)
    const containerref = useRef(null)
    const [password, setPassword] = useState('')
    const [password_again, setPassword_again] = useState('')
    const [signtype, setSigntype] = useState('true')
    const [dep, setDep] = useState('')
    const { getUsers, addUser } = useChat()
    const changeMst = (nxtMst) => {
        setPressed(nxtMst)
    }
    /*useEffect(() => {
        bodyRef.current.focus();
    }, mst)*/
    { console.log('幹', mst) };
    if (mst == 0) {
        return (
            <Form change={setMaster} /*ref={bodyRef}*/
                master={windowmaster} conref={containerref}
                switch={changeMst} page={mst} />
        )
    }
    else if (mst == 1) {
        return (<Map name={windowmaster} switch
            ={setPressed} dep={setDep} />)
    }
    else {
        return (
            <PhotoLibrary department={dep}
                switch={setPressed} />
        )
    }
    /*return (

        (mst == 0) ? (
            <Form change={setMaster} ref={bodyRef}
    master = { windowmaster } conref = { containerref }
    switch= { changeMst } page = { mst } />
        ) : (

        (mst == 1) ? (<Map name={windowmaster} switch={setPressed} dep={setDep} />)
            : (
                <PhotoLibrary department={dep} switch={setPressed} />
            )
    )
    )*/
}
export default App
