import React from 'react'
import UseContexthookconsumer from './UseContexthookconsumer'

export const senddata = React.createContext()

function UseContexthooksender() {
    return (
        <div>
            <senddata.Provider value="Raghavendra">
            <UseContexthookconsumer/>
            </senddata.Provider>
        </div>
    )
}

export default UseContexthooksender
