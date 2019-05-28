import React from "react";
import styled from "styled-components";

import hand from "../config/img/hand.png";

const StyledStory = styled.div`
  position: absolute;
  display: flex;
  background: white;
  width: 100%;
`;

const Story = () => (
  <StyledStory>
    <div>Text</div>
    <img alt="hand" className="hand" src={hand} />
  </StyledStory>
);

export default Story;
