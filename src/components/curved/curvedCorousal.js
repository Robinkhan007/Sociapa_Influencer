import React, { useEffect, useRef } from "react";
import "./CurvedCarousel.css";

const CurvedCarousel = () => {
  const wrapperRef = useRef(null);
  const scrollPosition = useRef(0);
  const scrollSpeed = 1; // Speed value for smooth scrolling
  const requestRef = useRef();
  const imageWidth = 220;
  const scrollDuration = 'infinite'; // Time in milliseconds (1 second per scroll)

  // Function to smoothly scroll each image
  const smoothScroll = () => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      // Increment scroll position by image width every second
      scrollPosition.current += scrollSpeed;

      // Check if the scroll has reached the width of one image
      if (scrollPosition.current >= imageWidth) {
        scrollPosition.current = 0;

        // Move the first image to the end to create a continuous effect
        const firstImage = wrapper.children[0];
        wrapper.appendChild(firstImage);
        wrapper.scrollLeft -= imageWidth;
      }

      // Increment the scroll position smoothly
      wrapper.scrollLeft += scrollSpeed;

      // Continuously call smoothScroll using requestAnimationFrame
      requestRef.current = setTimeout(() => requestAnimationFrame(smoothScroll), scrollDuration / imageWidth);
    }
  };

  useEffect(() => {
    // Start the smooth scroll animation
    requestRef.current = requestAnimationFrame(smoothScroll);

    // Cleanup animation on component unmount
    return () => {
      cancelAnimationFrame(requestRef.current);
      clearTimeout(requestRef.current);
    };
  }, []);

  return (
    <section>
      <div className="wrapper" ref={wrapperRef}>
        <img src="h11.png" alt="Image 1" />
        <img src="h12.png" alt="Image 2" />
        <img src="h13.png" alt="Image 3" />
        <img src="h12.png" alt="Image 4" />
        <img src="h12.png" alt="Image 5" />
      </div>
    </section>
  );
};

export default CurvedCarousel;
