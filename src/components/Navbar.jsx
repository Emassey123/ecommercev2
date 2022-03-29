import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header>
      <Logo />
      <nav className="navbar">
        <section className="leftSide">
          <section className="links" id={showLinks ? "hidden" : ""}>
            {/* <Logo /> */}
            <a href="/">Home</a>
            <a href="/product">Products</a>
            <a href="/contact">Contact</a>
          </section>
          <button
            className="hamburger-button"
            onClick={() => setShowLinks(!showLinks)}
          >
            <i class="fa fa-bars"></i>
          </button>
        </section>
        <section className="rightSide">
          <input type="text" placeholder="search" />
        </section>
      </nav>

      <Outlet></Outlet>
    </header>
  );
};

export default Navbar;
{
  /* <nav className="navbar">
          <Logo />
          <section className="navbar-links-section">
            <a href="/" className="navbar-links">
              Home
            </a>
            <a className="navbar-links" href="/products">
              Products
            </a>
            <a className="navbar-links" href="/contact">
              Contact
            </a>
          </section>
          <section className="navbar-links-section">
            <a className="navbarExtra" href="/signin">
              SignIn
            </a>
            <a className="navbarExtra" href="myfavorites">
              Favorites
            </a>
            My cart page link
            <a className="cart-link" href="mycart">
              <svg
                className="navbar-cart-link"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 navbar-cart-link"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </section>
        </nav> */
}
