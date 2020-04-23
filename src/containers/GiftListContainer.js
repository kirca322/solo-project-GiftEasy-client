import React from "react";
import styled from "styled-components";
import GiftListEntry from "../components/GiftListEntry";

const StyledGiftListContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid blue;
  height: 45vh;
  padding: 5px;
`;
const fakeData = [
  "향수",
  "가방",
  "시계",
  "목걸이",
  "이어폰",
  "옷",
  "자동차",
  "신발",
  "케이크",
  "화장품",
];

const GiftListContainer = () => {
  return (
    <StyledGiftListContainer>
      {fakeData.map((x) => (
        <GiftListEntry giftName={`${fakeData.indexOf(x) + 1}. ${x}`} />
      ))}
    </StyledGiftListContainer>
  );
};

export default GiftListContainer;
