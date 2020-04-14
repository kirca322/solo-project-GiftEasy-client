import React from "react";
import styled from "styled-components";
import dotenv from "dotenv";
import SigninContainer from "../containers/SigninContainer";
dotenv.config();

const Container = styled.div`
  display: flex;
  flex-flow: cloumn wrap;
`;

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Gift Easy</h1>
      <SigninContainer />
      {/* <Container>
        <GoogleLogin
          className="google-login-button"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Google로 로그인하기"
          onSuccess={() => console.log("성공")}
          onFailure={() => console.log("실패")}
        />
      </Container> */}
    </div>
  );
};

export default Home;
