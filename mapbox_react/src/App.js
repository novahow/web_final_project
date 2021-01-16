
import React, { useEffect, useRef, useState, useCallback } from 'react'
// import useChat from './useChat'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Button, Input, message, Tag } from 'antd'
import Map from './Map'
function App() {
    // const { status, opened, messages, sendMessage, clearMessages } = useChat()

    const [windowmaster, setMaster] = useState('')
    const [mst, setPressed] = useState(false)
    const bodyRef = useRef(null)
    const containerref = useRef(null)
    const [password, setPassword] = useState('')
    const [password_again, setPassword_again] = useState('')
    const [signtype, setSigntype] = useState('true')
    useEffect(() => {
        bodyRef.current.focus();
    }, mst)

    return (
        !mst ? (
            <div className="container" id="container" ref={containerref}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account </h1>
                        <h1>(並不能好嗎)</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <button>還是 Sign In</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <Input
                            /*type="email"*/ placeholder="Username" ref={bodyRef}
                            value={windowmaster}
                            onChange={(e) => setMaster(e.target.value)} />
                        <Input type="password" placeholder="Password" />
                        {console.log(windowmaster)}
                        <a href="#">Forgot your password?</a>
                        <button onClick={() => { console.log('>>>'); if (windowmaster != "") setPressed(true) }}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => containerref.current.classList.remove("right-panel-active")}>又是Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => containerref.current.classList.add("right-panel-active")}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
                <Map name={windowmaster} />
            )

    )
}
export default App
