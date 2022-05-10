import React from 'react'
import { useState } from 'react'
import { Switch ,Route} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default function Privateroute({path,component,...rest}) {

    const [isloggedin,setIsloggedin] = useState(localStorage.getItem("loggedin"))

  return (
        <div>
           {/* {props.children} */}
           <Switch>
               <Route path={path} component={component} {...rest}/>
           </Switch>
            {isloggedin === null && <Redirect to="/login"/>}
        </div>
  )
}
