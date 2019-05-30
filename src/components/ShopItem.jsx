import React from "react";
import styled from "styled-components";

const StyledShopItem = styled.div`
  width: 25rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  .shop-more {
      display: flex;
  }
`;

const ShopItem = props => (
  <StyledShopItem>
    <img alt="item" src={props.img} />
    <h2>Shop all {props.msg}</h2>
    <div className="shop-more">
        <span>All {props.msg}</span>
        <span>All {props.msg}</span>
    </div>
  </StyledShopItem>
);

export default ShopItem;
