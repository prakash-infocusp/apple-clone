import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, variant = 'primary', size = 'small', onClick }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
