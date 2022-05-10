import React,{useEffect,useState} from 'react'


function USEEFFECTHOOK() {

    const [state,setState]= useState("")

    useEffect(()=>(
        console.log("component called when state changed")
    ))

    useEffect(()=>(
        console.log("component called only when it is mounted")
    ),[])

    useEffect(()=>(
        console.log("component called only when name is changed")
    ),[state])
    return (
        <div>
            <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}}/>
        </div>
    )
}

export default USEEFFECTHOOK
