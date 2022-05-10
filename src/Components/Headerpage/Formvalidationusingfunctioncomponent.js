
import React ,{useState,useEffect,useRef} from 'react'
import style from "../../CSS/profile.module.css"

function Formvalidationusingfunctioncomponent() {

    const [state,setState] = useState({ firstname : "",
     lastname : "" ,
     emailid : "",
     password : "",
     focus : false})

     const [error,setError] = useState({firstnameerror : "",
     lastnameerror : "",
     emailerror : "",
     passworderror : ""})
   
    const firstnameref = useRef(null)

    useEffect(() => {
      firstnameref.current.style.backgroundColor = "green"
      firstnameref.current.blur()
    },[])

    const afterchanged = (e)=>{
        const {name,value} = e.target
       setState( {...state,[name] : value})
        console.log(e.target.value)
        validateafterchanged(name)
    }
    const validateafterchanged = (name)=>{
        switch(name){
            case "firstname":
                let firstnameerrorvalue = ""
                if(state.firstname?.length <6){
                    firstnameerrorvalue = "please enter a valid First name"
                }
               setError( {firstnameerror : firstnameerrorvalue})
                break

            case "lastname":
                let lastnameerrorvalue = "" 
                if(state.lastname?.length <6){
                    lastnameerrorvalue = "please enter a valid Last name"
                }
               setError({lastnameerror:lastnameerrorvalue})
                break

            case "emailid":
                let emailerrorvalue = "" 
                if(! state.emailid?.includes("@")){
                    emailerrorvalue = "please enter a valid Email"
                }
                setError({emailerror:emailerrorvalue})
                break
                
            case "password":
                let passworderrorvalue = ""
                if(state.password?.length <4){
                    passworderrorvalue = "please enter a valid password"
                }
                setError({passworderror:passworderrorvalue})
                break    
            default:
                break    
        }
    }
   

    

    const Validite = ()=>{
        let firstnameerrorvalue = ""
        let lastnameerrorvalue = "" 
        let emailerrorvalue = "" 
        let passworderrorvalue = ""

        if(state.firstname?.length <6){
            firstnameerrorvalue = "please enter a valid First name"
        }
        if(state.lastname?.length <6){
            lastnameerrorvalue = "please enter a valid Last name"
        }
        if(! state.emailid?.includes("@")){
            emailerrorvalue = "please enter a valid Email"
        }
        if(state.password?.length <4){
            passworderrorvalue = "please enter a valid password"
        }

        if(firstnameerrorvalue || lastnameerrorvalue || emailerrorvalue || passworderrorvalue){
            setError({firstnameerror : firstnameerrorvalue, 
             lastnameerror : lastnameerrorvalue,
             emailerror:emailerrorvalue,
             passworderror : passworderrorvalue})
            return false
        }
        else{
            setError({firstnameerror : firstnameerrorvalue, 
                lastnameerror : lastnameerrorvalue,
                emailerror:emailerrorvalue,
                passworderror : passworderrorvalue})
            return true
        }
    
    }
    const aftersubmitted = (e)=>{
        e.preventDefault()
      const isValid =  Validite()
      if (isValid){
         setState({ firstname : "" ,
           lastname : "" ,
            emailid : "",
            password : "" })
      }
    }
   //function onfocus() {
       // if (!state.focus) {
            
           //     setState({focus: false})
            
       // }
  //  }
    return (
        <div>
             <h1 className={style.h1}>Form</h1>
            <form onSubmit={(e)=>{aftersubmitted(e)}} className={style.form} noValidate>
                <label className={style.label}> FIRST NAME:</label >
                <input type= "text" name='firstname' className={style.input} onChange={(e)=>{afterchanged(e)} } ref={firstnameref}  />
                <p>{error.firstnameerror}</p>
                <label className={style.label}>LAST NAME:</label>
                <input type= "text" name='lastname' className={style.input} onChange={(e)=>{afterchanged(e)}} />
                <p>{error.lastnameerror}</p>
                <label className={style.label}>EMAIL ID:</label>
                <input type= "email" name='emailid' className={style.input} onChange={(e)=>{afterchanged(e)}} />
                <p>{error.emailerror}</p>
                <label className={style.label}>PASSWORD:</label>
                <input type= "password" name='password' className={style.input} onChange={(e)=>{afterchanged(e)}} />
                <p>{error.passworderror}</p>
                <button type='submit'>SIGN UP</button>
            </form>
        </div>
    )
}

export default Formvalidationusingfunctioncomponent
