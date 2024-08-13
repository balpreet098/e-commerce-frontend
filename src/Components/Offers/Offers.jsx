import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ExampleCrousleImage from '../../assets/img/banner.png'
import ExampleCarouselImage from '../../assets/img/banner1.jpg';
import ExampleCarouselImage2 from '../../assets/img/banner4.jpg'
import ExampleCarouselImage3 from '../../assets/img/banner3.jpg'

function Offers() {
  // State to track the active index of the carousel
  const [index, setIndex] = useState(0);

  // Function to handle when a slide is selected
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={ExampleCarouselImage}
          alt="First slide"
          className="d-block w-100"
          style={{ height: '750px',   }}

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={ExampleCarouselImage2}
          alt="Second slide"
          className="d-block w-100"
          style={{ height: '750px',   }}

        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={ExampleCarouselImage3}
          alt="Third slide"
          className="d-block w-100"
          style={{ height: '750px',   }}

        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Offers;
