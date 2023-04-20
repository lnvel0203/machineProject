import React from "react";

//라우터 돔과 리액터 라우터 둘다 깔꺼다.
// npm install react-router@5 react-router-dom@5

import { BrowserRouter, Route } from "react-router-dom";
import AddMemberComponent from "../Member/AddMemberComponent";
import EditMemberComponent from "../Member/EditMemberComponent";

import WorkInfo from "../workInfo/WorkInfo";

//여길 먼저 탄다

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={style}>
          <Route path="/test" exact={true} component={WorkInfo} />
          <Route
            path="/addmember"
            exact={true}
            component={AddMemberComponent}
          />
          <Route
            path="/editMember"
            exact={true}
            component={EditMemberComponent}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};
const style = {
  color: "blue",
  margin: "10",
};

export default AppRouter;
