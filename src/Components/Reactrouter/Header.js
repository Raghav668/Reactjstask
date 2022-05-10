import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
  return (
    <div className='main'>
        <ul className="nav">
            <li className="nav-item">
                 <Link className='text1' to="/Foodrecipe">Search for movie</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/todo">TODO</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/createaccount">Create Account</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/signin">signinwithgoogle</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/covidcount">Covid Count</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/Gmaps">MAPS</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/Myprojects">count down</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/Mytopics">MyTopics</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/page">PAGINATION</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/contactus">Contactus</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className='text1' to="/logout" onClick={()=>localStorage.clear()}>Logout</Link>
            </li>
        </ul>
    </div>
  )
}
