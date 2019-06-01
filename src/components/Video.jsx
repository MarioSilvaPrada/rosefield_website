import React from "react";
import styled from "styled-components";

import videoImage from "../config/img/videoImage.png";

const StyledVideo = styled.div`
  background-image: url(${videoImage});
  height: 60rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .read-more {
    ${'' /* align-self: flex-start;
    padding: 0 1.5rem 0.7rem 0;
    border-bottom: 1px solid black; */}
  }

  .person {
      display: flex;
      flex-direction: column;
  }
`;

const Video = () => (
  <StyledVideo>
    <div className="person">
      <span>15 Minutes with...</span>
      <span>Juliana Salazar</span>
    </div>
    <div className="read-more">Read more</div>
  </StyledVideo>
);

export default Video;
