import React from 'react';
import './Service.css'
const Service = (props) => {
    const {name,price,time,img,description} = props.service
    return (
        <div className="col-lg-4">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price:{price}</h3>
            <h6>Hours Needed:{time}</h6>
            <p className="px-5">{description}</p>
            
        </div>
    );
};

export default Service;