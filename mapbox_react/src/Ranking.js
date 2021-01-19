import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import { Button } from 'antd'
// import console from 'console'

const Ranking = (props) => {
    const [exp, setExp] = useState(false)
    const arr = ['1', '2', '3'];
    return (
        <div><a className="dropdown-item dropdown-toggle"> {props.dep} </a>
            <ul className="submenu dropdown-menu">
                {arr.map(e => (<div><a className="dropdown-item" >{e}</a></div>))}
            </ul>
        </div>

    )
}

export default Ranking
/*
<div className="dropdown dropright">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                {props.dep}
            </button>
            <div className="dropdown-menu">
                {props.arr.map(e => (<a className="dropdown-item" href="#">{e}</a>))};
            </div>
        </div>
*/
