import React from "react";

//라우터 돔과 리액터 라우터 둘다 깔꺼다.
// npm install react-router@5 react-router-dom@5

import { BrowserRouter, Route } from "react-router-dom";
import LoginComponent from "./../Common/Login/LoginComponent";
import JoinComponent from "./../Common/Join/JoinComponent";

import App2 from "../../App2";

//여길 먼저 탄다

const TestRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={style}>
          <Route path="/join" exact={true} component={JoinComponent} />
          <Route path="/" exact={true} component={LoginComponent} />
          <Route path="/test" exact={true} component={App2} />
          <Route path="/employee" exact={true} component={App2} />
        </div>
      </BrowserRouter>
    </div>
  );
};
const style = {
  color: "blue",
  margin: "10",
};

export default TestRouter;
