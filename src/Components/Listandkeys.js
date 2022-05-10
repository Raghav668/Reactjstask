import React, { Component } from 'react'

export class Listandkeys extends Component {

    constructor(){
        super()
        this.state = {
            arr : [1,2,3,4,5,7]
        }
    }
    render() {
        return (
            <div>
                 {
                      this.state.arr.map((arrayvalue)=>(
                        <li key={arrayvalue.toString()}>
                   
                        <p>{arrayvalue}</p>
                    </li>
                            
                      ))
                    }
               
            </div>
        )
    }
}

export default Listandkeys
