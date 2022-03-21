import React from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
// import FavoriteButton from "./FavoriteButton";
import Data from "../Data.json";
import "./Card.css";

const Card = () => {
  return (
    <>
      <h1 className="main-heading">Products</h1>
      <section className="card-grid">
        {Data.map((jersey) => {
          return (
            <section className="card-item" key={jersey.id}>
              <section className="card-image-container">
                <img src={jersey.image} alt={jersey.title} />
              </section>
              <section className="card-info">
                <h1 className="card-title">{jersey.title}</h1>
                <p className="card-desc">{jersey.description}</p>
                <p className="card-price">{jersey.price}</p>
                <label htmlFor="size">Size:</label>
                <select name="size" id="size">
                  <option value="extra small">XS</option>
                  <option value="extra small">S</option>
                  <option value=" small">M</option>
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
