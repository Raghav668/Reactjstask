import React, { useEffect, useState } from 'react'

function Pagination_newprocess() {

    const [data,setData] = useState([])
    const [page,setPage] = useState([])
    var pagenumber = []

    var style ={
        margin:"5px",
        backgroundColor:"black",
        color : "white",
        padding : "10px"

    }

useEffect(async ()=>{

const getdata = await fetch("https://jsonplaceholder.typicode.com/posts")
const resultdata = await getdata.json()
setData(resultdata)
setPage(resultdata.slice(0,10))
},[])

for(var i=1 ; i<= (data.length)/10;i++){
    pagenumber.push(i)
}

const afterclicked = (number) =>{
    setPage(data.slice(((number*10) -10), number*10))
}
  return (
    <div>
        {console.log(page)}
        
            <table>
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>ID</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                {data.length>=1 && page?.map((pagedata)=>(
                    <tr key={pagedata?.id}>
                        <td>{pagedata?.userId}</td>
                        <td>{pagedata?.id}</td>
                        <td>{pagedata?.title}</td>
                        <td>{pagedata?.body}</td>
                    </tr>
                ))}    
                </tbody>
            </table>
        <div>
            <center>
                    {pagenumber.map((num)=>(
                        <ul style={{"display":"inline"}}>
                            <span style={style} onClick={()=>{afterclicked(num)}}>{num}</span>
                        </ul>
                    ))}
            </center>
        </div>
    </div>
  )
}

export default Pagination_newprocess