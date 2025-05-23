import React from 'react'
import "./navbar.css";

const Navbar=()=> {
  return (
    <div className="navbar">
      <header className="header">
        <div className="logo">
          <img src="/utils/logo.svg" alt="Eclypse log" />
        </div>

        <nav className="nav">
          <a href=".">About Us</a>
          <a href=".">Wishlist</a>
          <a href="/shipping">Cart</a>
          <a href="/shipping">Buy</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
