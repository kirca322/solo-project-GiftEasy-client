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
          giftName={`${props.giftList.indexOf(x) + 1}. ${x.name}`}
        />
      ))}
    </StyledGiftListContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    giftList: state.select.giftList,
  };
};

export default connect(mapStateToProps, null)(GiftListContainer);
