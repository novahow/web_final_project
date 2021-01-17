import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import Deps from './Deps'

const sea_in_deps = {
    'CSEE': ['資工', '電機'], 'LAW': ['法律'],
    'INDUSTRY': ['化工', '土木', '機械', '工海', '材料'],
    'ELITE': ['財金', '會計', '國企', '工管', '資管'],
    'SOCIAL': ['經濟', '政治', '社工']
}

const Intro = (props) => {
    const [exp, setExp] = useState(false)
    console.log('???', props)
    const [dp, setDp] = useState(props.value.dep)
    const back = () => {
        if (exp) {
            setExp(false);
        }
    }

    return (
        <div>
            <button className='back' onClick={back}>
                back
            </button>
            { !exp ? (<div className="txtimg">
                <div className="text">
                    {dp}
                </div>
                <img src=
                    {exp ? ("https://i.imgur.com/nZP0hWp.png")
                        : ("https://i.imgur.com/4MMlH1M.png")}
                    onClick={() => { exp ? setExp(false) : setExp(true) }} />

            </div>) : (sea_in_deps[dp].map(e => (
                <Deps ele={e} exp={exp} />
            )))}
        </div>
    );
};

export default Intro