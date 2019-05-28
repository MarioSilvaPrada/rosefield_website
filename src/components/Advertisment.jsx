import React from "react";
import styled from "styled-components";

import { DARK_ORANGE } from "../config/styles";


const AdvertisementStyled = styled.div`
    height: 40px;
    width: 100%;
    background: ${DARK_ORANGE};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Advertisement = () => (
    <AdvertisementStyled>
        Gratis verzending op alle bestellingen boven de €90. Snelle bezorging + Eenvoudig retourneren
    </AdvertisementStyled>
);

export default Advertisement