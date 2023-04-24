import React, { Component } from "react";
import Global from "../global/Global";
import DocumentComponent from "../Document/DocumentComponent";
class Document extends Component {
  render() {
    return (
      <div>
        <Global />
        <DocumentComponent />
      </div>
    );
  }
}
export default Document;
