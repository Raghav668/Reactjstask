import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function Login() {
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [isloggedin,setIsloggedin] = useState(localStorage.getItem("loggedin"))


const Login = (e)=>{
    
  if(username === "Raghav" && password === "123456789"){
    e.preventDefault()
    localStorage.setItem("loggedin",1)
    setIsloggedin(1)
  }
  else{
    alert("Please enter correct username and password")
  }

}
  return (
      <div>
        <form onSubmit={Login}>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Login</button>
            {isloggedin!==null && <Redirect to="/contactus"/>}
        </form>    
      </div>
        
  )
}
