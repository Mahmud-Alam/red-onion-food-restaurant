import React from 'react';
import './Feature.css';
import feature from '../../fakeData/features';
import SingleFeature from './SingleFeature';


const Feature = () => {
    return (
        <div>
            <div className="feature-head container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Why you choose us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                    </div>
                </div>
                <div className="row feature">
                    {
                        feature.map(ft=>
                            <SingleFeature
                                feature = {ft}
                                key = {ft.id}
                            ></SingleFeature>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Feature;