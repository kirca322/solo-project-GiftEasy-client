import React from "react";
import styled from "styled-components";
import GoogleSignin from "../components/GoogleSignin";
import giftImage from "../gift4.jpg";

const StyledTitleContainer = styled.div`
  display: flex;
  width: 800px;
  margin: auto;
`;

const StyledDiv = styled.div`
  padding: 20px;
  height: 250px;
  margin: auto;
`;

const FontDiv = styled.div`
  font-size: 1.2em;
`;

const TitleContainer = (props) => {
  // useEffect(() => {
  //   props.isLogin && props.history.push("/main");
  // }, [props.isLogin]);
  return (
    <>
      <StyledTitleContainer>
        <img alt="" src={giftImage} />
        <StyledDiv>
          <h1>기프티지(GiftEasy)</h1>
          <FontDiv>어떤 선물을 줘야하지? 고민된다면</FontDiv>
          <FontDiv>일단 들어오세요!</FontDiv>
          <GoogleSignin />
        </StyledDiv>
      </StyledTitleContainer>
    </>
  );
};

export default TitleContainer;

// const mapStateToProps = (state) => {
//   return {
//     isLogin: state.login.isLogin,
//     error: state.login.error,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSignin: async (res) => {
//       await dispatch({ type: actions.SIGNIN, payload: res.tokenId });
//     },
//   };
// };

// TitleContainer = connect(mapStateToProps, mapDispatchToProps)(TitleContainer);

// export default withRouter(TitleContainer);
