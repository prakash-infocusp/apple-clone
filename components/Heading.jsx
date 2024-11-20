import React from 'react';
import styles from "./Heading.module.css"


const Heading = ({ text, color = 'black', size = 'h1' }) => {
  const sizeClass = {
    h1: 'text-h1', 
    h2: 'text-h2', 
    h3: 'text-h3', 
  };

  const colorClass = {
    black: 'text-black', 
    red: 'text-red',     
    blue: 'text-blue', 
  };

  return (
    <div className={`${sizeClass[size]} ${colorClass[color]}`}>
      {text}
    </div>
  );
};

export default Heading;
