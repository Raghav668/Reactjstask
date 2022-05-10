import React, { useState } from 'react'
import HOCParent from './HOCParent'

class Clickcounter extends React.Component {
render(){
  return (
      <div>
            <button onClick={()=>{this.props.increment()}}>click to count {this.props.count}</button>
      </div>
  )
}
}

export default HOCParent(Clickcounter,5)