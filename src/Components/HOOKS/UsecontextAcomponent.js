import React from 'react';
import { useContext } from 'react';
import UsecontextBcomponent from './UsecontextBcomponent';
import UsecontextCcomponent from './UsecontextCcomponent';
import UsecontextDcomponent from './UsecontextDcomponent';

export const contextdata = React.createContext()
export function Usedetails(){
  return useContext(contextdata)
}
function UsecontextAcomponent() {
  return (
        <div>
                    <contextdata.Provider value={100}>
                        <UsecontextBcomponent />
                        <UsecontextCcomponent/>
                        <UsecontextDcomponent/>
                   </contextdata.Provider> 
        </div>
  )
}

export default UsecontextAcomponent;
