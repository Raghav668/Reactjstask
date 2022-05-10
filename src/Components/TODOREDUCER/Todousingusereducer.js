import { Toadd } from "./Actioncreator";
import { Todelete } from "./Actioncreator";
import {useState,useReducer} from "react"

import React from 'react'
import { Action } from "./Actiontype";

function Todousingusereducer() {

const reducer = (initialstate,action)=>{

    switch (action.type){
        case Action.Addtodo : 
            return [...initialstate,action.payload]
        case Action.Deletetodo: 
            return initialstate.filter((statearrayindex)=>{
                 if (statearrayindex.id !== action.payload){
                        return statearrayindex
                    }
            })   
        default:
            return initialstate    
    }    

}

    const [value,setValue] = useState("")
    const [state,dispatch] = useReducer(reducer,[])

    const adddata = () =>{
        dispatch(Toadd({id:Date.now(), entereddata : value }))
        setValue("")
    }

    const deletedata = (id)=>{
        dispatch(Todelete(id))
    }
    return (
        <div>
            <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
            
            <button onClick={()=>{adddata()}}>ADD</button>
            {
                state.map((data)=>(
                    <div key={data.id}>
                        <span>{data.entereddata}</span>
                        <button onClick={()=>{deletedata(data.id)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Todousingusereducer
