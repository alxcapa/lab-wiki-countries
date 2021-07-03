import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    return (
    <nav className="navbar navbar-dark bg-primary mb-3"> 
        <div className="navbar-brand"><Link to='/'>Wiki countries</Link> </div> 
    </nav>)
}



export default NavBar