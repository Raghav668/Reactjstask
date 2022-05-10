import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { contextdata } from './UsecontextAcomponent';
function UsecontextBcomponent() {
    const data = useContext(contextdata)
    const [state,setState] = useState(data)
    
  return (
        <div>

                <h1> count : {state}</h1>
                        <div>
                            <button onClick={()=>{setState(state+1)}}> increment</button>
                            <button onClick={()=>{setState(state-1)}}> decrement</button>
                        </div>    
                 
              
                
        </div>
  );
}

export default UsecontextBcomponent
