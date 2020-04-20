import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FirstSurvey from "../components/FirstSurvey";
import SecondSurvey from "../components/SecondSurvey";
import ThirdSurvey from "../components/ThirdSurvey";
import * as actions from "../store/actions/SurveySubmitActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const StyledSurveyContainer = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 500px;
  margin: auto;
  margin-top: 100px;
  padding: 50px;
`;

let SurveyContainer = (props) => {
  const [sex, setSex] = useState("");
  const [count, setCount] = useState(1);
  const [age, setAge] = useState(0);
  const [giftList, setGiftList] = useState([]);

  useEffect(() => {
    if (giftList.length) {
      async function fetchData() {
        const surveyData = {
          isMan: sex === "남자" ? true : false,
          age: Number(age),
          gift: giftList,
        };
        try {
          await props.onSubmit(surveyData);
          props.history.push("/main");
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }
  }, [giftList]);
  return (
    <StyledSurveyContainer>
      {count === 1 && <FirstSurvey setSex={setSex} setCount={setCount} />}
      {count === 2 && <SecondSurvey setAge={setAge} setCount={setCount} />}
      {count === 3 && <ThirdSurvey setGiftList={setGiftList} />}
    </StyledSurveyContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: async (surveyData) => {
      await dispatch({ type: actions.SUBMIT, payload: surveyData });
    },
  };
};

SurveyContainer = connect(null, mapDispatchToProps)(SurveyContainer);

export default withRouter(SurveyContainer);
