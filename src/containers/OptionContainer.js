import React from "react";
import styled from "styled-components";
import IsMan from "../components/IsMan";
import Age from "../components/Age";
import { connect } from "react-redux";
import * as actions from "../store/actions/OptionSelectActions";

const StyledOptionContainer = styled.div`
  text-align: center;
  width: 60%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  border: 1px solid blue;
  height: 60px;
`;

const OptionContainer = (props) => {
  return (
    <StyledOptionContainer>
      <IsMan isMan={props.isMan} />
      <Age age={props.age} />
    </StyledOptionContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isMan: state.select.isMan,
    age: state.select.age,
    error: state.login.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: async (res) => {
      await dispatch({ type: actions.SELECT, payload: res });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionContainer);
