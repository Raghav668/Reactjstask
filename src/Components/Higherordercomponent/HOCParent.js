import React from 'react'
import { useState } from 'react'

const HOCParent= (Originalcomponent,add) => {

    class Newcomponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count : 0
            }
        }

         increment = () =>{
        this.setState({count: this.state.count +add})
         }
         render(){
        return(<Originalcomponent count={this.state.count} increment = {this.increment}/>)
         }
    }

  return (
    Newcomponent
  )
}

export default HOCParent