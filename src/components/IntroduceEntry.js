import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  width: 320px;
`;

const StyledLine = styled.div`
  width: 120px;
  border: 3px solid blue;
  height: 6px;
  margin: auto;
  margin-bottom: 15px;
`;

const FontDiv = styled.div`
  font-size: 1.2em;
  width: 180px;
  margin: auto;
`;

const IntroduceEntry = (props) => {
  return (
    <StyledDiv>
      <h1>{props.description.head}</h1>
      <StyledLine />
      <FontDiv>{props.description.content}</FontDiv>
    </StyledDiv>
  );
};

export default IntroduceEntry;
