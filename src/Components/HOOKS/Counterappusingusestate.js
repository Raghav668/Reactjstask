import React, {useState} from 'react'

function Counterappusingusestate() {

const [count,setCount] = useState(0)

function increment(){
    setCount(count+1)
}
const decrement = ()=>{
    if(count>=1){
    setCount(count-1)
    }
}
    return (
        <div>

            <button  onClick={()=>{increment()}}>increment</button>
            <p>{count}</p>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counterappusingusestate
