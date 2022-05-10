import React from 'react'
import auth from './Firebase'

function Home_page({presentuserwhologgedin}) {

    const signOut = ()=>{
        auth.signOut()
    }
  return (
    <div><center>
    <h1>welcome {presentuserwhologgedin?.email}</h1>
    <button onClick={signOut}>Sign out</button>
</center></div>
  )
}

export default Home_page