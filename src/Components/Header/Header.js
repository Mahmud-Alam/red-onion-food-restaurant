import React from 'react';
import './Header.css'
import logo from "../../images/logo/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header fixed-top">
            <div className="container-fluid">
                <nav className="d-flex justify-content-between">
                    <ul>
                        <li  className="d-flex align-items-center"><img src={logo} alt=""/></li>
                    </ul>
                    <ul>
                        <li className="d-flex align-items-center"><FontAwesomeIcon icon={faShoppingCart}/> <span className="cart-value">{0}</span></li>
                        <li className="d-flex align-items-center"><button className="login-button">Login</button></li>
                        <li className="d-flex align-items-center"><button className="sign-up-button">Sign up</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;