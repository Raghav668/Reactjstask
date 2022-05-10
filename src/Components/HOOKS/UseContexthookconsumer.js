import React from 'react'
import { senddata } from './UseContexthooksender'

function UseContexthookconsumer() {
    return (
        <div>
            <senddata.Consumer>
                {(value)=><div>{value}</div>}
            </senddata.Consumer>
        </div>
    )
}

export default UseContexthookconsumer
