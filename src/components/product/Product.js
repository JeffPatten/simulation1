import React, { Component } from 'react';
import axios from 'axios';


export default function Product( {name, price, image} ) {
    
    return (
        <div className='Product'>
            <h2>Product</h2>
            <h3>{name}</h3>
            <h3>${price}</h3>
            <img src={image} alt="image-url_goes_here" />
        </div>
    )
}