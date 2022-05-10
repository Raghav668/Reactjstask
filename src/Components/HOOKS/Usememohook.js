import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';


function Usememohook() {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    const [dark,setDark] = useState(false)
    const incrementfunction = ()=>{
        setCount1(count1 + 1)
    }
    const incrementcount1 = useMemo(()=>{
        var i=0
        for(var i=0;i<200000000;i++){}
        return  incrementfunction
    },[count1])

    const incrementcount2 = ()=>{
        setCount2(count2 + 1)
    }

    const theme = useMemo(()=> {
        return  {backgroundColor : dark ? "black" : "white",
        color : dark ? "white" : "black",}
    },[dark])
    useEffect(()=>{console.log("color changed")},[theme])
  return (
      <div>
          <button onClick={incrementcount1}>click the count 1 - {count1}</button>
          <button onClick={incrementcount2}>click the count 2 - {count2}</button>
          <div style={theme}>
              {count2}
          </div>
          <button onClick={()=>{setDark(!dark)}}>click to change color</button>
      </div>
  )
}

export default Usememohook;
