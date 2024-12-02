import styles from "./Product.module.scss";
import {
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
  productSeven,
} from ".";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <img src={productOne} alt="apple tv 4k" height={50} />
        <span>Apple TV 4k</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productTwo} alt="apple tv app" height={50} />
        <span>Apple TV app</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productThree} alt="apple tv plus" height={50} />
        <span>Apple TV+</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productFour} alt="homepod" height={50} />
        <span>HomePod</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productFive} alt="homepod mini" height={50} />
        <span>HomePod mini</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productSix} alt="home app" height={50} />
        <span>Home app</span>
      </div>
      <div className={styles.productContainer}>
        <img src={productSeven} alt="accessories" height={50} />
        <span>Accessories</span>
      </div>
    </div>
  );
};

export default Product;
