import React, { useEffect, useState } from 'react'
import "./Count_down.css"

function Count_down() {

    const endtime = new Date("Sun Apr 17 2022 20:04:00").getTime()
    const [currenttime,setCurrenttime] = useState(new Date().getTime())
    const gap = endtime - currenttime

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    const remainingdays = Math.floor(gap / days)
    const remaininghours = Math.floor((gap % days)/hours)
    const remainingminutes = Math.floor((gap % hours)/minutes)
    const remainingseconds = Math.floor((gap % minutes)/seconds)

    useEffect(()=>{
    const settime = setTimeout(()=>{
            setCurrenttime(new Date().getTime())
            {console.log(gap)}
        }
        ,1000)
        if(remainingdays === 0 && remaininghours ===0 && remainingminutes ===0 && remainingseconds ===0){
            alert("OFFER IS CLOSED")
        }
    }
        ,[currenttime])

  return (
    <div>{console.log(new Date().getTime() , remainingdays,remaininghours,remainingminutes,remainingseconds)}
        <center>
            <table>
                <tbody>
                    <tr>
                        
                        <td>{remainingdays}</td> &nbsp; : &nbsp; 
                        <td>{remaininghours}</td> &nbsp; : &nbsp;
                        <td>{remainingminutes}</td>&nbsp; : &nbsp;
                        <td>{remainingseconds}</td>
                    </tr>
                    <tr className='texttimer'>
                        <td > days</td> &nbsp; : &nbsp; 
                        <td>hours</td> &nbsp; : &nbsp;
                        <td>minutes</td>&nbsp; : &nbsp;
                        <td>seconds</td>
                    </tr>
                </tbody>
            </table>
        </center>
    </div>
  )
}

export default Count_down