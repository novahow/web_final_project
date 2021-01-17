import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import { Button } from 'antd'

const Ranking = (props) => {
    const [exp, setExp] = useState(false)
    return (
        <div class="dropdown dropright">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                {props.dep}
            </button>
            <div class="dropdown-menu">
                {props.arr.map(e => (<a class="dropdown-item" href="#">{e}</a>))}
            </div>
        </div>

    )
}

export default Ranking
/*
<div class="dropdown dropright">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                {props.dep}
            </button>
            <div class="dropdown-menu">
                {props.arr.map(e => (<a class="dropdown-item" href="#">{e}</a>))};
            </div>
        </div>
*/
