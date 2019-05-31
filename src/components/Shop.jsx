import React from "react";
import styled from "styled-components";

import { ORANGE } from "../config/styles";
import item1 from '../config/img/item1.png';
import item2 from '../config/img/item2.png';

import ShopItem from './ShopItem';

const items = [
    {
        img:`${item1}`,
        msg:'watches',
        description: 'The Boxy white sunray - gold',
        price: 129
    },
    {
        img:`${item2}`,
        msg:'jewerly',
        description: 'Double trouble black stone earring',
        price: 25
    }
]

const StyledShop = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    background: ${ORANGE}
`

const Shop = () => (
    <StyledShop>
        {items.map(item => {
            return <ShopItem img={item.img} msg={item.msg} description ={item.description} price={item.price}/>
        })}
    </StyledShop>
);

export default Shop;