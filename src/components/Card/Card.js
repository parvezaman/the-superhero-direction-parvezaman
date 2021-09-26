import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import Summary from '../Summary/Summary';
// import { useEffect } from 'react';
import './Card.css';

const Card = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('./developers.JSON')
        .then(res => res.json())
        .then(data => setItems(data))
      },[]);

    const getItem =items =>{
        console.log(items);
    }
    return (
        <div className='card-container'>
            <div className='my-card'>
                {items.map(item => <ShowCard
                key = {item.key}
                item = {item}
                getItem = {getItem}
                ></ShowCard>)}

            </div>

            
            <Summary></Summary>

        </div>
    );
};

export default Card;