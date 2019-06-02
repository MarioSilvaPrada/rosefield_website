import React from "react";
import styled from "styled-components";

import hand from "../config/img/hand.png";

const StyledStory = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  width: 100%;

  .story-text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    margin-left: 12rem;
  }

  .story-text :nth-child(1) {
    font-size: 1rem;
  }
  .story-text-main {
    font-size: 3rem;
  }
  .story-text-description {
    line-height: 2rem; 
  }
  .story-text-discover {
    align-self: flex-start;
    padding: 0 1.5rem 0.7rem 0;
    border-bottom: 1px solid black;
  }

  .hidden {
    opacity: 0;
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInRight {
    animation: fadeInRight 2s;
  }

  @media screen and (max-width: 1200px) {
  justify-content: center;
  height: 50rem;
  ${'' /* margin-left: 0; */}

    .hand {
      display: none;
    }

    .story-text {
      margin-left: 0;
    }
  }
`;

const Story = () => (
  <StyledStory>
    <div className="story-text">
      <div>Our Story</div>
      <div className="story-text-main">
        Where function <br />
        meets fashion
      </div>
      <div className="story-text-description">
        In short, ROSEFIELD watches are a tribute to the great vibes, the <br />
        energy and the tolerance for free thinking that is typical for both
        <br /> Amsterdam and New York City.
      </div>
      <div className="story-text-discover">Discover our products</div>
    </div>
    <img alt="hand" className="hand hidden" src={hand} />
  </StyledStory>
);

export default Story;
