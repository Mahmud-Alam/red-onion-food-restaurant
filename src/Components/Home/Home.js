import React, { useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import foods from '../../fakeData/foods'
import FoodItem from '../FoodItem/FoodItem';
import $ from "jquery";
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import FoodItemMobile from '../FoodItem/FoodItemMobile';


const Home = () => {
    const lunchFoods = foods.filter(fd=>fd.catagories ==='lunch');
    const [food,setFood] = useState(lunchFoods);
    const handlerBreakfast =()=>{
        setFood(foods.filter(fd=>fd.catagories ==='breakfast'))
    }
    const handlerLunch =()=>{
        setFood(foods.filter(fd=>fd.catagories ==='lunch'))
    }
    const handlerDinner =()=>{
        setFood(foods.filter(fd=>fd.catagories ==='dinner'))
    }

    $(document).on('click','ul li',function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="food-select-div d-flex justify-content-center">
                <ul>
                    <li><button style={{margin:'0 20px'}} onClick={handlerBreakfast} className="food-button login-button">Breakfast</button></li>
                    <li className="active"><button style={{margin:'0 20px'}} onClick={handlerLunch} className="food-button login-button">Lunch</button></li>
                    <li><button style={{margin:'0 20px'}} onClick={handlerDinner} className="food-button login-button">Dinner</button></li>
                </ul>
            </div>
            <div className="container">
                <div style={{marginTop:'1rem'}} className="row">
                    {
                        food.map(fd=>
                            <FoodItem 
                                food={fd}
                                key={fd.key}
                            ></FoodItem>)
                    }
                    {
                        food.map(fd=>
                            <FoodItemMobile 
                                food={fd}
                                key={fd.key}
                            ></FoodItemMobile>)
                    }
                </div>
            </div>
            <div className="checkOut-button-div my-5">
                <button className="checkOut-button">Check Out Your Food</button>
            </div>
            <div>
                <Feature></Feature>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;