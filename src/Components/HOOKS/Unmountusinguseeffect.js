import React,{useState,useEffect} from 'react'

function Unmountusinguseeffect() {

    const [state,setState] = useState(window.innerWidth)

        useEffect(()=>{
            window.addEventListener("resize",()=>{setState(window.innerWidth)})
            return ()=>{window.removeEventListener("resize",()=>{setState(window.innerWidth)})}
        })

    return (
        <div>
          <h1>inner width value:{state}</h1> 
        </div>
    )
}

export default Unmountusinguseeffect
