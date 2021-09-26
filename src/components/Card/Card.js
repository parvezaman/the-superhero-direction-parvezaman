import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import Summary from '../Summary/Summary';
// import { useEffect } from 'react';
import './Card.css';

const Card = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./developers.JSON')
        .then(res => res.json())
        .then(data => setItems(data))
      },[]);

    const getItem =item =>{
        // console.log(item);
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div>
            <div className='card-container'>
                {/* to get cards */}
                <div className='my-card'>
                    {items.map(item => <ShowCard
                    key = {item.key}
                    item = {item}
                    getItem = {getItem}
                    ></ShowCard>)}

                </div>
                        {/* to get the summery section on the right */}
                <div className="summary-container">
                    <Summary cart={cart}></Summary>
                </div>
            

            </div>

        </div>
    );
};

export default Card;