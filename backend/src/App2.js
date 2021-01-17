import React, { useEffect, useRef, useState } from 'react'
import useChat from './useChat'
import {Button, Input, message, Tag} from 'antd'

function App2(props) {
    const { retUser, getUsers, addUser } = useChat()
    const [ newUserData, setNewUserData ] = useState({})
    const [ users, setUsers ] = useState([]);
    const [department, setDepartment] = useState('');
    console.log(users)
    return (
        <>
        <input onChange={(e)=> props.changeDepartment(e.target.value)} placeholder="search department?"></input>
        <button onClick={()=>props.changeMst(0)}>go to Gallary</button>
        <div className="App2">
            <input placeholder="name?" onChange={(e) => {
                const cur_user = newUserData;
                cur_user["name"] = e.target.value;
                setNewUserData(cur_user);
            }}></input>
            <input placeholder="age?" onChange={(e) => {
                const cur_user = newUserData;
                cur_user["age"] = parseInt(e.target.value);
                setNewUserData(cur_user);
            }}></input>
            <input placeholder="department?" onChange={(e) => {
                const cur_user = newUserData;
                cur_user["department"] = e.target.value;
                setNewUserData(cur_user);
            }}></input>
            <input placeholder="FB?" onChange={(e) => {
                const cur_user = newUserData;
                cur_user["FB"] = e.target.value;
                setNewUserData(cur_user);
            }}></input>
            <input placeholder="IG?" onChange={(e) => {
                const cur_user = newUserData;
                cur_user["IG"] = e.target.value;
                setNewUserData(cur_user);
            }}></input>
            <input placeholder="birthday?" onChange={(e) => {
                const cur_user = newUserData;
                cur_user["birthday"] = e.target.value;
                setNewUserData(cur_user);
            }}></input>
            <input placeholder="photo?" onChange={(e) => {
                const cur_user = newUserData;
                cur_user["photo"] = e.target.value;
                setNewUserData(cur_user);
            }}></input>
        </div>
        <div>
            <Button onClick={() => addUser(newUserData)}>
                add user!
            </Button>
        </div>
        <div>
            {
                (users.length === 0) ? (
                    <p>Loading...</p>
                ): (
                    users.map(({name, department}, i) => (
                        <div>
                        <p>{name}</p>
                        <p>{department}</p>
                        </div>
                    ))
                )
            }
        </div>
        <div>
            <input placeholder="enter a department" onChange={(e)=>{
                setDepartment(e.target.value)
            }}>
            </input>
        </div>
        <div>
            <Button onClick={async () => {
                const users = await getUsers(department)
                await setUsers(users)
            }}>
                search user!
            </Button>
        </div>
        </>
    )
}
export default App2