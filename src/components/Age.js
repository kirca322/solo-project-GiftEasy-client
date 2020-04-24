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
  background-color: ${(props) => (props.isClicked ? "gray" : "none")};
`;

const StyledH1 = styled.h1`
  margin-left: 30px;
  margin-top: 8px;
  width: 30%;
`;
const Age = (props) => {
  return (
    <StyledAge>
      <StyledH1>연령대</StyledH1>
      <StyledButton
        isClicked={props.age === "10" ? true : false}
        onClick={() => props.setAge("10")}
      >
        10대
      </StyledButton>
      <StyledButton
        isClicked={props.age === "20" ? true : false}
        onClick={() => props.setAge("20")}
      >
        20대
      </StyledButton>
      <StyledButton
        isClicked={props.age === "30" ? true : false}
        onClick={() => props.setAge("30")}
      >
        30대
      </StyledButton>
      <StyledButton
        isClicked={props.age === "40" ? true : false}
        onClick={() => props.setAge("40")}
      >
        40대
      </StyledButton>
      <StyledButton
        isClicked={props.age === "50" ? true : false}
        onClick={() => props.setAge("50")}
      >
        50대~
      </StyledButton>
    </StyledAge>
  );
};

export default Age;
