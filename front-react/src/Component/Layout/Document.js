import React, { Component } from "react";
import Global from "../global/Global";
import DocumentComponent from "../Document/DocumentComponent";
import Messenger from "../Messenger/Messenger";
class Document extends Component {
  render() {
    return (
      <div>
        <Global />
        <DocumentComponent />
        <Messenger/>
      </div>
    );
  }
}
export default Document;
