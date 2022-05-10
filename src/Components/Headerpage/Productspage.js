import React from 'react'
import {useState,useEffect} from "react"
import "./product.css"
import {Link} from "react-router-dom"

function Productspage() {
    const [state,setState] = useState([{}])

    const getdatafromserver = async() => {
        const response = await fetch("https://fakestoreapi.com/products/")
        const result = await response.json()
        console.log(result)
        setState(result)
    }

    useEffect(()=>{getdatafromserver()},[])
    return (
        <div >
        <div className='row'>
            <div   className='col-md-3'>
            {
                state.map((data)=>(
                    <Link className="underline"to={`/product/${data.id}`}>
                <div >
                     <div className="card"  key={data.id}>
                         <img src={data.image} className="card-img-top carding" alt="..." />
                        <div className="card-body">
                        <h3 className="card-title ">{data.category}</h3>
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                            
                        </div>
                    </div>
                </div>
                </Link>
                ))
            }
            </div>
        </div>
        </div>
    )
}

export default Productspage
