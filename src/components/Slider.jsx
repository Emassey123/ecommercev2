import React from "react";
import Carousel from "react-elastic-carousel";
import "./Slider.css";
// import Testimonial from "./Testimonial";
import testimonialData from "../Testimonial.json";

const Slider = () => {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 600,
      itemsToShow: 2,
    },
    {
      width: 1000,
      itemsToShow: 3,
    },
    {
      width: 1500,
      itemsToShow: 4,
    },
  ];
  return (
    <section className="testimonial-wrapper">
      <h1 className="main-heading">Testimonials</h1>
      <Carousel breakPoints={breakPoints}>
        {testimonialData.map((customer) => (
          <section className="testimonial-container" key={customer.id}>
            <img src={customer.image} alt={customer.name} />
            <section className="testimonial-description-container">
              <h3 className="testimonial-title">{customer.name}</h3>
              <p className="testimonial-date">{customer.date}</p>
              <p className="testimonial">{customer.testimonial}</p>
            </section>
          </section>
        ))}
      </Carousel>
    </section>
    /* <Carousel>
        <Testimonial number="1" />
        <Testimonial number="2" />
        <Testimonial number="3" />
        <Testimonial number="4" />
        <Testimonial number="5" />
        <Testimonial number="6" />
        <Testimonial number="7" />
        <Testimonial number="8" />
      </Carousel> */
    /* <Testimonial customerTestimonial={testimonialData} /> */
    /* <Testimonial customerTestimonial={testimonialData} />
        <Testimonial customerTestimonial={testimonialData} />
        <Testimonial customerTestimonial={testimonialData} />
        <Testimonial customerTestimonial={testimonialData} />
        <Testimonial customerTestimonial={testimonialData} />
        <Testimonial customerTestimonial={testimonialData} />
        <Testimonial customerTestimonial={testimonialData} /> */
  );
};

export default Slider;
