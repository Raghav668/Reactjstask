import React, { Component } from 'react'
import style from "../CSS/profile.module.css"

export class Formvalidationusingusingclasscomponent extends Component {

        constructor(props){
            super(props)
            this.state = {
                firstname : "",
                lastname : "",
                emailid : "",
                password : "",
                firstnameerror : "",
                lastnameerror: "",
                emailerror : "",
                passworderror : "", 
                focus : false
            }
        }

        
            Validite(){
                let firstnameerror = ""
                let lastnameerror = "" 
                let emailerror = "" 
                let passworderror = ""

                if(this.state.firstname.length <6){
                    firstnameerror = "please enter a valid First name"
                }
                if(this.state.lastname.length <6){
                    lastnameerror = "please enter a valid Last name"
                }
                if(!this.state.emailid.includes("@")){
                    emailerror = "please enter a valid Email"
                }
                if(this.state.password.length <4){
                    passworderror = "please enter a valid password"
                }

                if(firstnameerror || lastnameerror || emailerror || passworderror){
                    this.setState({firstnameerror , lastnameerror,emailerror,passworderror})
                    return false
                }
                else{
                    this.setState({firstnameerror , lastnameerror,emailerror,passworderror})
                    return true
                }
            
            }
            aftersubmitted(e){
                e.preventDefault()
              const isValid =   this.Validite()
              if (isValid){
                  this.setState({firstname : "" , lastname : "" , emailid : "", password : ""})
              }
            }


            afterchanged(e){
                console.log(e.target.value)
                const {name,value} = e.target
                this.setState({[name] : value})
                this.validateafterchanged(name)
            }
            validateafterchanged(name){
                switch(name){
                    case "firstname":
                        let firstnameerror = ""
                        if(this.state.firstname.length <6){
                            firstnameerror = "please enter a valid First name"
                        }
                        this.setState({firstnameerror})
                        break

                    case "lastname":
                        let lastnameerror = "" 
                        if(this.state.lastname.length <6){
                            lastnameerror = "please enter a valid Last name"
                        }
                        this.setState({ lastnameerror})
                        break

                    case "emailid":
                        let emailerror = "" 
                        if(!this.state.emailid.includes("@")){
                            emailerror = "please enter a valid Email"
                        }
                        this.setState({emailerror})
                        break
                        
                    case "password":
                        let passworderror = ""
                        if(this.state.password.length <4){
                            passworderror = "please enter a valid password"
                        }
                        this.setState({passworderror})
                        break    
                    default:
                        break    
                }
            }
            onfocus() {
                if (!this.state.focus) {
                    this.setState({
                        focus: false
                    })
                }
            }

    render() {
        return (
            <div>
            <h1 className={style.h1}>Form</h1>
            <form onSubmit={(e)=>{this.aftersubmitted(e)}} className={style.form}>
                <label className={style.label}> FIRST NAME:</label >
                <input type= "text" name='firstname' className={style.input} onChange={(e)=>{this.afterchanged(e)}} value={this.state.firstname} onFocus={()=>{this.onfocus()}}/>
                <p>{this.state.firstnameerror}</p>
                <label className={style.label}>LAST NAME:</label>
                <input type= "text" name='lastname' className={style.input} onChange={(e)=>{this.afterchanged(e)}} value={this.state.lastname}/>
                <p>{this.state.lastnameerror}</p>
                <label className={style.label}>EMAIL ID:</label>
                <input type= "email" name='emailid' className={style.input} onChange={(e)=>{this.afterchanged(e)}} value={this.state.emailid}/>
                <p>{this.state.emailerror}</p>
                <label className={style.label}>PASSWORD:</label>
                <input type= "password" name='password' className={style.input} onChange={(e)=>{this.afterchanged(e)}} value={this.state.password}/>
                <p>{this.state.passworderror}</p>
                <button type='submit'>SIGN UP</button>
            </form>
            </div>
        )
    }
}

export default Formvalidationusingusingclasscomponent
