import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"
const Deps = (props) => {
    const [exp, setExp] = useState(false)
    return (
        <div>
            <div className='txtimg'>
                <div className='text'>
                    {props.ele}
                </div>
                <img src=
                    {exp ? ("https://i.imgur.com/nZP0hWp.png")
                        : ("https://i.imgur.com/4MMlH1M.png")}
                    onClick={() => { exp ? setExp(false) : setExp(true) }} />

            </div>
            <span>
                {exp ?
                    (<span className='bg'>
                        <button className='goodbutton'> Boy </button>
                        <button className='goodbutton'> Girl </button>
                    </span>
                    ) : (<div></div>)}
            </span>
        </div>
    )
}

export default Deps