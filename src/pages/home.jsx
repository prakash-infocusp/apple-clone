import Heading from "../../components/Heading";
import Button from "../../components/Button";
import styles from "./home.module.css";
import heroImage from "./images/hero-image-one.jpg";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.notificationContainer}>
        Get up to ₹10000.00 instant cashback with eligible cards.* Plus up to 12
        months of No Cost EMI.‡ Shop
      </div>
      <div className={styles.section1}>
        <Heading text="iPhone 16 Pro" color="white" size="h1" />
        <Heading text="Built for Apple Intelligence." color="white" size="h2" />
        <img
          src={heroImage}
          alt="hero image one"
          className={styles.imageStyle}
        />
        <div className={styles.ButtonContainer}>
          <div className={styles.buttonMargin}>
            <Button text="Learn More" variant="primary" size="big" />
          </div>
          <Button text="Buy" variant="secondary" size="big" />
        </div>
        <Heading
          text="Apple Intelligence available now in US English"
          color="grey"
          size="h3"
        />
      </div>
    </div>
  );
}

export default Home;
