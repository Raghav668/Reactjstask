import React from 'react'
import style from "../../CSS/profile.module.css"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

function Headerspage() {

    const cartdata = useSelector((datafromstore)=>(datafromstore.productsdata.cartdata))
    return (
        <div className={style.headers}>
            <ul className={style.headers1}>
            <li className={style.headers2}><Link to="/contactusclass" className={style.headers3}>Contact us class</Link> </li>
            <li className={style.headers2}><Link to="/contactusfunction" className={style.headers3}>Contact us function</Link> </li>
            <li className={style.headers2}><Link to="/productspage" className={style.headers3}>products</Link> </li>
            <li className={style.headers2}><Link to="/cartpage" className={style.headers3}>cart</Link> <i className="bi bi-cart-check"></i> <sup>{cartdata?.length}</sup> </li>
           </ul>
        </div>
    )
}

export default Headerspage