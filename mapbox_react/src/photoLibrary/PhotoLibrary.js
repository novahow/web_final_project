import './styles.css'
import React, {useEffect, useState } from 'react'
import {Button, Input, message, Tag } from 'antd'
import next from './images/next.png'
import back from './images/back.png'
import useChat from '../useChat'
import loading from './images/loading.gif'

function PhotoLibrary(props) {
    const {getUsers} = useChat()
    const defaultUsers = {photo: loading, name: "loading..."}
    const [users, setUsers] = useState([defaultUsers])
    const [usersIdx, setUsersIdx] = useState(0)
    const [usersUrl, serUsersUrl] = useState(loading)
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
        <div className="image-viewer__container">
            <button onClick={()=> props.changeMst(1)}>Home</button>
    <div className="image-viewer__title">{users[usersIdx].name}</div>
            <p>{users[usersIdx].department}</p>
            <div className="image-viewer__main">
                <div className="image-viewer__button">
                    <img src={back} id="previous" onClick={() => 
                        {if(usersIdx - 1 > 0){
                            setUsersIdx(0)
                            setUsersIdx(usersIdx - 1)
                        }}
                    }/>
                </div>
                <div className="image-viewer__display">
                    <img id="display" src={users[usersIdx].photo}/>
                    <div className="image-viewer__display-source-wrapper">
                        <span>
                            <a id="source"></a>
                        </span>
                    </div>
                </div>
                <div className="image-viewer__button">
                    <img src={next} id="next" onClick={() => 
                        {if(usersIdx + 1 < users.length){
                            setUsersIdx(0)
                            setUsersIdx(usersIdx + 1)
                        }}
                    }/>
                </div>
            </div>
        </div>
    )
}

export default PhotoLibrary