import React from "react";
import styled from "styled-components";

import { ORANGE } from "../config/styles";
import item1 from '../config/img/item1.png';
import item2 from '../config/img/item2.png';

import ShopItem from './ShopItem';


const StyledShop = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50rem;
    background: ${ORANGE}
`

const Shop = () => (
    <StyledShop>
        <ShopItem img={item1} msg='watches'/>
        <ShopItem img={item2} msg='jewerly'/>
    </StyledShop>
);

export default Shop;