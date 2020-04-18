import React, { useState } from "react";
import styled from "styled-components";

// const StyledLabel = styled.label`
//   font-size: 3em;
//   border: 1px solid black;
// `;

const FirstSurvey = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCount(2);
  };

  const handleSelectChange = (e) => {
    props.setSex(e.target.value);
  };
  return (
    <div className="first-survey">
      <h2>성별을 선택해주세요</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            <input
              type="radio"
              name="sex"
              value="남자"
              onChange={handleSelectChange}
            />
            남자
          </label>
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="sex"
              value="여자"
              onChange={handleSelectChange}
            />
            여자
          </label>
        </p>
        <input type="submit" value="다음" />
      </form>
    </div>
  );
};

export default FirstSurvey;
