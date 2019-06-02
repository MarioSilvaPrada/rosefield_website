import React from "react";
import styled from "styled-components";

import { DARK_ORANGE } from "../config/styles";


const AdvertisementStyled = styled.div`
    height: 3rem;
    width: 100%;
    background: ${DARK_ORANGE};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;

    @media screen and (max-width: 1200px) {
        .extra{
            display:none;
        }
    }
`

const Advertisement = () => (
    <AdvertisementStyled>
        Gratis verzending op alle bestellingen boven de €90. <span className="extra">Snelle bezorging + Eenvoudig retourneren</span>
    </AdvertisementStyled>
);

export default Advertisement