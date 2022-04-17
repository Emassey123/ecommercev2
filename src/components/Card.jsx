import React, { useState, useEffect } from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
// import FavoriteButton from "./FavoriteButton";
import "./Card.css";
import Axios from "axios";

const Card = () => {
  // Setting products initial state to an empty array
  const [products, setProducts] = useState([]);
  // const [pricing, setPricing] = useState([]);
  //Setting state for all the filters
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [league, setLeague] = useState("");
  //callback function that grabs the user selected value from the dropdown filter and runs it in the getFilteredData function
  const setSelectedColor = (e) => {
    setColor(e.target.value);
    // console.log(color);
    // getFilteredData();
  };
  const setSelectedPrice = (e) => {
    setPrice(e.target.value);
    // getFilteredData();
  };
  const setSelectedLeague = (e) => {
    setLeague(e.target.value);
    // getFilteredData();
  };
  //Using useEffect to grab the all products from the database to be displayed once
  useEffect(() => {
    console.log(color);
    console.log(price);
    console.log(league);
    // GET request using axios inside useEffect React hook
    Axios.get(`/api/product?color=${color}&price=${price}&league=${league}`)
      //
      .then((response) => {
        // setSelectedColor("all");
        console.log(response.data);
        setProducts(response.data || []);
      })
      .catch((err) => {
        throw err;
      });
  }, [color, price, league]);

  return (
    <>
      <h1 className="main-heading">Products</h1>
      <section className="filters">
        <h2>Filter By:</h2>
        <label htmlFor="colorFilter">Color:</label>
        {/* setting the onChange function to run a callback function */}
        <select onChange={setSelectedColor} name="colorFilter" id="colorFilter">
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
        </select>
        <label htmlFor="priceSort">Price:</label>
        <select onChange={setSelectedPrice} name="priceSort" id="priceSort">
          <option value="low">Low to high</option>
          <option value="high">High to low</option>
        </select>
        <label htmlFor="leagueFilter">League:</label>
        <select
          onChange={setSelectedLeague}
          name="leagueFilter"
          id="leagureFilter"
        >
          <option value="">All</option>
          <option value="bundesliga">Bundesliga</option>
          <option value="la liga">La Liga</option>
          <option value="premier league">Premier League</option>
        </select>
      </section>
      <section className="card-grid">
        {products.map((jersey) => {
          return (
            <section className="card-item" key={jersey.product_id}>
              <section className="card-image-container">
                <img src={jersey.product_image} alt={jersey.product_name} />
              </section>
              <section className="card-info">
                <h1 className="card-title">{jersey.product_name}</h1>
                <p className="card-desc">{jersey.product_description}</p>
                <p className="card-price">{jersey.product_price}</p>
                <label htmlFor="size">Size:</label>
                <select name="size" id="size">
                  <option value="extra small">XS</option>
                  <option value=" small">S</option>
                  <option value=" medium">M</option>
                  <option value="large">L</option>
                  <option value="extra large">XL</option>
                </select>
              </section>
              <section className="card-buttons">
                <BuyNowButton />
                <AddToCartButton />
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Card;
