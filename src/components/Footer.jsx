import React from "react";
import styled from "styled-components";

import { SOFT_GREY, GREY } from "../config/styles";

const StyledFooter = styled.div`
  background: ${SOFT_GREY};

  .container {
    margin: 0 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 40rem;

  }
  .signup-form {
    border-bottom: 1px solid black;
    width: 15rem;
    display: flex;
    justify-content: space-between;
  }

  .signup {
    display: flex;
    justify-content: space-between;
  }

  .signup-text {
      font-size: 1.2rem;
      font-weight: bold;
      width: 30rem;
      display: flex;
      align-items: flex-start;

  }

  .signup input {
    border: 0;
    outline: 0;
    background: transparent;
  }

  .signup input[type="submit"] {
    font-size: 1.5rem;
  }

  .signup input[type="submit"]:hover {
    cursor: pointer;
  }

  .contents {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }

  .contents-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .store-locator {
    border: 1px solid black;
    padding: 1rem 5rem;
    margin-top: 3rem;
  }
  .rights {
    display: flex;
    justify-content: space-between;
    color: ${GREY};
    font-size: 0.8rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="container">
      <div className="signup">
        <span className="signup-text">
          Sign up to receive news about Rosefield collections, events and sales
        </span>
        <div className="signup-form">
          <input type="text" placeholder="E-mail adress" />
          <input type="submit" value="→" />
        </div>
      </div>
      <div className="contents">
        <div className="contents-column">
          <p>Over ons</p>
          <p>Ons verhaal</p>
          <p>15 minutes with…</p>
          <div className="store-locator"> ▼ Store Locator </div>
        </div>
        <div className="contents-column">
          <p>Producten</p>
          <p>Horloges</p>
          <p>Sieraden</p>
          <p>Bandjes</p>
          <p>Gift boxes</p>
          <p>Personalized</p>
        </div>
        <div className="contents-column">
          <p>Service</p>
          <p>Size guide</p>
          <p>How to change your strap?</p>
          <p>How to adjust the size</p>
          <p>of your strap?</p>
          <p>Gift cards</p>
        </div>
        <div className="contents-column">
          <p>Help</p>
          <p>Returns</p>
          <p>Track your order</p>
          <p>FAQ</p>
          <p>Warranty</p>
          <p>Shipment</p>
        </div>
      </div>
      <div className="rights">
        <span>©2019 Rosefield</span>
        <span>Legal</span>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
