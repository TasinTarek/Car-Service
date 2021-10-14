import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/error-2129569_1280.jpg'
const Notfound = () => {
    return (
        <div>
            <img src={img} alt="" />
            <Link to="/home" ><button>Go Back</button></Link>
        </div>
    );
};

export default Notfound;