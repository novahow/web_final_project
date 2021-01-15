import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useQuery, useMutation } from "@apollo/client"

/*function Intro(props) {
    console.log('aaa')
    console.log(props)
    console.log('???')
    return (
        <div>
            {props.dep}
        </div>
    );
}*/

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
    return (
        <div>
            <div className="txtimg">
                <div className="text">
                    {dp}
                </div>
                <img src=
                    "https://lh3.googleusercontent.com/proxy/IchdiWzs1eJORTe24XOhds240E6msA1U65TWJlHB1rJWSR8_9N_WJXpQLZp0q8l7PusIODMdsUj6rhLl3xHQCkZS88Q0A6vyBM5AeoRgQos7Yacj5-nnGF8"
                    onClick={() => { exp ? setExp(false) : setExp(true) }} />

            </div>
            { exp ? (sea_in_deps[dp].map(e => (
                <h3>{e}</h3>
            ))) : (<h3></h3>)}
        </div>
    );
};

export default Intro