import React from "react";

const Footer = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">Hat Tricks</div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a class="active" href="products.html">
                Products
              </a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="signin.html">Sign In</a>
            </li>
            <li>
              <a href="cart.html">View Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Footer;
