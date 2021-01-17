
import React, { useEffect, useRef, useState, useCallback } from 'react'
// import useChat from './useChat'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Input, message, Tag } from 'antd'
import Map from './Map'
import Form from './form'
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
    const changeMst = (nxtMst) => {
        setPressed(nxtMst)
    }
    /*useEffect(() => {
        bodyRef.current.focus();
    }, mst)*/

    return (
        !mst ? (
            <Form change={setMaster} /*ref={bodyRef}*/
                master={windowmaster} conref={containerref}
                switch={setPressed} page={mst} />
        ) : (
                <Map name={windowmaster} />
            )

    )
}
export default App
