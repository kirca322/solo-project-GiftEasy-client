import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50%;
  height: 19.8%;
  border: 1px solid black;
  display: inline-block;
  font-size: 2em;
  padding-left: 20px;
  padding-top: 16px;
`;

const GiftListEntry = (props) => {
  return <StyledDiv>{props.giftName}</StyledDiv>;
};

export default GiftListEntry;
