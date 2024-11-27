import Heading from "../../../components/ui/Heading";
import Button from "../../../components/ui/Button";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.notificationContainer}>
        Get up to ₹10000.00 instant cashback with eligible cards.* Plus up to 12
        months of No Cost EMI.‡{" "}
        <span className={styles.shopLink}>{" Shop >"}</span>
      </div>
      <div className={styles.sectionOne}>
        <div className={styles.headingContainer}>
          <Heading text="iPhone 16 Pro" color="white" size="h1" />
          <Heading
            text="Built for Apple Intelligence."
            color="white"
            size="h2"
          />
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonRow}>
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

      <div className={styles.sectionTwo}>
        <div className={styles.headingContainer}>
          <Heading text="iPhone 16 Pro" color="white" size="h1" />
          <Heading
            text="Built for Apple Intelligence."
            color="white"
            size="h2"
          />
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonRow}>
            <div className={styles.buttonMargin}>
              <Button text="Learn More" variant="primary" size="big" />
            </div>
            <Button text="Buy" variant="secondary" size="big" />
          </div>
          <Heading
            text="Apple Intelligence available now in US English"
            color="black"
            size="h3"
          />
        </div>
      </div>

      <div className={styles.sectionThree}>
        <div className={styles.headingContainer}>
          <Heading text="MacBook Pro" color="white" size="h1" />
          <Heading text="A work of smart." color="white" size="h2" />
          <div className={styles.buttonRow}>
            <div className={styles.buttonMargin}>
              <Button text="Learn More" variant="primary" size="big" />
            </div>
            <Button text="Buy" variant="secondary" size="big" />
          </div>
        </div>
        <div className={styles.textContainer}>
          <span className={styles.gradientText}>
            Built for Apple Intelligence.
          </span>
          <Heading
            text="Apple Intelligence available now in US English"
            color="grey"
            size="h3"
          />
        </div>
      </div>

      <div className={styles.sectionFour}>
        <div className={styles.leftContainer}>
          <div className={styles.content}>
            <Heading text="iWatch" color="black" size="h1" />
            <Heading text="Thinstant classic." color="black" size="h2" />
            <div className={styles.buttonRow}>
              <div className={styles.buttonMargin}>
                <Button text="Learn More" variant="primary" size="small" />
              </div>
              <Button text="Buy" variant="secondary" size="small" />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.content}>
            <Heading text="AirPods 4" color="white" size="h1" />
            <Heading text="Iconic. Now supersonic." color="white" size="h2" />
            <Heading
              text="Available with Active Noise Cancellation."
              color="white"
              size="h2"
            />
            <div className={styles.buttonRow}>
              <div className={styles.buttonMargin}>
                <Button text="Learn More" variant="primary" size="small" />
              </div>
              <Button text="Buy" variant="secondary" size="small" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionFive}>
        <div className={styles.leftContainer}>
          <div className={styles.content}>
            <Heading text="Mac mini" color="black" size="h1" />
            <Heading text="Size down. Power up." color="black" size="h2" />
            <div className={styles.buttonRow}>
              <div className={styles.buttonMargin}>
                <Button text="Learn More" variant="primary" size="small" />
              </div>
              <Button text="Buy" variant="secondary" size="small" />
            </div>
          </div>
          <div className={styles.bottomText}>
            <span className={styles.gradientText}>
              Built for Apple Intelligence.
            </span>
            <Heading
              text="Available now in US English"
              color="grey"
              size="h3"
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.content}>
            <Heading text="iMac" color="black" size="h1" />
            <Heading text="Brilliant" color="black" size="h2" />
            <div className={styles.buttonRow}>
              <div className={styles.buttonMargin}>
                <Button text="Learn More" variant="primary" size="small" />
              </div>
              <Button text="Buy" variant="secondary" size="small" />
            </div>
          </div>
          <div className={styles.bottomText}>
            <span className={styles.gradientText}>
              Built for Apple Intelligence.
            </span>
            <Heading
              text="Available now in US English"
              color="grey"
              size="h3"
            />
          </div>
        </div>
      </div>

      <div className={styles.sectionSix}>
        <div className={styles.leftContainer}>
          <div className={styles.content}>
            <Heading text="iPad mini" color="black" size="h1" />
            <Heading text="Single-handedly awesome." color="black" size="h2" />
            <div className={styles.buttonRow}>
              <div className={styles.buttonMargin}>
                <Button text="Learn more" variant="primary" size="small" />
              </div>
              <Button text="Buy" variant="secondary" size="small" />
            </div>
          </div>
          <div className={styles.bottomText}>
            <Heading
              text="Apple Intelligence available now in US English"
              color="grey"
              size="h3"
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.content}>
            <Heading text="Trade In" color="black" size="h1" />
            <Heading text="Brilliant" color="black" size="h2" />
            <div className={styles.buttonRow}>
              <div className={styles.buttonMargin}>
                <Button
                  text="Get your estimate"
                  variant="primary"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
