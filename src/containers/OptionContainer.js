import React from "react";
import styled from "styled-components";
// import HeaderContent from "../components/HeaderContent";
import IsMan from "../components/IsMan";
import Age from "../components/Age";

const StyledOptionContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  border: 1px solid blue;
  height: 60px;
`;

const OptionContainer = (props) => {
  return (
    <StyledOptionContainer>
      <IsMan />
      <Age />
    </StyledOptionContainer>
  );
};

export default OptionContainer;
