import './styles.css'
import React, { useEffect, useState } from 'react'
import { Button, Input, message, Tag } from 'antd'
import useChat from '../useChat'
import loading from './images/loading.gif'

function PhotoLibrary(props) {
    const { getUsers } = useChat()
    const rightarrow = "->"
    const leftarrow = "<-"
    const defaultUsers = { photo: "https://www.transparenttextures.com/patterns/brushed-alum.png", name: "loading..." }
    const [users, setUsers] = useState([defaultUsers])
    const [usersIdx, setUsersIdx] = useState(0)
    const [usersUrl, serUsersUrl] = useState(loading)
    const [rating, setRating] = useState(0)
    useEffect(async () => {
        const Users = await getUsers(props.department)
        console.log(props.department)
        console.log(Users)
        if (Users.length > 0) {
            setUsers([defaultUsers, ...Users])
            setUsersIdx(1)
        }
    }, [])

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
                            <button className="send" onClick={() => props.changeMst(1)}>
                                <span> SEND </span>
                            </button>
                        </div>
                    </form>
                    <div className="intro-more flex-col-c-m">
                        <button className="home" onClick={() => props.switch(1)}>
                            <span> HOME </span>
                        </button>
                        <div className="image-viewer">

                            <img src={users[usersIdx].photo} />
                        </div>
                        <div className="button_blank">
                            <div className="prev_botton">
                                <button className="pb" onClick={() => {
                                    if (usersIdx - 1 > 0) {
                                        setUsersIdx(0)
                                        setUsersIdx(usersIdx - 1)
                                    }
                                }
                                }>
                                    <span> {leftarrow} </span>
                                </button>
                            </div>
                            <div className="rating">
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                                <span className="star">☆</span>
                            </div>
                            <div className="next_botton">
                                <button className="nb" onClick={() => {
                                    if (usersIdx + 1 < users.length) {
                                        setUsersIdx(0)
                                        setUsersIdx(usersIdx + 1)
                                    }
                                }
                                }>
                                    <span> {rightarrow} </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default PhotoLibrary