import React, { Component } from 'react'

export class Unmountingfile extends Component {
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

export default Unmountingfile
