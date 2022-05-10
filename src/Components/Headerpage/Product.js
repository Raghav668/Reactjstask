import React from 'react'
import{useState,useEffect} from "react"
import "./product.css"

function Product(props) {
    
    const[data,setData] = useState({})
    const getdatafromserver = async ()=>{
        const id =props.match.params.id
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const result = await response.json()
        console.log(result)
        setData(result)
    }
    useEffect(()=>{getdatafromserver()},[])
    return (
        <div>
               <div className='col-md-3'>
                     <div className="card head2"  key={data.id}>
                         <img src={data.image} className="card-img-top carding" alt="..." />
                        <div className="card-body">
                        <h3 className="card-title">{data.category}</h3>
                            <h5 className="card-title ">{data.title}</h5>
                            <h3 className="card-title bg-info rounded">{`$`}{data.price}</h3>
                            <p className="card-text underline">{data.description}</p>
                            <button className='btn btn-primary'>ADD</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Product
