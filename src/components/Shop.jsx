import React from "react";
import styled from "styled-components";

import { ORANGE } from "../config/styles";
import item1 from "../config/img/item1.png";
import item2 from "../config/img/item2.png";

import ShopItem from "./ShopItem";

const items = [
  {
    img: `${item1}`,
    msg: "watches",
    description: "The Boxy white sunray - gold",
    price: 129
  },
  {
    img: `${item2}`,
    msg: "jewerly",
    description: "Double trouble black stone earring",
    price: 25
  }
];

const StyledShop = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  background: ${ORANGE};
  position: static;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .hidden2 {
    opacity: 0;
  }

  .fadeInUp {
    animation: fadeInUp 1.5s;
  }
`;

const Shop = () => (
  <StyledShop>
    {items.map(item => {
      return (
        <div className="hidden2">
          <ShopItem
            img={item.img}
            msg={item.msg}
            description={item.description}
            price={item.price}
          />
        </div>
      );
    })}
  </StyledShop>
);

export default Shop;
