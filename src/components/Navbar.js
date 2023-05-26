import React from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'

function Navbar() {
  return (
    <div>
      <div className="navbar-background">
        <div className="content-container-navbar container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html"><img src={logo} className="App-logo" alt="logo" width="auto" height="40"></img></a>
            <button className="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar first-bar"></span>
              <span className="icon-bar second-bar"></span>
              <span className="icon-bar third-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <Link to="/" className="nav-link navbar-text navbar-undertext-hover">
                  Home
                </Link>
                <Link to="/favourites" className="nav-link navbar-text navbar-undertext-hover">
                  Favourites
                </Link>
                <Link to="/shop" className="nav-link navbar-text navbar-undertext-hover cart-badge">
                  Shop
                </Link>
                <Link to="/" className="nav-link navbar-text navbar-undertext-hover">
                  Cart
                </Link>
                <Link to="/" className="nav-link navbar-text navbar-undertext-hover">
                  Dashboard
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar