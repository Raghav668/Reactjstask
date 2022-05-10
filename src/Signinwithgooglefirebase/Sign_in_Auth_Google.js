import React, { useEffect, useState } from 'react'
import firebase from 'firebase'



{/*firebase.initializeApp({
    apiKey: "AIzaSyDgKfPPxfmWcmt7iE99SM3t4DnSArFpdH4",
  authDomain: "signin-authentication-e85d7.firebaseapp.com",
  projectId: "signin-authentication-e85d7",
  storageBucket: "signin-authentication-e85d7.appspot.com",
  messagingSenderId: "594223090768",
  appId: "1:594223090768:web:3296ad98d4abe564fd1555"
}) */}

const auth = firebase.auth()

function Sign_in_Auth_Google() {

    const [users,setUsers] = useState(null)

    useEffect(()=>{
    auth.onAuthStateChanged((persons)=>{
        if(persons){
            setUsers(persons)
        }
        else{
            setUsers(null)
        }
    })
        
    })
    const signinwithgoogle = async() =>{
        try{
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        }
        catch{
            console.log("error")
        }
    }

    
  return (
    <center>
        {users ? <div>
        <h1>HELLO {users.persons}</h1>
        <button onClick={auth.signOut()}>SIGNOUT</button>
        </div> :
        <button onClick={signinwithgoogle}>SIGNIN WITH GOOGLE</button>
    }
    </center>
  )
}

export default Sign_in_Auth_Google