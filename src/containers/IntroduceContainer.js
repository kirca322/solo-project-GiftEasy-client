import React from "react";
import styled from "styled-components";
import IntroduceEntry from "../components/IntroduceEntry";

const StyledIntroduceContainer = styled.div`
  display: flex;
  width: 1000px;
  margin: auto;
`;

const descriptionList = [
  {
    head: "Frist Step",
    content: "애인(배우자)에게 받고 싶은 선물을 입력해주세요!",
  },
  {
    head: "Second Step",
    content: "받고싶은 선물 순위를 확인해보세요!",
  },
  {
    head: "Third Step",
    content: "후기도 확인하고, 추천 사이트로 바로 이동!",
  },
];

const IntroduceContainer = (props) => {
  return (
    <StyledIntroduceContainer>
      {descriptionList.map((x) => (
        <IntroduceEntry description={x} />
      ))}
    </StyledIntroduceContainer>
  );
};

export default IntroduceContainer;
