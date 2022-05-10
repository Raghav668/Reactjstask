import React, { Component } from 'react'

export default class Getsnapshotupdate extends Component {
    state = {
        value : 0
    }
    render() {
        return (
            <div>
                <Child data ={this.state.value}/>
                <button onClick={()=>{this.setState({value : this.state.value +1})}}>click to snapshot</button>
            </div>
        )
    }
}


 class Child extends Component {

    state = {
        final : 2
    }
    componentDidUpdate(pp,ps,sn){
        console.log(sn)
    }
    getSnapshotBeforeUpdate(props,state){
        console.log(props,state)
        return props.data*state.final
    }
    render() {
    
        return (
            <div>
                {this.props.data}
                <button onClick={()=>{this.setState({final : this.state.final +1})}}>click to update state in snapshot {this.state.final}</button>
            </div>
        )
    }
}


