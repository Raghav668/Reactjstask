import React, { useState } from 'react'
import Higherorderusingfunction from './Higherorderusingfunction'
const Childrenusingfunction = (props) => {

   
  return (
    <div>
        {props.state ? <h1>hello</h1> : <h1>hi</h1> }
        <button onClick={()=>{props.tomagic()}}>click to appear and  disappear{props.name}</button>
    </div>
  )
}

export default Higherorderusingfunction(Childrenusingfunction)