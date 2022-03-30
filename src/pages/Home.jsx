import React from "react";
import Slider from "../components/Slider";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <section>
      <Hero />
      {/* <h1 className="main-heading">About Us</h1>
      <section className="about-us">
        <section className="about-us-image">
          <img src="../images/aboutUs.jpg" alt="" />
        </section>
        <article>
          <p>
            Here at Hat Tricks we strive to make sure all our customers are
            happy not only with our products but our service!
          </p>
          <h1 className="main-heading">Our Motto</h1>
          <p>One Jersey</p>
          <p>One Fan</p>
          <p>One Heart</p>
        </article>
      </section> */}
      <Slider />
    </section>
  );
};

export default Home;
