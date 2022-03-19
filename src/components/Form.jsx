import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <section>
      <section className="form-container">
        <form action="">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" placeholder="John" name="first_name" />
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" placeholder="Doe" name="last_name" />
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder="johndoe@gmail.com" name="email" />
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            placeholder="888-888-8888"
            pattern="[0-9] {3} - [0-9] {3} - [0-9] {4} "
            name="phone_number"
          />
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            name="comment"
            placeholder="Leave comment here..."
          />
        </form>
      </section>
    </section>
  );
};

export default Form;
