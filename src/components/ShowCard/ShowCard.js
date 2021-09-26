import './ShowCard.css';

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube,AiFillFacebook } from "react-icons/ai";

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

const ShowCard = (props) => {
    console.log(props);
    const {born,image, inventor,name,nationality,salary } = props.item;
    const {getItem} = props;
    return (
        <div>
            <div className='show-card'>
                <div className="card-upper-segment">
                    <div className="card-image">
                        <img src={image} alt="" />
                    </div>
            
                    <div className="card-details">
                        <h4>Name: {name}</h4>
                        <p>Nationality: {nationality}</p>
                        <p>Salary: {salary}</p>
                        <h5>Inventor: {inventor}</h5>
                        <p>Born in: {born}</p>
                    
                    </div>
                </div>
                <div className='card-lower-segment'>
                    <hr />
                    <button onClick={()=>getItem(name)}>{shoppingCart} Add to Cart</button>
                    <hr />
                    <div className="bottom-icons">
                        <AiFillFacebook className='facebook'/> 
                        <AiFillLinkedin className='linkedin'/> 
                        <AiFillTwitterSquare className='twitter'/> 
                        <AiFillYoutube className='youtube'/>
                    </div>
                    <hr />
                </div>
            
            </div>
            
        </div>
    );
};

export default ShowCard;