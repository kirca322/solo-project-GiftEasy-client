import React from "react";
import styled from "styled-components";

const StyledAge = styled.div`
  display: flex;
  width: 60%;
  margin-left: 50px;
`;

const StyledButton = styled.button`
  height: 35px;
  width: 20%;
  margin-top: 11px;
  font-size: 1.2em;
`;

const StyledH1 = styled.h1`
  margin-left: 30px;
  margin-top: 8px;
  width: 30%;
`;
const Age = () => {
  return (
    <StyledAge>
      <StyledH1>연령대</StyledH1>
      <StyledButton>10대</StyledButton>
      <StyledButton>20대</StyledButton>
      <StyledButton>30대</StyledButton>
      <StyledButton>40대</StyledButton>
      <StyledButton>50대~</StyledButton>
    </StyledAge>
  );
};

export default Age;
