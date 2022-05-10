import React, { Component } from 'react'

export default class UpdatePhaseComponentdidupdate extends Component {
        constructor(){
            super()
            this.state = {
                count : 0
            }
        }
        componentDidUpdate(previousprops,previousstate,snapshot){
            console.log(`previous state ${previousstate.count}, presentstate ${this.state.count}`)
            if(previousstate.count !== this.state.count){
                console.log("Not matched the values")
            }
        }
    render() {
        return (
            <div>
                <h1>Present state : {this.state.count} </h1>
                <Child values = {this.state.count}/>
                <button onClick={()=>{this.setState({count : this.state.count + 1})}}>click {this.state.count}</button>
                <button onClick={()=>{this.setState({count : this.state.count + 2})}}>click for props {this.state.count}</button>
                
            </div>
        )
    }
}

 class Child extends Component {
     constructor(){
         super()
         this.state = {
             value : 0
         }
     }
     componentDidUpdate(previousprops,previousstate,snapshot){
        console.log(`previous props ${previousprops.values}, presentprops ${this.props.values}`)
        if(previousprops.values !== this.props.values){
            console.log("Not matched the values of props")
        }
    }
    render() {
        return (
            <div>
                {console.log(this.props.values)}
                <h1>present props : {this.props.values}</h1>
            </div>
        )
    }
}




