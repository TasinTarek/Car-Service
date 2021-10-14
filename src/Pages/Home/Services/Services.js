import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div id="services" className="service-container">
            <div className="row mt-5 ">
                <h1 className="text-primary">Our Services</h1>
            {
                services.map(service => <Service
                key ={service.Id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;