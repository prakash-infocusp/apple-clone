import Product from "../../../components/Product";
import Heading from "../../../components/ui/Heading";
import styles from "./tv-home.module.css";
import Button from "../../../components/ui/Button";
import tvImage from "../../../components/images/tv.png";
import home from "../../../components/images/home.png";

const TVHOME = () => {
  return (
    <>
      <Product />
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <div className={styles.textContainer}>
            <Heading
              text="The future hits home."
              color="black"
              size="h0"
              weight="extraBold"
            />
            <Heading
              text="Simply connect your favourite devices and transform your house into a remarkably smart, convenient and entertaining home. Elevate movie night with theatre-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks and thermostats using Siri. All with the security and privacy of Apple."
              color="grey"
              size="h3"
            />
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.leftContainer}>
            <div className={styles.content}>
              <Heading text="HomePod" color="white" size="h3" weight="semi" />
              <span className={styles.margin}></span>
              <Heading
                text="Profound sound."
                color="white"
                size="h2"
                weight="extraBold"
              />
              <span className={styles.margin}></span>
              <Heading text="₹32900.00*" color="white" size="h3" />
              <div className={styles.buttonContainer}>
                <Button text="Buy" variant="primary" size="big" />
                <Button text="Learn More >" variant="plain" size="big" />
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.content}>
              <Heading
                text="HomePod mini"
                color="black"
                size="h3"
                weight="semi"
              />
              <span className={styles.margin}></span>
              <Heading
                text="Surprising sound for its size."
                color="black"
                size="h2"
                weight="extraBold"
              />
              <span className={styles.margin}></span>
              <Heading text="₹10900.00*" color="black" size="h3" />
              <div className={styles.buttonContainer}>
                <Button text="Buy" variant="primary" size="big" />
                <Button text="Learn More >" variant="plain" size="big" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionThree}>
          <div className={styles.leftContainer}>
            <div className={styles.content}>
              <img src={tvImage} alt="home icon" height={30} />
              <span className={styles.margin}></span>

              <Heading
                text="The Apple experience."
                color="black"
                size="h2"
                weight="extraBold"
              />
              <Heading
                text="Cinematic in every sense."
                color="black"
                size="h2"
                weight="extraBold"
              />
              <span className={styles.margin}></span>
              <Heading
                text="Starting from ₹14900.00*"
                color="black"
                size="h3"
              />
              <div className={styles.buttonContainer}>
                <Button text="Buy" variant="primary" size="big" />
                <Button text="Learn More >" variant="plain" size="big" />
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.content}>
              <img src={home} alt="home icon" height={47} width={47} />
              <span className={styles.margin}></span>

              <Heading
                text="Home app"
                color="black"
                size="h4"
                weight="extraBold"
              />
              <span className={styles.margin}></span>

              <Heading
                text="The foundation"
                color="black"
                size="h2"
                weight="extraBold"
              />
              <Heading
                text="for a smarter home."
                color="black"
                size="h2"
                weight="extraBold"
              />
              <span className={styles.margin}></span>
              <Heading
                text="Starting from ₹14900.00*"
                color="black"
                size="h3"
              />
              <div className={styles.buttonContainer}>
                <Button text="Learn More >" variant="plain" size="big" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TVHOME;
