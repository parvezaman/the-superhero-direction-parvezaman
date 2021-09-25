import React from 'react';
import './ShowCard.css';

const ShowCard = (props) => {
    console.log(props);
    const {born,image, inventor,name,nationality,salary } = props.item;
    return (
        <div className='show-card'>
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            
            <div className="card-details">
                <h3>Name: {name}</h3>
                <p>Nationality: {nationality}</p>
                <p>Salary: {salary}</p>
                <h5>Inventor: {inventor}</h5>
                <p>Born in: {born}</p>
            </div>
            
        </div>
    );
};

export default ShowCard;