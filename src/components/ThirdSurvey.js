import React, { useState } from "react";
import styled from "styled-components";

// const StyledLabel = styled.label`
//   font-size: 3em;
//   border: 1px solid black;
// `;

const ThirdSurvey = (props) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const giftList = [];
    giftList.push(first);
    giftList.push(second);
    giftList.push(third);
    props.setGiftList(giftList);
    // props.history.push("/main");
  };

  const handleFirstChange = (e) => {
    setFirst(e.target.value);
  };

  const handleSecondChange = (e) => {
    setSecond(e.target.value);
  };

  const handleThirdChange = (e) => {
    setThird(e.target.value);
  };
  return (
    <div className="first-survey">
      <h2>받고싶은 선물을 입력해주세요</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            1순위 :
            <input type="text" onChange={handleFirstChange} />
          </label>
        </p>
        <p>
          <label>
            2순위 :
            <input type="text" onChange={handleSecondChange} />
          </label>
        </p>
        <p>
          <label>
            3순위 :
            <input type="text" onChange={handleThirdChange} />
          </label>
        </p>
        <input type="submit" value="다음" />
      </form>
    </div>
  );
};

export default ThirdSurvey;
