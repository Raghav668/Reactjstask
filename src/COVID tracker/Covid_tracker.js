import React, { useEffect, useState } from 'react'
 
function Covid_tracker() {
    const [data,setData] = useState([])

    useEffect(() =>{
        Getdata()
        console.log(data)
    },[])

    const Getdata = async() =>{
        const Coviddata = await fetch("https://data.covid19india.org/data.json")
        const resultdata = await Coviddata.json()
        setData(resultdata.statewise)
    }

  return (
    <div>
        <center>
            <h1>COVID 19 TRACKER</h1>
            <table className='table'>
                <thead className='bg-dark text-white'>
                    <th>State</th>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    <th>Deltaconfirmed</th>
                    <th>Deltadeaths</th>
                    <th>Deltarecovered</th>
                </thead>
                <tbody>
                    {
                        data.map((data)=>(
    
                                <tr>
                                    <td>{data.state}</td>
                                    <td>{data.active}</td>
                                    <td>{data.confirmed}</td>
                                    <td>{data.deaths}</td>
                                    <td>{data.recovered}</td>
                                    <td>{data.deltaconfirmed}</td>
                                    <td>{data.deltadeaths}</td>
                                    <td>{data.deltarecovered}</td>
                                </tr>

                        ))
                    }
                </tbody>
            </table>
        </center>
    </div>
  )
}

export default Covid_tracker