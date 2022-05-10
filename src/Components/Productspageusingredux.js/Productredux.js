import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Addthecartdata } from './Actioncreatorredux'

function Productredux(props) {
    const [product,setProduct ] = useState({})
    const dispatch = useDispatch()

    useEffect(async ()=>{
        const id = props.match.params.id
        const datafromproducts = await fetch(`https://fakestoreapi.com/products/${id}`)
        const resultdata = await datafromproducts.json()
        setProduct(resultdata)
        console.log(resultdata)
    },[])

    const addtheproductdata = ()=>{
        dispatch(Addthecartdata({id : Date.now() , product : product}))
    }

    return (
        <div>
            <div className='maindiv'>
                <div key={product.id}>
                    <div className="subdiv" >
                        <div>
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div>
                            <p>{product.category}</p>
                            <h3>price : {product.price}{"$"}</h3>
                            <h3>Rating : {product.rating?.rate}</h3>
                            <h4>{product.title}</h4>
                            <button className='btn' onClick={addtheproductdata}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productredux
