import React from 'react';

import { FaOpencart } from "react-icons/fa";
import './Summary.css'


const Summary = (props) => {
    const {cart} = props;
    let totalCost = 0;
    let name = [];
    for(const developer of cart){
        totalCost = totalCost + developer.salary;
        name = [...name, developer.name];
    }

    return (
        <div className='summary-container'>
            <h3>Summary</h3>
            <br />
            <h5>Total added:{cart.length}</h5>
            <h5>Total Cost: {totalCost}</h5>
            <p>{name}</p>
            <br />
            <button><FaOpencart/> Buy Now</button>
        </div>
    );
};

export default Summary;