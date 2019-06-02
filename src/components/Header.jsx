import React from "react";
import styled from "styled-components";

import { ORANGE } from "../config/styles";
import { NETHERLAND } from "../config/images";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: absolute;
  top: 40px;
  width: 100%;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: ${ORANGE};
  }

  .left-navbar,
  .right-navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 500px;
    font-size: 0.8rem;
  }

  .left-navbar-reduce,
  .right-navbar-reduce {
    display: none;
  }

  .main-title {
    font-size: 1.5rem;
    letter-spacing: 10px;
    margin-right: -10px;
  }

  .sec-title {
    font-size: 0.7rem;
  }

  .right-navbar i {
    font-size: 1.7rem;
    color: ${ORANGE} ;
  }

  .flag-img {
    width: 25px;
    height: 25px;
  }

  @media screen and (max-width: 1200px) {
    position: static;

    .left-navbar-reduce,
    .right-navbar-reduce{
      display: flex;
      justify-content: space-evenly;
      width: 20rem;
      font-size: 1.5rem;
    }

    .left-navbar,
    .right-navbar {
      display: none;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="left-navbar">
      <a href="#">WATCHES</a>
      <a href="#">STRAPS</a>
      <a href="#">JEWELRY</a>
      <a href="#">GIFTBOX</a>
      <a href="#">SHOP</a>
      <a href="#">THE LOOK</a>
    </div>
    <div className="left-navbar-reduce">
      <i class="fas fa-bars" />
      <i class="fas fa-search" />
    </div>
    <div className="title">
      <div className="main-title">ROSEFIELD</div>
      <div className="sec-title">AMS | NYC</div>
    </div>
    <div className="right-navbar">
      <a href="#">JOURNAL</a>
      <a href="#">SUPPORT</a>
      <a href="#">C. Schulting</a>
      <i className="far fa-heart" />
      <i className="far fa-clipboard" />
      <img alt="flag" className="flag-img" src={NETHERLAND} />
    </div>
    <div className="right-navbar-reduce">
      <i class="far fa-user" />
      <i className="far fa-clipboard" />
    </div>

    
  </StyledHeader>
);

export default Header;
