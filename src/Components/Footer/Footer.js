import React from 'react';
import './Footer.css'
import logo from '../../images/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className="footer-mobile">
                <div className="container">
                    <img src={logo} alt=""/>
                    <div className="row">
                        <div className="col-6">
                            <p>About Online food</p>
                            <p>Read our blog</p>
                            <p>Sign up to deliver</p>
                            <p>Add your restaurant</p>
                        </div>
                        <div className="col-6">
                            <p>Get help</p>
                            <p>Read FAQs</p>
                            <p>View all cities</p>
                            <p>Restaurants near me</p>
                        </div>
                    </div>
                    <div className="row term-mobile">
                        <div className="col-4">
                            <p>Privacy Policy.</p>
                        </div>
                        <div className="col-4">
                            <p>Terms of Use.</p>
                        </div>
                        <div className="col-4">
                            <p>Pricing.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h6><small>Copyright <FontAwesomeIcon className="icon" icon={faCopyright}/> 2020 Red Onion.</small></h6>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 my-5">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-2 my-5">
                            <p>About Online food</p>
                            <p>Read our blog</p>
                            <p>Sign up to deliver</p>
                            <p>Add your restaurant</p>
                        </div>
                        <div className="col-2 my-5">
                            <p>Get help</p>
                            <p>Read FAQs</p>
                            <p>View all cities</p>
                            <p>Restaurants near me</p>
                        </div>
                    </div>
                    <div style={{fontSize:'13.5px'}} className="row term-pc">
                        <div className="col-8">
                            <h6><small>Copyright <FontAwesomeIcon className="icon" icon={faCopyright}/> 2020 Red Onion.</small></h6>
                        </div>
                        <div className="col-1">
                            <p>Privacy Policy.</p>
                        </div>
                        <div className="col-1">
                            <p>Terms of Use.</p>
                        </div>
                        <div className="col-1">
                            <p>Pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;