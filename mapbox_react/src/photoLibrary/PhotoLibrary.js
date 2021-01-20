import './styles.css'
import React, { useEffect, useState } from 'react'
import { Button, Input, message, Tag } from 'antd'
import useChat from '../useChat'
import loading from './images/loading.gif'
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

function PhotoLibrary(props) {
    const { getUsers, giveStars } = useChat()
    const rightarrow = "=>"
    const leftarrow = "<="
    const defaultUsers = { photo: "https://www.transparenttextures.com/patterns/brushed-alum.png", name: "loading..." }
    const [users, setUsers] = useState([defaultUsers])
    const [usersIdx, setUsersIdx] = useState(0)
    const [usersUrl, serUsersUrl] = useState(loading)
    const [rating, setRating] = useState(0)
    useEffect(async () => {
        const Users = await getUsers(props.department)
        console.log(props.department, props.gen)
        console.log(Users);
        const Newuser = Users.filter(e => (e.gender == props.gen));
        // setUsers(Users.filter(e => (e.gender == props.gen)));
        console.log(Newuser);
        if (Newuser.length > 0) {
            setUsers([defaultUsers, ...Newuser])
            setUsersIdx(1)
        }

        // setUsers(users.filter(e => e.gender == gender));
    }, [])
    const useStyles = makeStyles((theme) => ({
        root: {
            color: 'white',
            display: "flex",
            flexDirection: "column",
            "& > * + *": {
                marginTop: theme.spacing(1)
            }
        }
    }));
    const classes = useStyles();
    return (
        <body>
            <div className="intro-container">
                <div className="intro-wrap">
                    <form className="intro-form validate-form">
                        <span className="intro-title">
                            Department : {users[usersIdx].department}
                        </span>
                        <span className="intro-title">
                            Gender : {users[usersIdx].gender}
                        </span>
                        <span className="intro-title">
                            Name : {users[usersIdx].name}
                        </span>
                        <span className="intro-title">
                            Age : {users[usersIdx].age}
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
                            <input className="input" placeholder="Eg. (Unlike)1~5(Like)" onChange={(e) => setRating(e.target.value)}></input>
                            <span className="focus-input"> </span>
                        </div>
                        <div className="intro-button">
                            <button className="send" onClick={() => {
                                const data = { id: users[usersIdx].id, stars: parseInt(rating) }
                                giveStars(data)
                            }}>
                                <span> SEND </span>
                            </button>
                        </div>
                    </form>
                    <div className="intro-more flex-col-c-m">
                        <button className="home" onClick={() => props.switch(1)}>
                            <span> HOME </span>
                        </button>
                        <div className="image-viewer">
                            <div className="display">
                                <img src={users[usersIdx].photo} />
                            </div>
                        </div>
                        <div className="button_blank">
                            <div className="prev_botton">
                                <button className="b pb" onClick={() => {
                                    if (usersIdx - 1 > 0) {
                                        setUsersIdx(0)
                                        setUsersIdx(usersIdx - 1)
                                    }
                                }
                                }>
                                    <span> PREV </span>
                                </button>
                            </div>
                            <div className={classes.root}>
                                <Rating
                                    name="half-rating-read"
                                    size="large"
                                    value={(users[usersIdx].totalVoting
                                        == 0 ? 0 : users[usersIdx].popularity
                                        / users[usersIdx].totalVoting).toFixed(1)}

                                    precision={0.1}
                                    readOnly
                                />
                            </div>
                            {/*<div className="rating">
                                <span className={users[usersIdx].totalVoting === 0 ? 'star' : users[usersIdx].popularity / users[usersIdx].totalVoting <= 4 ? 'star' : 'yellow-star'}>☆</span>
                                <span className={users[usersIdx].totalVoting === 0 ? 'star' : users[usersIdx].popularity / users[usersIdx].totalVoting <= 3 ? 'star' : 'yellow-star'}>☆</span>
                                <span className={users[usersIdx].totalVoting === 0 ? 'star' : users[usersIdx].popularity / users[usersIdx].totalVoting <= 2 ? 'star' : 'yellow-star'}>☆</span>
                                <span className={users[usersIdx].totalVoting === 0 ? 'star' : users[usersIdx].popularity / users[usersIdx].totalVoting <= 1 ? 'star' : 'yellow-star'}>☆</span>
                                <span className={users[usersIdx].totalVoting === 0 ? 'star' : 'yellow-star'}>☆</span>
                            </div>*/}
                            <div className="next_botton">
                                <button className="b nb" onClick={() => {
                                    if (usersIdx + 1 < users.length) {
                                        setUsersIdx(0)
                                        setUsersIdx(usersIdx + 1)
                                    }
                                }
                                }>
                                    <span> NEXT </span>
                                </button>
                            </div>
                        </div>
                        <div className="average-rating">
                            <p className="rate-title">Average rating : {users[usersIdx].totalVoting === 0 ? 0 : (users[usersIdx].popularity / users[usersIdx].totalVoting).toFixed(1)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default PhotoLibrary
