import React, { forwardRef, useRef,useState } from 'react';
import { useImperativeHandle } from 'react';

function Useimperativehandle() {

    const reference = useRef()

    const handleclick = ()=>{
        reference.current.value = "raghav" // not work
        console.log(reference.current.message)
    }
    
  return (
    <div>
        <button onClick={()=>{reference.current.yell()}}>click to alert</button>
        <button onClick={()=>{reference.current.increment()}}>click to sencond option to count</button>
        
        <Useimperativehandlechild onClick={handleclick} ref={reference}/>
    </div>
  )
}

export default Useimperativehandle;



const Useimperativehandlechild = forwardRef((props,ref) => {

    const [count,setCount] = useState(0)

    useImperativeHandle(ref,()=>(
        
        {
        yell : ()=>{alert("hey")},
        message : "hey,this is raghav",
        increment
    }
    ))

    const increment = ()=>{
        setCount(count+1)
    }
  return (
        <div>
            <input ref={ref} />
            <button {...props}>click</button>
            {count}
            <button onClick={()=>{increment()}}>click to count</button>

        </div>
  )
})

