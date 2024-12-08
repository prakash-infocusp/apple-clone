import Product from "../../../components/Product";
import Heading from "../../../components/ui/Heading";
import styles from "./tv-home.module.scss";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { arcade, music, tvPlus, delivery, rupee, chat, tvImage, home } from ".";

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

        <div className={styles.sectionFour}>
          <div className={styles.heading}>
            <h2>Every reason to turn your house</h2>
            <h2>into a smart home.</h2>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div>
                <Heading
                  text="Easily control your home"
                  color="black"
                  size="h3"
                  weight="bold"
                />
                <Heading
                  text="from anywhere with your"
                  color="black"
                  size="h3"
                  weight="bold"
                />
                <Heading
                  text="favourite devices."
                  color="black"
                  size="h3"
                  weight="bold"
                />
              </div>
              <div className={styles.margin}></div>
              <div className={styles.margin}></div>

              <Link to="/">
                <Heading
                  text="Learn more about the Home app >"
                  color="blue"
                  size="h5"
                  weight="semi"
                />
              </Link>
            </div>

            <div className={styles.card}>
              <div>
                <Heading
                  text="Seamlessly connected"
                  color="black"
                  size="h3"
                  weight="bold"
                />
                <Heading
                  text="entertainment in every room."
                  color="black"
                  size="h3"
                  weight="bold"
                />
              </div>
              <div className={styles.margin}></div>
              <div className={styles.margin}></div>

              <Link to="/">
                <Heading
                  text="Learn more about HomePod >"
                  color="blue"
                  size="h5"
                  weight="semi"
                />
              </Link>
            </div>

            <div className={styles.card}>
              <div>
                <Heading
                  text="All with the security"
                  color="black"
                  size="h3"
                  weight="bold"
                />
                <Heading
                  text="and privacy of Apple."
                  color="black"
                  size="h3"
                  weight="bold"
                />
              </div>
              <div className={styles.margin}></div>
              <div className={styles.margin}></div>

              <Link to="/">
                <Heading
                  text="Learn more about Privacy >"
                  color="blue"
                  size="h5"
                  weight="semi"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.sectionFive}>
          <div className={styles.heading}>
            <h2>Watch, sing and play.</h2>
            <h2>On the big screen.</h2>
          </div>

          <div className={styles.videoContainer}>
            <video
              autoPlay
              loop
              muted
              src="https://www.apple.com/105/media/ww/tv-home/2024/ed6b1c3a-5550-4218-9c96-e11a46281591/anim/sizzle/no-fit/large_2x.mp4"
            ></video>
          </div>
        </div>

        <div className={styles.sectionSix}>
          <div className={styles.productContainer}>
            <div className={styles.product}>
              <img src={tvPlus} alt="tv plus logo" />
              <div className={styles.margin}></div>
              <Heading
                text="Stream award-winning"
                colo="black"
                weight="semi"
                size="h4"
              />
              <Heading
                text="Apple Originals on every screen."
                colo="black"
                weight="semi"
                size="h4"
              />

              <div className={styles.buttonContainer}>
                <Button text="Try it free" variant="primary" size="big" />
                <Link to={"/"}>
                  <Heading
                    text="Learn more >"
                    color="blue"
                    weight="semi"
                    size="h5"
                  />
                </Link>
              </div>
            </div>
            <div className={styles.product}>
              <img src={music} alt="tv plus logo" />
              <div className={styles.margin}></div>
              <Heading
                text="Access all your favourite songs"
                colo="black"
                weight="semi"
                size="h4"
              />
              <Heading
                text="and sing along with lyrics view."
                colo="black"
                weight="semi"
                size="h4"
              />

              <div className={styles.buttonContainer}>
                <Button text="Try it free" variant="primary" size="big" />
                <Link to={"/"}>
                  <Heading
                    text="Learn more >"
                    color="blue"
                    weight="semi"
                    size="h5"
                  />
                </Link>
              </div>
            </div>
            <div className={styles.product}>
              <img src={arcade} alt="tv plus logo" />
              <div className={styles.margin}></div>
              <Heading
                text="Over 200 incredibly fun games."
                colo="black"
                weight="semi"
                size="h5"
              />
              <Heading
                text="No ads. No in-app purchases."
                colo="black"
                weight="semi"
                size="h4"
              />

              <div className={styles.buttonContainer}>
                <Button text="Try it free" variant="primary" size="big" />
                <Link to={"/"}>
                  <Heading
                    text="Learn more >"
                    color="blue"
                    weight="semi"
                    size="h5"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <img src={delivery} alt="tv plus logo" width={50} />
              <Heading
                text="Free delivery and pickup"
                colo="black"
                weight="bold"
                size="h5"
              />
              <div className={styles.margin}></div>
              <Heading
                text="Get free delivery or pickup"
                colo="black"
                weight="semi"
                size="h6"
              />
              <Heading
                text="at your Apple Store."
                colo="black"
                weight="semi"
                size="h6"
              />{" "}
              <div className={styles.margin}></div>
              <Link to={"/"}>
                <Heading
                  text="Learn more >"
                  color="blue"
                  weight="semi"
                  size="h6"
                />
              </Link>
            </div>

            <div className={styles.info}>
              <img src={rupee} alt="tv plus logo" width={50} />
              <Heading
                text="Ways to buy"
                colo="black"
                weight="bold"
                size="h5"
              />
              <div className={styles.margin}></div>
              <Heading
                text="Choose the way that′s"
                colo="black"
                weight="semi"
                size="h6"
              />
              <Heading
                text="right for you."
                colo="black"
                weight="semi"
                size="h6"
              />{" "}
              <div className={styles.margin}></div>
              <Link to={"/"}>
                <Heading
                  text="Learn more >"
                  color="blue"
                  weight="semi"
                  size="h6"
                />
              </Link>
            </div>

            <div className={styles.info}>
              <img src={chat} alt="tv plus logo" width={50} />
              <Heading
                text="Get help buying"
                colo="black"
                weight="bold"
                size="h5"
              />
              <div className={styles.margin}></div>
              <Heading
                text="Have a question? Call a Specialist"
                colo="black"
                weight="semi"
                size="h6"
              />
              <Heading
                text=" or chat online."
                colo="black"
                weight="semi"
                size="h6"
              />
              <Heading
                text="Call 000800 040 1966."
                colo="black"
                weight="semi"
                size="h6"
              />

              <div className={styles.margin}></div>
              <Link to={"/"}>
                <Heading
                  text="Learn more >"
                  color="blue"
                  weight="semi"
                  size="h6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TVHOME;
