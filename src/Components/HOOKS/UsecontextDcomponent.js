import React from 'react';
import { useContext } from 'react';
import { contextdata, Usedetails } from './UsecontextAcomponent';

function UsecontextDcomponent() {
    const value = Usedetails()
    console.log(value)
  return (
  <div>
      I am always number {value}
  </div>
  )
}

export default UsecontextDcomponent;
