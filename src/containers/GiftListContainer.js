import React from "react";
import styled from "styled-components";
import GiftListEntry from "../components/GiftListEntry";
import { connect } from "react-redux";

const StyledGiftListContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid blue;
  height: 45vh;
  padding: 5px;
`;

const GiftListContainer = (props) => {
  return (
    <StyledGiftListContainer>
      {props.giftList.map((x) => (
        <GiftListEntry
          index={props.giftList.indexOf(x) + 1}
          giftListEntry={x}
        />
      ))}
    </StyledGiftListContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    giftList: state.optionSelect.giftList,
  };
};

export default connect(mapStateToProps, null)(GiftListContainer);
