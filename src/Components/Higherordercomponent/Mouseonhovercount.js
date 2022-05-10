import { render } from '@testing-library/react'
import React, { useState } from 'react'
import HOCParent from './HOCParent'
class Mouseonhovercount extends React.Component{
    

    render(){
        const {count,increment} = this.props
  return (
        <div>
            <h1 onMouseEnter={()=>{increment()}}>After hovered {count}</h1>
        </div>
  )
    }
}

export default HOCParent(Mouseonhovercount,2)