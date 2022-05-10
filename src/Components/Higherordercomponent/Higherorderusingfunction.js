import React from 'react'
import { useState } from 'react'

const Higherorderusingfunction = (Originalcomponent) => {

    const Newcomponent = (props) =>{
        const [state,setState] = useState(true)
    
        const tomagic = ()=>{
            setState(!state)
        }
     
        return(
            <Originalcomponent tomagic={tomagic} state={state} {...props}/>
        )
    }
  return (
    Newcomponent
  )
}

export default Higherorderusingfunction