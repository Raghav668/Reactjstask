import React from 'react'
import "./Productsreduxcss.css"

import {useSelector,useDispatch} from "react-redux"
import { Deletethecartdata } from './Actioncreatorredux'

function Cartpageredux() {

    const cartdata = useSelector((datafromstore)=>(datafromstore.productsdata.cartdata))
    console.log(cartdata)
    const dispatch = useDispatch()
    
    const deletetheproduct = (id)=>{
        dispatch(Deletethecartdata(id))
    }
    return (
        <div>
            {
             cartdata && cartdata.map((cartdatafromstore)=>(
                <div key={cartdatafromstore.id}>
                    <div className='cartcss'>
                        <div>
                            <img src={cartdatafromstore.product?.image} alt={cartdatafromstore.product?.title}/>
                        </div>
                        <div>
                            <p>{cartdatafromstore.product?.category}</p>
                            <h3>price : {cartdatafromstore.product?.price}{"$"}</h3>
                             <h3>{cartdatafromstore.product?.description}</h3>
                             {console.log(cartdatafromstore.id)}
                            <button onClick={()=>{deletetheproduct(cartdatafromstore.id)}}>Delete</button> 
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Cartpageredux
