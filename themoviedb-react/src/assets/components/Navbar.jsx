import React from 'react'
import '../css/Navbar.css'
import logo from '../images/logo.svg'
import {
  Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
          <header className="header" id="container-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/movies">Películas</Link>
              <Link className="nav-link" to="/tv">Series</Link>
              <Link className="nav-link" to="/people">Personas</Link>
              
            </div>
          </div>    

          </nav>
          </header>
        </div>
    )
}

export default Navbar
