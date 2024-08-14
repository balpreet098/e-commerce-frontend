// App.js
import React from 'react';
import './ProductCard.css'
import ProductCard from './ProductCard.jsx';
import shoes from '../../assets/img/SHOES.jpg';
import Watch from '../../assets/img/Watch.jpg'
import Mobile from '../../assets/img/mobile.avif';
import Earphones from '../../assets/img/earphones.webp'

const products = [
    {
        id: 1,
        image: shoes,
        title: "Shoes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "100.00",
        rating: 4,
        buttonColor: "#00bcd4"
    },
    {
        id: 2,
        image:Earphones,
        title: "Earphones",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "40.00",
        rating: 4,
        buttonColor: "#673ab7"
    },
    {
        id: 3,
        image: Watch,
        title: "Watch",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "70.84",
        rating: 4,
        buttonColor: "#000"
    },
    {
        id: 4,
        image: Mobile,
        title: "Mobile",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "1000.84",
        rating: 5,
        buttonColor: "#ff9800"
    } ,{
        id: 5,
        image: shoes,
        title: "Shoes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "100.00",
        rating: 4,
        buttonColor: "#00bcd4"
    },
    {
        id: 6,
        image:Earphones,
        title: "Earphones",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "40.00",
        rating: 4,
        buttonColor: "#673ab7"
    },
    {
        id: 7,
        image: Watch,
        title: "Watch",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "70.84",
        rating: 4,
        buttonColor: "#000"
    },
    {
        id: 8,
        image: Mobile,
        title: "Mobile",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "1000.84",
        rating: 5,
        buttonColor: "#ff9800"
    },{
        id: 9,
        image: shoes,
        title: "Shoes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "100.00",
        rating: 4,
        buttonColor: "#00bcd4"
    },
    {
        id: 10,
        image:Earphones,
        title: "Earphones",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: "40.00",
        rating: 4,
        buttonColor: "#673ab7"
    },
 
];

const Data = () => {
    return (
        <>
        <div className="mainsir">
        <div className="ProductText"> <h1>PRODUCTS</h1> </div>
        <div className="hr">
            <hr className='ProductUnderLine' />
        </div>
        <div className="card-container">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    buttonColor={product.buttonColor}
                />
            ))}
        </div>


        <div className="ShowMore">
            <h3>Show MOre</h3>
        </div>

        </div>
        </>
    );
};

export default Data;
