import React from "react";
import { GoogleLogin } from "react-google-login";
// import styled from "styled-components";
import dotenv from "dotenv";
dotenv.config();

// const Container = styled.div`
//   display: flex;
//   flex-flow: cloumn wrap;
// `;

const GoogleSignin = (props) => {
  return (
    <div className="google-signin">
      {/* <Container> */}
      <GoogleLogin
        className="google-login-button"
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Google로 로그인하기"
        onSuccess={props.onSignin}
        onFailure={(res) => console.log(res.error)}
      />
      {/* </Container> */}
    </div>
  );
};

export default GoogleSignin;
