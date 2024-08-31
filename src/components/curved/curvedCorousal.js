import React, { useEffect, useRef } from "react";
import "./CurvedCarousel.css";

const CurvedCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Adjust the scroll speed here
      }
    }, 10); // Adjust the interval speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel" ref={carouselRef}>
        <img src="h11.png" alt="Influencer 1" className="carousel-img" />
        <img src="h12.png" alt="Influencer 2" className="carousel-img" />
        <div className="carousel-img">
          <h2>50K</h2>
          <p>On Instagram</p>
        </div>
        <img src="h13.png" alt="Influencer 3" className="carousel-img" />
        <img src="h14.png" alt="Influencer 4" className="carousel-img" />
      </div>
    </div>
  );
};

export default CurvedCarousel;
