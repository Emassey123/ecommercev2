import React from "react";
import Card from "../components/Card";
// import AddToCart from "../components/AddToCart";
// import BuyNowButton from "../components/BuyNowButton";
// import FavoriteButton from "../components/FavoriteButton";
import Data from "../Data.json";
const Products = () => {
  return (
    <section>
      <div className="products-grid">
        <Card />
      </div>
    </section>
  );
};

export default Products;

/* Mapping over the JSON file to grab the product info and switchinbg the variablke name to jersey
      {Data.map((jersey) => {
        return (
          // Giving the product a unique id
          <section key={jersey.id}>
            <Card Data={Data} />
            {/* calling everything that makes up the product card from the JSON key/value pair */

/* <section>{jersey.title}</section>
            <section>
              <img src={jersey.image} alt={jersey.title} />
            </section>
            <section>{jersey.description}</section>
            <section>{jersey.price}</section>
            <section> */

/* <BuyNowButton />
            <AddToCart />
            <FavoriteButton /> */

/* </section> */

/* // </section>
        );
      })} */
