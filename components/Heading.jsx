import React from 'react';
import styles from './Heading.module.css';

const Heading = ({ text, color = 'black', size = 'h1' }) => {

  const sizeClass = {
    h1: styles['text-h1'], 
    h2: styles['text-h2'],
    h3: styles['text-h3'],
  };

  const colorClass = {
    black: styles['text-black'],
    grey: styles['text-grey'],
    white: styles['text-white'],
  };

  return (
    <div className={`${sizeClass[size]} ${colorClass[color]}`}>
      {text}
    </div>
  );
};

export default Heading;
