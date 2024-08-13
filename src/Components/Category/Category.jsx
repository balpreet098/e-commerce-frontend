import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";

import clothingImage from '../../assets/img/clothing.webp';
import electronics from '../../assets/img/electronics.jpg';
import toys from '../../assets/img/toys.jpg';
import books from '../../assets/img/books.webp';
import homeKitchen from '../../assets/img/homeKitchen.jpg';

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Devices and gadgets",
    image: electronics,
  },
  {
    id: 2,
    name: "Clothing",
    description: "Apparel and accessories",
    image: clothingImage,
  },
  {
    id: 3,
    name: " Kitchen",
    description: "Household items and kitchenware",
    image: homeKitchen,
  },
  {
    id: 4,
    name: "Books",
    description: "Fiction, non-fiction, and educational",
    image: books,
  },
  {
    id: 5,
    name: "Toys",
    description: "Toys and games for all ages",
    image: toys,
  },
];

export default function Category() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    
    <div className="CategoryContainer">
    <div className="heading-category">
      <h1>CATEGORIES</h1>
    </div>
    <div className="underLine">
      
    </div>
    <br />
    <div className="slider-cat">
    <Slider {...settings}>
      {categories.map(category => (
        <div key={category.id} className="category-item">
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
          {/* <p>{category.description}</p> */}
        </div>
      ))}
    </Slider>
    </div>
    </div>
    </>
  );
}
