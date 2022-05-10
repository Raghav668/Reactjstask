import React,{useReducer} from 'react'

function Usereducercounter() {

    

    const actionreducer = (statevalue,action)=>{
        switch (action) {
            case "INCREMENT":
                return {count : statevalue.count + 1}
            case "DECREMENT":
             if(statevalue.count>0){return {count : statevalue.count - 1}}
            default:
                return {count : statevalue.count}         
        }
    }
    const [state,dispatch] = useReducer(actionreducer,{count:0})
    return (
        <div>
            <button onClick={()=>{dispatch("INCREMENT")}}>Increment</button>
            <h2>{state.count}</h2>
            <button onClick={()=>{dispatch("DECREMENT")}}>Decrement</button>
        </div>
    )
}

export default Usereducercounter
