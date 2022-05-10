import React, { Component } from 'react'

export default class Unmountingphase extends Component {
    constructor(props){
        super(props)
        console.log("constructor called first")
        this.state ={
            value : true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.value ? <Unmountingfile/> : null
                }
                {
                     console.log("render called second")
                }
                <button onClick={()=>{this.setState({value:false})}}>Click to Remove</button>
            </div>
        )
    }
}


class Unmountingfile extends Component {
    constructor(props){
        super(props)
        this.state ={
            Answer : "It is mounted"
        }
    }
    componentWillUnmount(){
        console.log("component is unmounted")
        alert("It is unmounted")
        
    }
    render() {
        return (
            <div>
                {this.state.Answer}
            </div>
        )
    }
}