import React from "react";
import styled from "styled-components";
import HeaderContent from "../components/HeaderContent";

const StyledTitleContainer = styled.div`
  text-align: center;
`;

const HeaderContainer = (props) => {
  return (
    <StyledTitleContainer>
      <HeaderContent />
    </StyledTitleContainer>
  );
};

export default HeaderContainer;
