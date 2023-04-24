import React, { Component } from "react";
import Global from "../global/Global";
import MailComponent from "../Mail/MailComponent";   
import Messenger from "../Messenger/Messenger";

class Mail extends Component {
  render() {
    return (
      <div>
        <Global />
        <MailComponent/>
        <Messenger/>
    
      </div>
    );
  }
}
export default Mail;



