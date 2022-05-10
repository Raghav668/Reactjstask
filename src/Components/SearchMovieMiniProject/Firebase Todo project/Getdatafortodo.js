import React from 'react'

function Getdatafortodo({alldata,afterdeleted}) {
  return (
    <div>
        {
          alldata?.map((data,index)=>(
            <div className='m-4' key={index}>
                <h1 style={{"display":"inline"}}>{data}</h1> &nbsp; &nbsp;
                <button className='m-2' onClick={()=>{afterdeleted(index)}}>Delete</button>
            </div>
          ))
        }
    </div>
  )
}

export default Getdatafortodo