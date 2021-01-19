import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Button, Input, message, Tag } from 'antd'
import Dep_rank from './Dep_rank';
import Ranking from './Ranking'

const Newnav = (props) => {

    return (

        <button className="nav-item dropdown dropright" className="nav-text">
            <li className="nav-item dropdown dropright">
                <button className="nav-link dropdown-toggle" data-toggle="dropdown">  Rankings  </button>
                <ul class="dropdown-menu">
                    {props.arr.map(e => (<Ranking dep={e.dep} />))}

                </ul>
            </li>
        </button>
    )
}

export default Newnav