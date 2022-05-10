import React, { forwardRef } from 'react';
import { useRef } from 'react';

function Forwardref() {


const reference = useRef()

const changecolor = ()=>{
    reference.current.style.backgroundColor = "red"
}
  return (
      <div>
          
            <Forwardrefchild ref={reference} />
            <button onClick={changecolor}>click</button>
      </div>
  )
}

export default Forwardref;



const Forwardrefchild = forwardRef((props,ref) =>{
  return (
    <div>
        <input ref={ref}/>
    </div>
    )
})

