import React from 'react';
import './Expert.css'
const Expert = (props) => {
    const {name,expertize,img} = props.expert;
    return (
        <div className="col-lg-4 image">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h5>{expertize}</h5>
        </div>
    );
};

export default Expert;