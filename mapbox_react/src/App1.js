
import React, { useEffect, useRef, useState, useCallback } from 'react'
// import useChat from './useChat'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Input, message, Tag } from 'antd'
import Map from './Map'
function App() {
    // const { status, opened, messages, sendMessage, clearMessages } = useChat()

    const [windowmaster, setMaster] = useState('')
    const [password, setPassword] = useState('')
    const [password_again, setPassword_again] = useState('')
    const [mst, setPressed] = useState(false)
    const bodyRef = useRef(null)
    useEffect(() => {
        bodyRef.current.focus()
    }, mst)
    return (
        !mst ? (
            <div className='login'>
                <div className='Log'>
                    <div className="word_back">
                        <h1 className='header'> NTU_BEAUTY </h1>
                    </div>
                    <div>
                        <h1></h1>
                    </div>
                    <div className="word_back">
                        <h1 className='header'> Login form </h1>
                    </div>
                    <div class="container">

                        <Input
                            ref={bodyRef}
                            placeholder="Who are you?"
                            value={windowmaster}
                            onChange={(e) => setMaster(e.target.value)}
                            style={{ marginBottom: 10 }}

                        ></Input>
                        <Input
                            placeholder="Please enter password?"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ marginBottom: 10 }}

                        ></Input>
                        <Input
                            placeholder="Enter password again for checking?"
                            value={password_again}
                            onChange={(e) => setPassword_again(e.target.value)}
                            style={{ marginBottom: 10 }}
                        ></Input>
                        <button className='dinobutton' type="submit" onClick={() => { if (windowmaster != "" && password === password_again) setPressed(true) }}>Login</button>
                    </div>
                </div>
            </div>
        ) : (
                <Map name={windowmaster} />
            )
    )
}
export default App
