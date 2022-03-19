import React from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
// import FavoriteButton from "./FavoriteButton";
import Data from "../Data.json";
import "./Card.css";

const Card = () => {
  return (
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
            </section>
            <section className="card-buttons">
              <BuyNowButton />
              <AddToCartButton />
            </section>
          </section>
        );
      })}
    </section>
  );
};

export default Card;
