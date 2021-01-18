import './styles.css'
import React, {useEffect, useState } from 'react'
import {Button, Input, message, Tag } from 'antd'
import next from './images/next.png'
import back from './images/back.png'
import useChat from '../useChat'
import loading from './images/loading.gif'

function PhotoLibrary(props) {
    const {getUsers} = useChat()
    const defaultUsers = {photo: "https://www.transparenttextures.com/patterns/brushed-alum.png", name: "loading..."}
    const [users, setUsers] = useState([defaultUsers])
    const [usersIdx, setUsersIdx] = useState(0)
    const [usersUrl, serUsersUrl] = useState(loading)
    const [rating, setRating] = useState(0)
    useEffect(async ()=>{
        const Users = await getUsers(props.department)
        console.log(props.department)
        console.log(Users)
        if(Users.length>0){
            setUsers([defaultUsers, ...Users])
            setUsersIdx(1)
        }
    },[])
    
    return (
        <body>
            <div className="intro-container">
                <div className="intro-wrap">
                    <form className="intro-form validate-form">
                        <span className="intro-title">
                            Name : {users[usersIdx].name}
                        </span>
                        <span className="intro-title">
                            Age : {users[usersIdx].age}
                        </span>
                        <span className="intro-title">
                            Department : {users[usersIdx].department}
                        </span>
                        <span className="intro-title">
                            FB : {users[usersIdx].FB}
                        </span>
                        <span className="intro-title">
                            IG : {users[usersIdx].IG}
                        </span>
                        <label className="label-input" for="rating"> 
                            Rating if you like it !
                        </label>
                        <div className="wrap-input">
                            <input className="input" placeholder="Eg. (Unlike)0~100(Like)"></input> 
                            <span className="focus-input"> </span>
                        </div>
                        <div className="intro-button">
                            <button className="send" onClick={()=> props.changeMst(1)}>
                                <span> Send </span>
                            </button>
                        </div>
                    </form>
                    <div className="intro-more flex-col-c-m">
                        <button className onClick={()=> props.changeMst(1)}>Home </button>
                        <div className="image-viewer">
                            <div className="left-botton">

                            </div>
                            <div className="display">
                                <img src={users[usersIdx].photo} />
                            </div>
                            <div className="right-button">
                            </div>
                        </div>
                        <div className="star">

                        </div>
                    </div>
                </div>
            </div>    
        </body>
    )
}

export default PhotoLibrary