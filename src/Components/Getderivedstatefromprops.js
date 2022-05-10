import React, { Component } from 'react'

export default class Getderivedstatefromprops extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : "Raghav"
        }
    }
    render() {
        return (
            <div>
                <Childprops data = {this.state.text}/>
            </div>
        )
    }
}

 class Childprops extends Component {
     constructor(){
         super()
         this.state = {
             word: "Hello this is",
             text : ""
         }
     }

    static getDerivedStateFromProps(props, state){
        console.log(props,state)
        
        return{
            word : state.word + props.data,
            text:props.data
            
        }
    }

    render() {
        return (
            <div>
                {this.state.word}
                {this.state.text}
            </div>
        )
    }
}


