import React from 'react'
import styles from "./Product.module.css";
import productOne from "./images/product-one.svg"

const Product = () => {
  return (
    <div className={styles.container}>
        <div className={styles.productContainer}>
            <img src={productOne} alt="apple tv 4k"/>
            <span>
                Apple TV 4k
            </span>
        </div>
    </div>
  )
}

export default Product