import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

function UseCallbackrevision() {

    const [count,setCount] = useState(0)
    const [dark,setDark] = useState(false)

const increment = useCallback( ()=>{
    {console.log("value changed")}
    return (count , count + 2)
},[count])
   
 const tochangetheme = useCallback(()=>{
     setDark(!dark)
    console.log("theme changed")
 },[dark])   

const theme = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" : "black"
    
}
  return (
      <div style={theme}>
          <h1>{count}</h1>
          <input onChange={(e)=>{setCount(e.target.value)}}/>
        <button onClick={()=>{tochangetheme()}}>change theme</button>
        <UseCallbackchild func = {increment}/>
      </div>
  )
}

export default UseCallbackrevision;



function UseCallbackchild({func}) {
  return (
      <div>
          {func}
         
      </div>
  )
}


