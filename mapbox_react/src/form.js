import React, { useEffect, useState, useRef } from 'react'
import { Button, Input, message, Tag } from 'antd'
// import { Router, Route, hashHistory, IndexRoute, Switch } from 'react-router';
import { useHistory, useLocation, NavLink, useParams, Switch, Route } from "react-router-dom";
import { alert, prompt } from '@ungap/global-this';
const Form = (props) => {
    const setMaster = props.change;
    const windowmaster = props.master;
    //const bodyRef = props.ref;
    const bodyRef = useRef(null)
    const containerref = props.conref;
    const setPressed = props.switch;
    const mst = props.page;
    const history = useHistory();
    const loc = useLocation();
    const [password, setPassword] = useState('');
    useEffect(() => {
        bodyRef.current.focus();
    }, [mst])

    /*function handle() {
        history.push('/map');
    }*/

    function checkuser([username, passwd]) {

    }

    return (
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
                    <button className='cbutton'>還是 Sign In</button>
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
                    <Input type="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {console.log(windowmaster)}
                    <a href="#" /*onClick={() => { alert("乾我p4?") }*/>Forgot your password?</a>
                    <button className='cbutton' onClick={() => {
                        console.log('>>>');
                        if (windowmaster != "" && password != '') {
                            setPressed(1);
                        }
                    }}>Sign In
                        {/*<NavLink


                            
                            to={"/map/" + windowmaster}>Sign In</NavLink>*/}
                    </button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="cbutton" id="ghost" onClick={() => containerref.current.classList.remove("right-panel-active")}>回去Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="cbutton" id="ghost" onClick={() => containerref.current.classList.add("right-panel-active")}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Form