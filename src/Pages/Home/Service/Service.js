import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {Id,name,price,time,img,description} = props.service
    return (
        <div className="col-lg-4 pb-3">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price:{price}</h3>
            <h6>Hours Needed:{time}</h6>
            <p className="px-5">{description}</p>
            <Link to ={`/booking/${Id}`}>
            <button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
            
        </div>
    );
};

export default Service;