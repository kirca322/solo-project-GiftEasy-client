import React from "react";
import TitleContainer from "../containers/TitleContainer";
import styled from "styled-components";
import IntroduceContainer from "../containers/IntroduceContainer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../store/actions/SigninActions";

const StyledTitleContainer = styled(TitleContainer)`
  text-align: center;
`;

let Home = (props) => {
  props.isLogin && props.history.push("/main/survey");
  if (props.isLogin) {
    if (props.isFirst) {
      props.history.push("/main/survey");
    } else {
      props.history.push("/main");
    }
  }
  return (
    <div className="Home">
      <StyledTitleContainer />
      <IntroduceContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
    isFirst: state.login.isFirst,
    error: state.login.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignin: async (res) => {
      await dispatch({ type: actions.SIGNIN, payload: res.tokenId });
    },
  };
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(Home);
