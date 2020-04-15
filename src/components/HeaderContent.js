import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 2em;
  color: white;
`;

const HeaderContent = (props) => {
  return (
    <>
      <StyledH1>Gift Easy</StyledH1>
    </>
  );
};

export default HeaderContent;
