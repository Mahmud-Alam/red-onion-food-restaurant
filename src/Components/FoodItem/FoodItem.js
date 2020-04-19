import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
    const {title,subtitle,price,img} = props.food
    return (
            <div className="col-md-4 mb-5 foodItem">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{subtitle}</p>
                        <h3>${price}</h3>
                    </div>
                </div>
            </div>
    );
};

export default FoodItem;