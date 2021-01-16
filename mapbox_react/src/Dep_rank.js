import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"

const Dep_rank = (props) => {
    const [exp, setExp] = useState(false)
    return (

        <div >
            <a href="#ranking" onClick={() => exp ? setExp(false) : setExp(true)}>Rankings</a>
            {exp ?
                (props.arr.map(e => (<div>{e.dep}</div>)))
                : (<div></div>)
            }

        </div>

    )
}

export default Dep_rank