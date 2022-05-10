import React from 'react'

function Lists(props) {
    const prabhas = ["bahubali","saaho","Radheshyam","salaar"]
    return (
       <div>
           {
               prabhas.map((movies , index)=>(
                   <div key = {index}>
                   <p>{movies}</p>
                   </div>
               ))
           }
       </div>
    )
}

export default Lists


//<div>
//<li key = {props.values.toString()}>
 //   {props.values}
//</li>
//</div>