import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Detail, Main, Survey } from "./pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" render={() => <Home />} />
          <Route path="/main/survey" render={() => <Survey />} />
          <Route path="/main/:giftId" render={() => <Detail />} />
          <Route path="/main" render={() => <Main />} />
          <Route path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
