import React from "react";
import styled from "styled-components";

const StyledIsMan = styled.div`
  display: flex;
  width: 30%;
`;

const StyledButton = styled.button`
  height: 35px;
  width: 20%;
  margin-top: 11px;
  font-size: 1.2em;
`;

const StyledH1 = styled.h1`
  margin-left: 60px;
  margin-top: 8px;
  margin-right: 45px;
`;
const isMan = () => {
  return (
    <StyledIsMan>
      <StyledH1>성별</StyledH1>
      <StyledButton>남자</StyledButton>
      <StyledButton>여자</StyledButton>
    </StyledIsMan>
  );
};

export default isMan;
