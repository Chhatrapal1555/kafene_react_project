import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


const NavbarLogin = () => {
  return (
    <div className="navbar">
        <div className="navbar-left-menu">
            <div className="navbar-logo">
                <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Logo" />
                <p className="navbar-text">Kafene</p>
            </div>
            <nav>
                <Link className="navbar-items" to=''>Orders</Link>
                <Link className="navbar-items" to=''>Products</Link>
                <Link className="navbar-items" to=''>Users</Link>
            </nav>
        </div>
    </div>
  )
}

export default NavbarLogin