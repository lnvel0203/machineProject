import React, { Component } from "react";
import Global from "../global/Global";
import CalenderTest from "../Calender/Calender";
import Messenger from "../Messenger/Messenger";
class Add extends Component {
  render() {
    return (
      <div>
        <Global />
        <CalenderTest />
        <Messenger/>
      </div>
    );
  }
}
export default Add;
