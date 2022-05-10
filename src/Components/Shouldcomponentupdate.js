import React, { Component } from 'react'

export class Shouldcomponentupdate extends Component {

    state = {
        count  : 0
    }
    shouldComponentUpdate(){
        if(this.state.count >= 5){
            return false
        }
        else {
            return true
        }
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={()=>{this.setState({count : this.state.count +1})}}>click to update state in snapshot {this.state.count}</button>
            </div>
        )
    }
}

export default Shouldcomponentupdate
