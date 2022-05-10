import React, { Component } from 'react'
import style from "../CSS/profile.module.css"

export class Lifecyclemethodsclass1 extends Component {
    constructor(props){
        super(props)
        console.log("constructor called")
        this.state = {
            users : [{}]
        }
    }
    componentDidMount(){
        this.togetdata()
        console.log("API called")
        
    }

    async togetdata(){
        const datafromserver = await fetch("https://jsonplaceholder.typicode.com/users")
        const response = await datafromserver.json()
        console.log(response)
        this.setState({users : response},()=>(console.log("Response sent to state")))
       
    }
    render() {
        return (
            <div>
                { console.log("Render method called")}
                <h1>USERS DATA</h1>
                <div >
                        <table className= {style.t1}>
                            <thead>
                                <tr className= {style.t1}>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>username</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody className= {style.t1}>
                                {         
                                this.state.users.map((user )=>(
                                <tr key={user.id} >
                                    <td>{user?.id}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.username}</td>
                                    <td>{user?.email}</td>
                                </tr>
                                  ))
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default Lifecyclemethodsclass1
