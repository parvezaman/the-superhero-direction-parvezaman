import React from 'react';

import { FaOpencart } from "react-icons/fa";
import './Summary.css'


const Summary = () => {
    return (
        <div className='summary-container'>
            <h3>Summary</h3>
            <br />
            <h5>Total added:</h5>
            <h5>Total Cost: </h5>
            <br />
            <button><FaOpencart/> Buy Now</button>
        </div>
    );
};

export default Summary;