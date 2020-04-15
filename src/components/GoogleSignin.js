import React from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import dotenv from "dotenv";
import { connect } from "react-redux";
import * as actions from "../store/actions/SigninActions";
dotenv.config();

const StyledGoogleLogin = styled(GoogleLogin)`
  font-size: 1.3em !important;
  margin-top: 20px;
`;

let GoogleSignin = (props) => {
  return (
    <StyledGoogleLogin
      className="google-login-button"
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Google로 로그인하기"
      onSuccess={props.onSignin}
      onFailure={(res) => console.log(res.error)}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignin);
