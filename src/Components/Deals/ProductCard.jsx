import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description, price, rating, buttonColor, onAddToCart }) => {
    return (
        <>

        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="card-price">${price}</p>
            <div className="card-rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
                        ★
                    </span>
                ))}
            </div>
            <div className="card-buttons">
                <button className="card-button" style={{ backgroundColor: buttonColor }}>
                    Buy Now
                </button>
                <button className="card-add-to-cart" onClick={onAddToCart}>
                    <i className="fa fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>


                


        </>
    );
};

export default ProductCard;
