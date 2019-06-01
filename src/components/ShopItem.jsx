import React from "react";
import styled from "styled-components";

import { SOFT_BROWN } from "../config/styles";


const StyledShopItem = styled.div`
  width: 25rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 3rem;
  position:relative;

  .shop-more {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
  }

  .item-price {
    position: absolute;
    transform: rotate(-90deg);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    top: 13rem;
    left: -14rem;
    font-size: 0.9rem;
    color: ${SOFT_BROWN};
    width: 100%;
  }
`;

const ShopItem = props => (
  <StyledShopItem>
  <div className="item-price">
    <span>{props.description}</span> 
    <span>€ {props.price}</span>
  </div>
    <img alt="item" src={props.img} />
    <h2>Shop all {props.msg}</h2>
    <div className="shop-more">
        <p>All {props.msg}</p>
        <p> {props.msg === 'watches' ? 'All straps' : 'All personalized'}</p>
    </div>
  </StyledShopItem>
);

export default ShopItem;
