"use client"
import React, { useState, useEffect } from "react";
import {  useSpring } from "react-spring";

const AnimatedStars = ({ starCount, rotationSpeed, minSize, maxSize, opacity, bgColor, starColor }:{starCount:number, rotationSpeed:number, minSize:number, maxSize:number, opacity:number, bgColor:number, starColor:number }) => {
  const [stars, setStars] = useState<{
    id:number
    x: number;
    y: number;
    size: number;
    rotation: number;
  }[]>([]);

  useEffect(() => {
    const starsArray = Array(starCount).fill(0).map((_, i) => ({
      id:Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * (maxSize - minSize) + minSize,
      rotation: Math.random() * Math.PI * 2,
    }));

    setStars(starsArray);
  }, []);

  const animateStars = useSpring(() => ({
    rotation: stars.map((star) => star.rotation + rotationSpeed),
  }));

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: bgColor,
      opacity,
    }}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: starColor,
            position: "absolute",
            top: star.y,
            left: star.x,
            transform: `rotate(${star.rotation})`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedStars;