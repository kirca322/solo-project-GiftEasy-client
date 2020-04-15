import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Detail, Main, Survey } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";

const { Header, Content, Footer } = Layout;
const StyledHeader = styled(Header)`
  height: 60px;
`;

const StyledContent = styled(Content)``;

const StyledFooter = styled(Footer)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  height: 73px;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StyledHeader>
          <HeaderContainer />
        </StyledHeader>
        <StyledContent>
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/main/survey" render={() => <Survey />} />
            <Route path="/main/:giftId" render={() => <Detail />} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </StyledContent>
        <StyledFooter>
          <div>@2020 GiftEasy Ver 0.1</div>
          <div>
            this site has been made for recommending gift by a personal full
            stack web development project only.
          </div>
        </StyledFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
