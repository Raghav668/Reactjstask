import React from 'react';
import {useContext,useState} from "react"
import { contextdata } from './UsecontextAcomponent';

function UsecontextCcomponent() {
    const data = useContext(contextdata)
    const [state,setState] = useState(data)

    
  return (
            <div>
                    {`hi the number is ${state}`}
                        <div>
                            <button onClick={()=>{setState(state+1)}}> increment</button>
                            <button onClick={()=>{setState(state-1)}}> decrement</button>
                        </div>  
                        
            </div>
            
            
            );
}

export default UsecontextCcomponent;
