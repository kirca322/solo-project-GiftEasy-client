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
  background-color: ${(props) => (props.manClicked ? "gray" : "none")};
`;

const StyledH1 = styled.h1`
  margin-left: 60px;
  margin-top: 8px;
  margin-right: 45px;
`;
const isMan = (props) => {
  let manClicked;
  if (props.isMan === "man") {
    manClicked = true;
  } else {
    manClicked = false;
  }
  return (
    <StyledIsMan>
      <StyledH1>성별</StyledH1>
      <StyledButton
        manClicked={manClicked}
        onClick={() => props.setIsMan("man")}
      >
        남자
      </StyledButton>
      <StyledButton
        manClicked={!manClicked}
        onClick={() => props.setIsMan("woman")}
      >
        여자
      </StyledButton>
    </StyledIsMan>
  );
};

export default isMan;
