import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count :0
        }
    
    }

   
increment(){
    this.setState({count:this.state.count +1},()=>{console.log(this.state.count)})
}
decrement(){
    if(this.state.count>=1){
    this.setState({count:this.state.count -1},()=>{console.log(this.state.count)})
    }
}
reset(){
    this.setState({count: 0},()=>{console.log(this.state.count)})
}
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <p>{this.props.name}</p>
                <button onClick={()=>{this.increment()}}>Increment</button>
                
                <button onClick={()=>{this.decrement()}}>Decrement</button>
                <button onClick={()=>{this.reset()}}>Reset</button>
            </div>
        )
    }
}

export default Counter
