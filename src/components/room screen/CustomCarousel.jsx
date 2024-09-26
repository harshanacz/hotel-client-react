import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CustomCarousel.css'; 

const CustomCarousel = ({ images }) => {
  return (
    <Carousel 
      showArrows={true}
      showThumbs={true}
      infiniteLoop={true}
      autoPlay={true} 
      interval={4000}
      transitionTime={600}
      dynamicHeight={false}
      showIndicators={false}
      className="custom-carousel"
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button onClick={onClickHandler} className="custom-arrow left-arrow">
            &#10094; 
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <button onClick={onClickHandler} className="custom-arrow right-arrow">
            &#10095;
          </button>
        )
      }
    >
      {images.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Room Image ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
