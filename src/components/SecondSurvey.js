import React, { useState } from "react";
import styled from "styled-components";

// const StyledLabel = styled.label`
//   font-size: 3em;
//   border: 1px solid black;
// `;

const SecondSurvey = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCount(3);
  };

  const handleSelectChange = (e) => {
    props.setAge(e.target.value);
  };
  return (
    <div className="first-survey">
      <h2>연령대를 선택해주세요</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            <input
              type="radio"
              name="age"
              value="10"
              onChange={handleSelectChange}
            />
            10대
          </label>
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="age"
              value="20"
              onChange={handleSelectChange}
            />
            20대
          </label>
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="age"
              value="30"
              onChange={handleSelectChange}
            />
            30대
          </label>
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="age"
              value="40"
              onChange={handleSelectChange}
            />
            40대
          </label>
        </p>
        <p>
          <label>
            <input
              type="radio"
              name="age"
              value="50"
              onChange={handleSelectChange}
            />
            50대~
          </label>
        </p>
        <input type="submit" value="다음" />
      </form>
    </div>
  );
};

export default SecondSurvey;
