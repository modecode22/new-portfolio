"use client"
import React, { useState, useEffect } from "react";



const TheParticles = () => {
	const [snow, setSnow] = useState([]);

	const createSnowflake = () => {
	  const snowflake = {
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		size: Math.random() * 10 + 10,
		speed: Math.random() * 10 + 5,
		direction: Math.random() * 360,
	  };
  
	  setSnow([...snow, snowflake]);
	};
  
	useEffect(() => {
	  const interval = setInterval(() => createSnowflake(), 100);
  
	  return () => clearInterval(interval);
	}, []);
  
	return (
	  <div>
		{snow.map((snowflake) => (
		  <div
			key={snowflake.id}
			style={{
			  width: snowflake.size,
			  height: snowflake.size,
			  background: "white",
			  position: "absolute",
			  top: snowflake.y,
			  left: snowflake.x,
			  borderRadius: "50%",
			  transform: `rotate(${snowflake.direction})`,
			  animation: `snowfall 1s infinite linear`,
			}}
		  />
		))}
	  </div>
	);
  };
  
export default TheParticles;