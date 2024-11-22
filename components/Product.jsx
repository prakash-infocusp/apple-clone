import React from "react";
import styles from "./Product.module.css";
import productOne from "./images/product-one.svg";
import productTwo from "./images/product-two.svg";
import productThree from "./images/product-three.svg";
import productFour from "./images/product-four.svg";
import productFive from "./images/product-five.svg";
import productSix from "./images/product-six.svg";
import productSeven from "./images/product-seven.svg";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <img src={productOne} alt="apple tv 4k" height={50}/>
        <span>Apple TV 4k</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productTwo} alt="apple tv app" height={50}/>
        <span>Apple TV app</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productThree} alt="apple tv plus" height={50}/>
        <span>Apple TV+</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productFour} alt="homepod" height={50}/>
        <span>HomePod</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productFive} alt="homepod mini" height={50}/>
        <span>HomePod mini</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productSix} alt="home app" height={50}/>
        <span>Home app</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productSeven} alt="accessories" height={50}/>
        <span>Accessories</span>
      </div>
    </div>
  );
};

export default Product;
