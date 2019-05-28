import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  a {
    text-decoration: none;
    color: black;
  }

  .left-navbar,
  .right-navbar {
    display: flex;
    justify-content: space-between;
    width: 500px;
    font-size: 0.8rem;
  }

  
  .main-title {
      font-size: 1.5rem;
      letter-spacing: 10px;
      margin-right: -10px;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="left-navbar">
      <a href="">WATCHES</a>
      <a href="">STRAPS</a>
      <a href="">JEWELRY</a>
      <a href="">GIFTBOX</a>
      <a href="">SHOP</a>
      <a href="">THE LOOK</a>
    </div>
    <div className="title">
      <div className="main-title">ROSEFIELD</div>
      <div>AMS | NYC</div>
    </div>
    <div className="right-navbar">
      <a href="">JOURNAL</a>
      <a href="">SUPPORT</a>
      <a href="">C. Schulting</a>
      <a href="">GIFTBOX</a>
    </div>
  </StyledHeader>
);

export default Header;
