import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import GoogleSignin from "../components/GoogleSignin";

import * as actions from "../store/actions/SigninActions";

let SigninContainer = (props) => {
  useEffect(() => {
    props.isLogin && props.history.push("/main");
  }, [props.isLogin]);
  return (
    <div className="signin-container">
      <GoogleSignin onSignin={props.onSignin} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
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

SigninContainer = connect(mapStateToProps, mapDispatchToProps)(SigninContainer);

export default withRouter(SigninContainer);
