import React from "react";
import styled from "styled-components";

import girl from '../config/img/girl.png'

const MainStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .main-left,
  .main-right {
    width: 100%;
  }

  .main-left {
    background: #658d92;
  }
  .main-right {
    background: #cfcde5;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .main-text {
    font-size: 2.5rem;
    letter-spacing: 1.2px;
  }
  .main-subtext {
    margin-top: 2rem;
    letter-spacing: 1.1px;
  }
  .main-toptext,
  .main-bottomtext {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .main-toptext {
    flex-grow: 2.5;
  }
  .main-bottomtext {
    flex-grow: 0.5;
  }
  .main-bottomtext span {
    align-self: center;
    padding: 1rem;
    border-bottom: 1px solid black;
  }
  .girl {
      width: 100%;
      ${'' /* height: 100%; */}
      margin-top: 50px;
  }
`;

const Main = () => (
  <MainStyled>
    <div className="main-left">
        <img alt="girl" className="girl" src={girl} />
    </div>
    <div className="main-right">
      <div className="main-toptext">
        <div className="main-text">Discover the</div>
        <div className="main-text">new Ace collection</div>
        <div className="main-subtext">A tribute to the classics</div>
      </div>
      <div className="main-bottomtext">
        <span>Shop the Ace collection</span>
      </div>
    </div>
  </MainStyled>
);

export default Main;
