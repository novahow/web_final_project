import React, {useEffect, useState } from 'react'
import App2 from './App2'
import PhotoLibrary from './photoLibrary/PhotoLibrary'

function App() {
    const [mst, setMst] = useState(1);
    const [department, changeDepartment] = useState("")
    const changeMst = (nxtMst) => {
        setMst(nxtMst)
    }
    if(mst == 0){
        return (
            <PhotoLibrary changeMst={changeMst} department={department} changeDepartment={changeDepartment}/>
        )
    }
    else{
        return <App2 changeMst={changeMst} changeDepartment={changeDepartment}/>
    }
}

export default App