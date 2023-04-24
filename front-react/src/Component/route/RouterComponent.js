import React from "react";

//라우터 돔과 리액터 라우터 둘다 깔꺼다.
// npm install react-router@5 react-router-dom@5

import { BrowserRouter, Route } from "react-router-dom";
import LoginComponent from "../Common/Login/LoginComponent";
import JoinComponent from "../Common/Join/JoinComponent";
import Main from "../Layout/Main";
import Document from "../Layout/Document";
import Salary from "../Layout/Salary";
import Calender from "../Layout/Calender";
import Mail from "../Layout/Mail";
import Content from "../Messenger/Content";
// 여기 부터 붙이면 됨 규격 꼭 지킬것.
// 예시 import ~ from "../Layout/~";


const AppRouter = () => {
  return (

    <div>

      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={LoginComponent} />
          <Route path="/join" exact={true} component={JoinComponent} />
          <Route path="/main" exact={true} component={Main} />
          <Route path="/document" exact={true} component={Document} />
          <Route path="/salary" exact={true} component={Salary} />
          <Route path="/calender" exact={true} component={Calender} />
          <Route path="/mail" exact={true} component={Mail} />
          {/* 여기부터 붙이면 됨 규격 꼭 지킬것 */}
          {/* 예시  <Route path="/~" exact={true} component={~} />*/}
          <Route path="/message" exact={true} component={Content} />


        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
