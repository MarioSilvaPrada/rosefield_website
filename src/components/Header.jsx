import React from "react";
import styled from "styled-components";

import { ORANGE } from '../config/styles';
import { NETHERLAND } from '../config/images';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: fixed;
  top: 0;
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
    width: 500px;
    font-size: 0.8rem;
  }

  .main-title {
    font-size: 1.5rem;
    letter-spacing: 10px;
    margin-right: -10px;
  }

  .sec-title {
    font-size: 0.7rem;
  }

  .far {
      font-size: 1.7rem;
      color: #E4B78B
  }

  .flag-img {
      width: 25px;
      height: 25px;
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
    <div className="title">
      <div className="main-title">ROSEFIELD</div>
      <div className="sec-title">AMS | NYC</div>
    </div>
    <div className="right-navbar">
      <a href="#">JOURNAL</a>
      <a href="#">SUPPORT</a>
      <a href="#">C. Schulting</a>
      <i className="far fa-heart" />
      <i className="far fa-clipboard"></i>
      <img alt ="flag" className="flag-img" src={NETHERLAND} />
    </div>
  </StyledHeader>
);

export default Header;
