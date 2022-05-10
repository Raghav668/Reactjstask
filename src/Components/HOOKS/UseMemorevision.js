import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemorevision() {

    const [num1,setnum1] = useState(0)
    const [num2,setnum2] = useState(0)
    const [total,setTotal] = useState(0)

    const [count,setCount] = useState(0)

    const addition = ()=>{
        return (parseInt(num1)+ parseInt(num2))
    }
    
    const sum = addition()

    const counting = ()=>{
        setCount(count+1)
    }

    const increment = useMemo(()=>{
        for(var i=0 ; i<200000000;i++){}
        return counting
    },[count])

  return (
      <div>
          <input type="number" onChange={(e)=>{setnum1(e.target.value)}}/>
          <input type="number" onChange={(e)=>{setnum2(e.target.value)}}/>
          <h1>{total}</h1>
          <button onClick={()=>{setTotal(sum)}}>Add</button>

          <h1>count</h1>
          <h2>{count}</h2>
          <button onClick={()=>{increment()}}>click to count</button>

      </div>
  )
}

export default UseMemorevision;
