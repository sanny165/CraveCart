import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroCarousel.css"; // or use Tailwind CSS
import './HeroCarousel.css'

const slides = [
  {
    id: 1,
    image: "/assets/banner1.png",
    heading: "Fresh & Tasty Meals",
    subText: "Delivered hot to your doorstep",
  },
  {
    id: 2,
    image: "/assets/banner2.png",
    heading: "Up to 50% OFF",
    subText: "On your first order today!",
  },
  {
    id: 3,
    image: "/assets/banner3.png",
    heading: "Delicious Desserts 🍰",
    subText: "Treat your sweet tooth",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="hero-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="carousel-slide"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="overlay">
            <h1>{slides[current].heading}</h1>
            <p>{slides[current].subText}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
