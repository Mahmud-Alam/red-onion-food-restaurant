import React from 'react';
import './Banner.css'
import banner from '../../images/logo/bannerbackground.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Best food waiting for your belly</h1>
                <form className="search-form" action="">
                    <input className="search-input" type="text" placeholder="Search your food"/>
                    <input className="submit-button" type="submit" value="Search"/>
                </form>
            </div>
        </div>
    );
};

export default Banner;