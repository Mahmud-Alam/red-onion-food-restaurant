import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const SingleFeature = (props) => {
    const {icon,image,title,description} = props.feature;

    const [showDescription,setShowDescription] = useState(false);

    const showMore=()=>{
        setShowDescription(true);
    }
    const showLess=()=>{
        setShowDescription(false);
    }
    return (
            <div className="col-md-4 my-5">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex">
                        <div>
                            <img className="feature-icon" src={icon} alt=""/>
                        </div>
                        <div className="feature-description">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                                {
                                showDescription? description:description.substr(0,100)
                                }
                            </p>
                            {
                                showDescription? <span onClick={showLess} className="">See Less <FontAwesomeIcon className="icon" icon={faArrowAltCircleLeft} /></span>
                                : <span onClick={showMore} className="">See more <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} /></span>

                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SingleFeature;