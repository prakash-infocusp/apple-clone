import React from "react";
import Product from "../../components/Product";
import Heading from "../../components/Heading";
import styles from "./tv-home.module.css";

const TVHOME = () => {
  return (
    <>
      <Product />
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <div className={styles.textContainer}>
            <Heading text="iPhone 16 Pro" color="black" size="h0" />
            <Heading
              text="Built for Apple Intelligence."
              color="grey"
              size="h2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TVHOME;
