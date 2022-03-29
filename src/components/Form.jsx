import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  // const [submitted, setSubmitted] = useState(false);

  // const [valid, setValid] = useState(false);

  // const [showError, setShowError] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setFormValues({ ...formValues, firstName: e.target.value });
  };
  const handleLastNameInputChange = (e) => {
    setFormValues({ ...formValues, lastName: e.target.value });
  };
  const handleEmailInputChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };
  const handlePhoneNumberInputChange = (e) => {
    setFormValues({ ...formValues, phoneNumber: e.target.value });
  };
  const handleMessageInputChange = (e) => {
    setFormValues({ ...formValues, message: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     formValues.firstName &&
  //     formValues.lastName &&
  //     formValues.email &&
  //     formValues.phoneNumber
  //   ) {
  //     setValid(true);
  //   }
  //   setSubmitted(true);
  // };

  return (
    <section className="form-background-color">
      <h1 className="main-heading footer-main-heading">Contact Us</h1>
      <section className="form-container">
        <form action="#">
          <section className="form-group">
            <label htmlFor="firstName">
              First Name:<span className="star">*</span>
            </label>
            <input
              onChange={handleFirstNameInputChange}
              value={formValues.firstName}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="John"
              required
            />
          </section>
          <section className="form-group">
            <label htmlFor="lastName">
              Last Name:<span className="star">*</span>
            </label>
            <input
              onChange={handleLastNameInputChange}
              value={formValues.lastName}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Doe"
              required
            />
          </section>
          <section className="form-group">
            <label htmlFor="email">
              Email:<span className="star">*</span>
            </label>
            <input
              onChange={handleEmailInputChange}
              value={formValues.email}
              type="email"
              name="email"
              className="form-control"
              placeholder="johndoe@gmail.com"
              required
            />
          </section>
          <section className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number:<span className="star">*</span>
            </label>
            <input
              onChange={handlePhoneNumberInputChange}
              value={formValues.phoneNumber}
              type="tel"
              name="phoneNumber"
              className="form-control"
              placeholder="888-888-8888"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </section>
          <section className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              onChange={handleMessageInputChange}
              value={formValues.message}
              className="form-control"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message goes here..."
            ></textarea>
          </section>
          <button className="submit-button">Submit</button>
        </form>
      </section>
      {/* </section> */}
    </section>
  );
};
{
  /* <section className="form-container">
        <section className="form-title">
          <h1>Contact Us</h1>
        </section>
        <form action="#">
          <section className="user-details">
            <section className="input-box">
              <label className="details" htmlFor="first_name">
                First Name:
              </label>
              <input type="text" placeholder="John" name="first_name" />
            </section>
            <section className="input-box">
              <label className="details" htmlFor="last_name">
                Last Name:
              </label>
              <input type="text" placeholder="Doe" name="last_name" />
            </section>
            <section className="input-box">
              <label className="details" htmlFor="email">
                Email:
              </label>
              <input type="text" placeholder="johndoe@gmail.com" name="email" />
            </section>
            <section className="input-box">
              <label className="details" htmlFor="phone_number">
                Phone Number:
              </label>
              <input
                type="tel"
                placeholder="888-888-8888"
                pattern="[0-9] {3} - [0-9] {3} - [0-9] {4} "
                name="phone_number"
              />
            </section>
            <section className="input-box">
              <label className="details" htmlFor="comment">
                Comment:
              </label>
              <input
                type="text"
                name="comment"
                placeholder="Leave comment here..."
              />
            </section>
          </section>
          <section className="submit-button">
            <input type="submit" value="submit" />
          </section>
        </form>
      </section> */
}
export default Form;
