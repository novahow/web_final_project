
import React, { useEffect, useRef, useState, useCallback } from 'react'
// import useChat from './useChat'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Input, message, Tag } from 'antd'
import Map from './Map'
function App() {
    // const { status, opened, messages, sendMessage, clearMessages } = useChat()

    const [windowmaster, setMaster] = useState('')
    const [mst, setPressed] = useState(true)
    const bodyRef = useRef(null)

    return (
        mst ? (
            <div className='login'>
                <h1> NTU_BEAUTY </h1>
                <Input
                    placeholder="Who are you?"
                    value={windowmaster}
                    onChange={(e) => setMaster(e.target.value)}
                    style={{ marginBottom: 10 }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            // bodyRef.current.focus()
                            setPressed(false)
                        }
                    }}
                ></Input>
            </div>
        ) : (
                <Map name={windowmaster} />
            )
    )
}
export default App
