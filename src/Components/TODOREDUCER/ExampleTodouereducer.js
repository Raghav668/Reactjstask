import React from 'react'
import { Toadd } from "./Actioncreator";
import { Todelete } from "./Actioncreator";
import {useState,useReducer} from "react"
import { Action } from './Actiontype';

function ExampleTodouereducer() {
    const reducer = (stateinitialvalue,action) => {
        //console.log(action)
        //console.log(stateinitialvalue)
        switch(action.type){
            case Action.Addtodo :
              //console.log(...stateinitialvalue)
                return [...stateinitialvalue, action.payload]
            case Action.Deletetodo:
                return stateinitialvalue.filter((lastdata)=>{
                   // console.log(stateinitialvalue)
                   //console.log(action.payload)
                 //  console.log(lastdata.id)
                  // console.log(lastdata)
                    if(lastdata.id !== action.payload){
                        return lastdata
                    }
                })
                
        }

    }
    const afterclicked = () =>{
        dispatch(Toadd({id : Date.now() , tododata : state}))
        setState("")
    }

    const removedata = (id)=>{
        dispatch(Todelete(id))
    }
const[state,setState] = useState("")

const [finaldata,dispatch] = useReducer(reducer,[])

    return (
        <div>
            <input type="text" onChange={(e)=>{setState(e.target.value)}} value={state}/>
            <button onClick={afterclicked}>ADDTODO</button>
            {
              //  console.log(finaldata)
            }
            {
                finaldata.map((resultdata)=>(
                    
                    <div key={resultdata.id}>
                        <p>{resultdata.tododata}</p>
                        <button onClick={()=>{removedata(resultdata.id)}}>DELETETODO</button>
                    </div>
                ))
                }
        </div>
    )
}

export default ExampleTodouereducer
