import React, { useEffect, useState } from 'react'
import Authentication_Form from './Authentication_Form'
import auth from './Firebase'
import Home_page from './Home_page'

function Logic_to_form() {
//current user logged in
  const [presentuserwhologgedin,setPresentuserwhologgedin] = useState(null)

  useEffect(()=>{

    auth.onAuthStateChanged((user)=>{
      if (user){
        setPresentuserwhologgedin({
          uid:user.uid,
          email:user.email
        }
         )
      }
       else{
         setPresentuserwhologgedin(null)
       }
      })
  
  },[])

  return (
    <div>
        {presentuserwhologgedin ? <Home_page presentuserwhologgedin={presentuserwhologgedin}/> : <Authentication_Form/>}
    </div>
  )
}

export default Logic_to_form