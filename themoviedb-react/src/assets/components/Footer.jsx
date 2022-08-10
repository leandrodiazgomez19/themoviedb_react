import React from 'react'
import '../css/Footer.css'
import logo from '../images/logo.svg'

const Footer = () => {
    return (
        <div>
               <footer className="footer">
        <div className="row footer-row">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="container">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 footer-iconos">
                <a rel="noreferrer" href="https://facebook.com" target="_blank">
                    <i className="fab fa-facebook-square fa-2x"></i>
                </a>

                <a rel="noreferrer" href="https://twitter.com" target="_blank">
                    <i className="fab fa-twitter-square fa-2x"></i>
                </a>

                <a rel="noreferrer" href="https://linkedin.com" target="_blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="container">
                    Desarrollado por Leandro Díaz
                </div>
            </div>
        </div>  
    </footer>
        </div>
    )
}

export default Footer
