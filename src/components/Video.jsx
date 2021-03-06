import React from "react";
import styled from "styled-components";

import videoImage from "../config/img/videoImage.png";

const StyledVideo = styled.div`
  background-image: url(${videoImage});
  width: 100%;
  background-size: cover;
  background-position: center;

  color: white;

  .container {
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50rem;
  }

  .read-more {
    flex: 1;
    align-self: flex-start;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid white;
    padding: 0 1.5rem 0.7rem 0;
    ${"" /* margin-left: 12rem; */}
    margin-bottom: 3rem;
  }

  .person {
    display: flex;
    flex-direction: column;
    color: white;
    align-self: flex-start;
    flex: 1;
    margin-top: 3rem;
  }

  .person-name {
    font-size: 3rem;
    margin-top: 2rem;
  }
  .preson-text {
    align-self: flex-start;
  }

  .center {
    flex: 2;
    algin-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fa-play {
    border: 1px solid white;
    width: 1rem;
    height: 1rem;
    padding: 1.5rem;
    border-radius: 100%;
  }

  @media screen and (max-width: 1200px) {
    .person {
      margin-left: 0;
    }
  }
`;

const Video = () => (
  <StyledVideo>
    <div className="container">
      <div className="person">
        <span className="preson-text">15 Minutes with...</span>
        <span className="person-name">Juliana Salazar</span>
      </div>
      <div className="center">
        {" "}
        <i class="fas fa-play" />
      </div>

      <div className="read-more">Read more</div>
    </div>
  </StyledVideo>
);

export default Video;
