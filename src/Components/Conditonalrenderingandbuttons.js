import React from 'react'

function Conditonalrenderingandbuttons() {

const afterclicked = (e)=>{
    console.log("clicked")
}
const afterchanged = (e) =>{
    console.log(e.target.value)
}
const age=15

    return (
        <div>
            <button onClick={afterclicked} >click</button>
            <input type="text" onChange={afterchanged} />
            { age > 18 ? console.log(true) : console.log(false)}
        </div>

        
    )
}

export default Conditonalrenderingandbuttons
