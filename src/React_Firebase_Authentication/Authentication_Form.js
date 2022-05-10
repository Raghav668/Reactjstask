import React, { useState } from 'react'
import auth from './Firebase.js'

function Authentication_Form() {

        const [userdetails , setUserdetails] = useState({
            email:"",
            password:""
        })

        const {email,password} = userdetails
        
        const afterchanged = (e) =>{
            setUserdetails({...userdetails, [e.target.name] : e.target.value})
            //console.log(email,password)
            //console.log(e.target)
        }

        const signIn = (e) =>{
            e.preventDefault()
            auth.signInWithEmailAndPassword(email,password).then
            ((user)=>console.log(user)).catch((err)=>console.log(err))
        }

        const signUp = (e) =>{
            e.preventDefault()
            auth.createUserWithEmailAndPassword(email,password).then
            ((user)=>console.log(user)).catch((err)=>console.log(err))
        }
  return (
    <div>
        <center>
            <form autoComplete='off'>
                <input type="email" name="email" placeholder='Enter the email' onChange={afterchanged} value={email}/> <br/><br/>
                <input type="password" name="password" placeholder='Enter the password' onChange={afterchanged} value={password}/><br/> <br/>
                <button onClick={signIn}>LOGIN</button> &nbsp; &nbsp;
                <button onClick={signUp}>SIGNUP</button>
            </form>
        </center>
    </div>
  )
}

export default Authentication_Form