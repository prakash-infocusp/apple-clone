import styles from "./Footer.module.css";

let Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionOne}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            *Instant cashback is available with the purchase of an{" "}
            <a className={styles.footerLinks}>eligible product</a> with
            qualifying American Express, Axis Bank and ICICI Bank cards only.
            Minimum transaction value of ₹10001.00 applies.{" "}
            <a className={styles.footerLinks}>Click here</a> to see instant
            cashback amounts and eligible devices. Instant cashback is available
            for up to two orders per rolling 90-day period with an eligible
            card. Card eligibility is subject to terms and conditions between
            you and your card issuer. Total transaction value is calculated
            after any trade-in credit or eligible discount is applied. Any
            subsequent order adjustment(s) or cancellation(s) may result in
            instant cashback being recalculated, and any refund may be adjusted
            to account for instant cashback clawback; this may result in no
            refund being made to you. Offer may be revised or withdrawn at any
            time without any prior notice.{" "}
            <a className={styles.footerLinks}>Additional terms apply</a>.
            Instant cashback is not available to Business customers and cannot
            be combined with Apple&nbsp;Store for Education or Corporate
            Employee Purchase Plan pricing. Multiple separate orders cannot be
            combined for instant cashback.
          </li>
          <li className={styles.listItem}>
            ‡No Cost EMI is available with the purchase of an{" "}
            <a className={styles.footerLinks}>eligible product</a> made using
            qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading
            card issuers. Eligible AirPods, HomePod and Beats products are
            excluded from No Cost EMI on 9- and 12-month tenures. Monthly
            pricing is rounded to the nearest rupee. Exact pricing will be
            provided by your card issuer, subject to your card issuer’s terms
            and conditions. Minimum order spend applies as per your card
            issuer’s threshold. No Cost EMI is not available to Business
            customers and cannot be combined with Apple&nbsp;Store for Education
            or Corporate Employee Purchase Plan pricing. Card eligibility is
            subject to terms and conditions between you and your card issuer.
            Offer may be revised or withdrawn at any time without any prior
            notice. <a className={styles.footerLinks}>Terms&nbsp;Apply</a>.
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
            Some features, and support for additional languages, like Chinese,
            English (India, Singapore), French, German, Italian, Japanese,
            Korean, Portuguese, Spanish, Vietnamese and others, will be coming
            over the course of the next year.
          </li>
          <li className={styles.listItem}>
            2. Available in two models: AirPods&nbsp;4 and AirPods&nbsp;4 with
            Active Noise Cancellation.{" "}
          </li>
          <li className={styles.listItem}>
            A subscription is required for Apple&nbsp;TV+.
          </li>
          <li className={styles.listItem}>
            Features are subject to change. Some features, applications and
            services may not be available in all regions or all&nbsp;languages.
          </li>
        </ul>
      </div>
      <nav className={styles.sectionTwo}>
        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>Shop and Learn</li>
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
          </ul>
          <ul className={styles.list}>
            <li className={styles.menuItemHeading}>Apple Wallet</li>
            <li className={styles.menuItem}>Wallet</li>
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>Account</li>
            <li className={styles.menuItem}>Manage Your Apple Account</li>
            <li className={styles.menuItem}>Apple Store Account</li>
            <li className={styles.menuItem}>iCloud.com</li>
          </ul>

          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>Entertainment</li>
            <li className={styles.menuItem}>Apple One</li>
            <li className={styles.menuItem}>Apple TV+</li>
            <li className={styles.menuItem}>Apple Music</li>
            <li className={styles.menuItem}>Apple Arcade</li>
            <li className={styles.menuItem}>Apple Podcasts</li>
            <li className={styles.menuItem}>Apple Books</li>
            <li className={styles.menuItem}>App Store</li>
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>Apple Store</li>
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
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>For Business</li>
            <li className={styles.menuItem}>Apple and Business</li>
            <li className={styles.menuItem}>Shop for Business</li>
          </ul>

          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>For Education</li>
            <li className={styles.menuItem}>Apple and Education</li>
            <li className={styles.menuItem}>Shop for Education</li>
            <li className={styles.menuItem}>Shop for University</li>
          </ul>

          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>For Healthcare</li>
            <li className={styles.menuItem}>Apple in Healthcare</li>
            <li className={styles.menuItem}>Mac in Healthcare</li>
            <li className={styles.menuItem}>Health on Apple Watch</li>
          </ul>
        </div>

        <div className={styles.footerNavList}>
          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>Apple Values</li>
            <li className={styles.menuItem}>Accessibility</li>
            <li className={styles.menuItem}>Education</li>
            <li className={styles.menuItem}>Environment</li>
            <li className={styles.menuItem}>Privacy</li>
            <li className={styles.menuItem}>Supply Chain</li>
          </ul>

          <ul className={styles.menuList}>
            <li className={styles.menuItemHeading}>About Apple</li>
            <li className={styles.menuItem}>Newsroom</li>
            <li className={styles.menuItem}>Apple Leadership</li>
            <li className={styles.menuItem}>Career Opportunities</li>
            <li className={styles.menuItem}>Investors</li>
            <li className={styles.menuItem}>Ethics & Compliance</li>
            <li className={styles.menuItem}>Events</li>
            <li className={styles.menuItem}>Contact Apple</li>
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
