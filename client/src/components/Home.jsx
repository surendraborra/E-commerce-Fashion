import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import slide1 from '../images/slide1.avif'
import slide2 from '../images/slide2.avif'
import slide3 from '../images/slide3.avif'
import slide4 from '../images/slide4.avif'
import slide5 from '../images/slide5.avif'

const slides = [
  {
    title: 'Slide 1',
    content: 'This is the content of slide 1.',
    image: slide1,
  },
  {
    title: 'Slide 2',
    content: 'This is the content of slide 2.',
    image: slide2,
  },
  {
    title: 'Slide 3',
    content: 'This is the content of slide 3.',
    image: slide3,
  },
  {
    title: 'Slide 4',
    content: 'This is the content of slide 4.',
    image: slide4,
  },
  {
    title: 'Slide 5',
    content: 'This is the content of slide 5.',
    image: slide5,
  },
];

const Home = () => {
  return (
    <div className="container mt-5 mb-5">
      <Carousel interval={3000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img 
              className="d-block w-100 "
              src={slide.image}
              alt={`Slide ${index + 1}`}
              height='400px'
            />

          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
