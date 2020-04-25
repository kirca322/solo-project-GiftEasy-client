import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/GiftSelectActions";

const StyledDiv = styled.div`
  width: 50%;
  height: 19.8%;
  border: 1px solid black;
  display: inline-block;
  font-size: 2em;
  padding-left: 20px;
  padding-top: 16px;
  cursor: pointer;
`;

let GiftListEntry = (props) => {
  const redirectToDetail = async (giftId) => {
    await props.onSelect(giftId);
    props.history.push(`/main/${giftId}`);
  };
  return (
    <StyledDiv
      onClick={() => redirectToDetail(props.giftListEntry.id)}
    >{`${props.index}. ${props.giftListEntry.name}`}</StyledDiv>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: async (res) => {
      await dispatch({ type: actions.GIFT_SELECT, payload: res });
    },
  };
};

GiftListEntry = connect(null, mapDispatchToProps)(GiftListEntry);

export default withRouter(GiftListEntry);
