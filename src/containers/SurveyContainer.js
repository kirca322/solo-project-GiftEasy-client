import React, { useState } from "react";
import styled from "styled-components";
import FirstSurvey from "../components/FirstSurvey";

const StyledSurveyContainer = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 500px;
  margin: auto;
  margin-top: 100px;
  padding: 50px;
`;

const SurveyContainer = (props) => {
  const [sex, setSex] = useState("");
  const [count, setCount] = useState(1);
  console.log(sex);
  console.log(count);
  return (
    <StyledSurveyContainer>
      <FirstSurvey setSex={setSex} setCount={setCount} />
    </StyledSurveyContainer>
  );
};

export default SurveyContainer;
