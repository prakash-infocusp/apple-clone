import styles from "./Footer.module.scss";
import { ChevronDown, ChevronUp } from "../index";
import { useState } from "react";

let Footer = () => {
  const [isShopListVisible, setShopListVisible] = useState(true);
  const [isAppleWalletVisible, setAppleWalletVisible] = useState(true);

  const [isAccountListVisible, setAccountListVisible] = useState(true);
  const [isEntertainmentListVisible, setEntertainmentListVisible] =
    useState(true);
  const [isStoreListVisible, setStoreListVisible] = useState(true);
  const [isBusinessListVisible, setBusinessListVisible] = useState(true);
  const [isEducationListVisible, setEducationListVisible] = useState(true);
  const [isHealthcareListVisible, setHealthcareListVisible] = useState(true);
  const [isAppleValuesListVisible, setAppleValuesListVisible] = useState(true);
  const [isAboutAppleListVisible, setAboutAppleListVisible] = useState(true);

  const toggleAppleWalletVisibility = () =>
    setAppleWalletVisible(!isAppleWalletVisible);
  const toggleShopListVisibility = () => setShopListVisible(!isShopListVisible);
  const toggleAccountListVisibility = () =>
    setAccountListVisible(!isAccountListVisible);
  const toggleEntertainmentListVisibility = () =>
    setEntertainmentListVisible(!isEntertainmentListVisible);
  const toggleStoreListVisibility = () =>
    setStoreListVisible(!isStoreListVisible);
  const toggleBusinessListVisibility = () =>
    setBusinessListVisible(!isBusinessListVisible);
  const toggleEducationListVisibility = () =>
    setEducationListVisible(!isEducationListVisible);
  const toggleHealthcareListVisibility = () =>
    setHealthcareListVisible(!isHealthcareListVisible);
  const toggleAppleValuesListVisibility = () =>
    setAppleValuesListVisible(!isAppleValuesListVisible);
  const toggleAboutAppleListVisibility = () =>
    setAboutAppleListVisible(!isAboutAppleListVisible);

  return (
    <footer className={styles.footer}>
      <div className={styles.sectionOne}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            *Instant cashback is available with the purchase of an{" "}
            <a className={styles.footerLinks}>eligible product</a> with
            qualifying American Express, Axis Bank, and ICICI Bank cards only.{" "}
            <a className={styles.footerLinks}>Click here</a> to see instant
            cashback amounts and eligible devices.{" "}
            <a className={styles.footerLinks}>Additional terms apply</a>.
          </li>
          <li className={styles.listItem}>
            ‡No Cost EMI is available with the purchase of an{" "}
            <a className={styles.footerLinks}>eligible product</a> made using
            qualifying cards on 3-, 6-, 9- or 12-month tenures.{" "}
            <a className={styles.footerLinks}>Terms Apply</a>.
          </li>
          <li className={styles.listItem}>
            Representative example: Based on a 12-month tenure. ₹79900.00 total
            cost includes 15.99% p.a. and No Cost EMI savings of ₹6514.00, paid
            over 12 months as 12 monthly payments of ₹6658.00.
          </li>
          <li className={styles.listItem}>
            1. Apple Intelligence is available in beta on all iPhone 16 models,
            iPhone&nbsp;15&nbsp;Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and
            iPad and Mac models with M1 and later, with Siri and device language
            set to US English, as part of an iOS 18, iPadOS 18, and macOS
            Sequoia update. English (Australia, Canada, Ireland, New Zealand,
            South Africa, UK) language support will be available this December.
          </li>
          <li className={styles.listItem}>
            2. Available in two models: AirPods&nbsp;4 and AirPods&nbsp;4 with
            Active Noise Cancellation.
          </li>
          <li className={styles.listItem}>
            A subscription is required for Apple&nbsp;TV+.
          </li>
          <li className={styles.listItem}>
            Features are subject to change. Some features, applications, and
            services may not be available in all regions or all&nbsp;languages.
          </li>
        </ul>
      </div>

      <nav className={styles.sectionTwo}>
        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Shop and Learn
                <img
                  src={isShopListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleShopListVisibility}
                />
              </li>
            </div>
            {isShopListVisible && (
              <>
                <li className={styles.menuItem}>Store</li>
                <li className={styles.menuItem}>Mac</li>
                <li className={styles.menuItem}>iPad</li>
                <li className={styles.menuItem}>iPhone</li>
                <li className={styles.menuItem}>Watch</li>
                <li className={styles.menuItem}>AirPods</li>
                <li className={styles.menuItem}>TV & Home</li>
                <li className={styles.menuItem}>AirTag</li>
                <li className={styles.menuItem}>Accessories</li>
                <li className={styles.menuItem}>Gift Cards</li>
              </>
            )}
          </ul>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Apple Wallet
                <img
                  src={isAppleWalletVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleAppleWalletVisibility}
                />
              </li>
            </div>
            {isAppleWalletVisible && (
              <>
                <li className={styles.menuItem}>Wallet</li>
              </>
            )}
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Account
                <img
                  src={isAccountListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleAccountListVisibility}
                />
              </li>
            </div>
            {isAccountListVisible && (
              <>
                <li className={styles.menuItem}>Manage Your Apple Account</li>
                <li className={styles.menuItem}>Apple Store Account</li>
                <li className={styles.menuItem}>iCloud.com</li>
              </>
            )}
          </ul>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Entertainment
                <img
                  src={isEntertainmentListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleEntertainmentListVisibility}
                />
              </li>
            </div>
            {isEntertainmentListVisible && (
              <>
                <li className={styles.menuItem}>Apple One</li>
                <li className={styles.menuItem}>Apple TV+</li>
                <li className={styles.menuItem}>Apple Music</li>
                <li className={styles.menuItem}>Apple Arcade</li>
                <li className={styles.menuItem}>Apple Podcasts</li>
                <li className={styles.menuItem}>Apple Books</li>
                <li className={styles.menuItem}>App Store</li>
              </>
            )}
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Apple Store
                <img
                  src={isStoreListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleStoreListVisibility}
                />
              </li>
            </div>
            {isStoreListVisible && (
              <>
                <li className={styles.menuItem}>Find a Store</li>
                <li className={styles.menuItem}>Genius Bar</li>
                <li className={styles.menuItem}>Today at Apple</li>
                <li className={styles.menuItem}>Group Reservations</li>
                <li className={styles.menuItem}>Apple Camp</li>
                <li className={styles.menuItem}>Apple Trade In</li>
                <li className={styles.menuItem}>Ways to Buy</li>
                <li className={styles.menuItem}>Recycling Programme</li>
                <li className={styles.menuItem}>Order Status</li>
                <li className={styles.menuItem}>Shopping Help</li>
              </>
            )}
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Education
                <img
                  src={isEducationListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleEducationListVisibility}
                />
              </li>
            </div>
            {isEducationListVisible && (
              <>
                <li className={styles.menuItem}>Apple Education Store</li>
                <li className={styles.menuItem}>Teacher Resources</li>
                <li className={styles.menuItem}>Apple in the Classroom</li>
              </>
            )}
          </ul>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Healthcare
                <img
                  src={isHealthcareListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleHealthcareListVisibility}
                />
              </li>
            </div>
            {isHealthcareListVisible && (
              <>
                <li className={styles.menuItem}>Apple for Healthcare</li>
                <li className={styles.menuItem}>Health Records</li>
                <li className={styles.menuItem}>Health Studies</li>
              </>
            )}
          </ul>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                For Business
                <img
                  src={isBusinessListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleBusinessListVisibility}
                />
              </li>
            </div>
            {isBusinessListVisible && (
              <>
                <li className={styles.menuItem}>Apple for Small Business</li>
                <li className={styles.menuItem}>Apple for Education</li>
                <li className={styles.menuItem}>Apple for Healthcare</li>
                <li className={styles.menuItem}>Apple for Government</li>
                <li className={styles.menuItem}>Apple Finance</li>
              </>
            )}
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                Apple Values
                <img
                  src={isAppleValuesListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleAppleValuesListVisibility}
                />
              </li>
            </div>
            {isAppleValuesListVisible && (
              <>
                <li className={styles.menuItem}>Privacy</li>
                <li className={styles.menuItem}>Security</li>
                <li className={styles.menuItem}>Environment</li>
                <li className={styles.menuItem}>Inclusion & Diversity</li>
              </>
            )}
          </ul>
          <ul className={styles.menuList}>
            <div>
              <li className={styles.menuItemHeading}>
                About Apple
                <img
                  src={isAboutAppleListVisible ? ChevronUp : ChevronDown}
                  alt="chevron"
                  width={15}
                  className={styles.chevronIcon}
                  onClick={toggleAboutAppleListVisibility}
                />
              </li>
            </div>
            {isAboutAppleListVisible && (
              <>
                <li className={styles.menuItem}>Careers</li>
                <li className={styles.menuItem}>Newsroom</li>
                <li className={styles.menuItem}>Investors</li>
                <li className={styles.menuItem}>Ethics & Compliance</li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <div className={styles.sectionThree}>
        <span className={styles.footerInfoText}>
          More ways to shop: <a>Find an Apple Store</a> or <a>other retailer</a>{" "}
          near you. Or call 000800 040 1966.
        </span>
      </div>

      <div className={styles.sectionFour}>
        <div className={styles.leftContent}>
          <span className={styles.copyrightText}>
            Copyright © 2024 Apple Inc. All rights reserved.
          </span>
          <div className={styles.bottomLinks}>
            <span className={styles.bottomMenuItem}>Privacy policy</span>
            <span className={styles.bottomMenuItem}>|</span>
            <span className={styles.bottomMenuItem}>Terms of Use</span>
            <span className={styles.bottomMenuItem}>|</span>
            <span className={styles.bottomMenuItem}>Sales Policy</span>
            <span className={styles.bottomMenuItem}>|</span>
            <span className={styles.bottomMenuItem}>Legal</span>
            <span className={styles.bottomMenuItem}>|</span>
            <span className={styles.bottomMenuItem}>Site Map</span>
          </div>
        </div>
        <div className={styles.rightContent}>
          <span className={styles.footerInfoText}>India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
