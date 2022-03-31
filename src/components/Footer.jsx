import React from "react";
import "./Footer.css";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer>
      <Logo />
      <section className="footer-grid">
        <section className="helpful-links-container">
          <h1>Helpful Links</h1>
          <a href="/">Home</a>
          <a href="/product">Products</a>
          <a href="contact">Contact</a>
          <a href="/signin">Sign-in</a>
        </section>

        <section className="contact-container">
          <h1>Contact Us </h1>
          <section className="store-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="contact-image"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p>000-000-0000</p>
          </section>
          <section className="store-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="contact-image"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <p>customer.support@hattricks.com</p>
          </section>
          <section className="store-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="contact-image"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>1800 Middlelake Rd, Los Angeles, California 95137</p>
          </section>
          <section className="store-container">
            <p>Monday - Friday 9am - 5pm PST (California Time)</p>
          </section>
          <section className="store-container"></section>
        </section>
        <section className="social-flex">
          <h1> Follow Us at: </h1>
          <a href="https://www.snapchat.com">
            <img
              className="socials"
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_snapchat-256.png"
              alt="Snapchat"
            />
          </a>
          <a href="https://facebook.com">
            <img
              className="socials"
              src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-256.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              className="socials"
              src="https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-256.png"
              alt="Instagram"
            />
          </a>
          <p> Copyright: HatTricks Jersey Selling Company</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
