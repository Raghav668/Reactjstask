import React, { useState } from 'react'
import Getdatafortodo from './Getdatafortodo'

function Todopractice() {

        const [text,setText] = useState("")
        const [alldata,setAlldata] = useState([])

        const afterclicked = ()=>{
            const newtext = [...alldata,text]
            setAlldata(newtext)
            setText("")
        }

        const afterdeleted = (deleteindex) =>{
            const remainingdata = alldata.filter((data,index)=> (index !== deleteindex))
            setAlldata(remainingdata)
        }
  return (
        <div>
            <center className = "m-4">
                <input onChange={(e)=>{setText(e.target.value)}} type="text" value={text}/> &nbsp; &nbsp;
                <button onClick={afterclicked}>ADD</button>
                <Getdatafortodo alldata={alldata} afterdeleted={afterdeleted}/>
            </center>
            
        </div>
  )
}

export default Todopractice