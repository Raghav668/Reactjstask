import React from 'react'
import {useState,useEffect} from "react"
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchdataAction, GetdataAction } from './Actioncreatorredux'
import "./Productsreduxcss.css"

function Productspageusingredux() {

const [state,setState] = useState([])    
const Dispatch = useDispatch();

const storedata = useSelector((datafromstore)=>(datafromstore.productsdata.fetcheddata))
//const getdatafromserver = ()=>{
    //const response = await fetch("https://fakestoreapi.com/products/")
    //const datafromserver = await response.json()
    //dispatch(GetdataAction(datafromserver))
    
  //  
//}
        useEffect(()=>{
           // getdatafromserver()
            Dispatch(FetchdataAction())
            setState(storedata)
        },[])


    return (
        <div >
        <div className='maindiv'>
            {
                state && state.map((data)=>(

                    <div key={data.id}>
                    <Link to={`/product/${data.id}`} className="linkcss">   
                    <div className="subdiv" >
                        <div>
                            <img src={data.image} alt={data.title}/>
                        </div>
                        <div>
                            <p>{data.category}</p>
                            <h3>price : {data.price} {"$"}</h3>
                            <h4>{data.description}</h4>
                        </div>
                    </div>
                    </Link> 
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Productspageusingredux
