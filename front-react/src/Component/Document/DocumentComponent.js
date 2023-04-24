import React, { Component } from "react";
import "../../Css/DocumentComponent.css";
import Form from "./Form";
class DocumentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documentType: "",
      author: "",
      retentionPeriod: "",
      securityLevel: "",
      approvers: [
        { id: 1, department: "", name: "", position: "" },
        { id: 2, department: "", name: "", position: "" },
        { id: 3, department: "", name: "", position: "" },
      ],
    };
  }

  handleDocumentTypeChange = (event) => {
    this.setState({ documentType: event.target.value });
  };

  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value });
  };

  handleRetentionPeriodChange = (event) => {
    this.setState({ retentionPeriod: event.target.value });
  };

  handleSecurityLevelChange = (event) => {
    this.setState({ securityLevel: event.target.value });
  };

  handleAddButtonClick = () => {
    const approverListWindow = window.open(
      "/ApproverListComponent",
      "_blank",
      "width=500,height=400,top=100,left=100"
    );
    approverListWindow.onApproversSelected = (selectedApprovers) => {
      if (typeof this.handleApproversSelected === "function") {
        this.handleApproversSelected(selectedApprovers);
      }
    };
  };

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    // Add logic to upload file to server or do something with it
  };

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    // Add logic to upload file to server or do something with it
  };

  render() {
    const { documentType, author, retentionPeriod, securityLevel, approvers } =
      this.state;

    return (
      <div>
        <h1>기본 설정</h1>
        <table>
          <tbody>
            <tr>
              <td>문서 종류</td>
              <td>
                <select
                  value={documentType}
                  onChange={this.handleDocumentTypeChange}
                >
                  <option value="">-- 선택하세요 --</option>
                  <option value="보고서">보고서</option>
                  <option value="프레젠테이션">프레젠테이션</option>
                  <option value="계약서">계약서</option>
                  <option value="기타">기타</option>
                </select>
              </td>
              <td>작성자</td>
              <td>
                <input
                  type="text"
                  value={author}
                  onChange={this.handleAuthorChange}
                />
              </td>
            </tr>
            <tr>
              <td>보존 연한</td>
              <td>
                <select
                  value={retentionPeriod}
                  onChange={this.handleRetentionPeriodChange}
                >
                  <option value="">-- 선택하세요 --</option>
                  <option value="1년">1년</option>
                  <option value="2년">2년</option>
                  <option value="3년">3년</option>
                  <option value="5년">5년</option>
                  <option value="영구">영구</option>
                </select>
              </td>
              <td>보안등급</td>
              <td>
                <select
                  value={securityLevel}
                  onChange={this.handleSecurityLevelChange}
                >
                  <option value="">-- 선택하세요 --</option>
                  <option value="일반">일반</option>
                  <option value="기밀">기밀</option>
                  <option value="매우 기밀">매우 기밀</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>결제선</h1>
        <table className="tb-2">
          <tbody>
            <tr className="tr-1">
              <td rowSpan="3" className="col-1">
                신청
                <button
                  className="add-button"
                  onClick={this.handleAddButtonClick}
                >
                  +
                </button>
              </td>
              <td className="col-2"></td>
              <td className="col-3"></td>
              <td className="col-4"></td>
              <td className="col-5"></td>
            </tr>
            <tr className="tr-2">
              <td className="col-2"></td>
              <td className="col-3"></td>
              <td className="col-4"></td>
              <td className="col-5"></td>
            </tr>
            <tr className="tr-3">
              <td className="col-2"></td>
              <td className="col-3"></td>
              <td className="col-4"></td>
              <td className="col-5"></td>
            </tr>
            <tr className="tr-4">
              <td className="col-1">참조</td>
              <td colspan="4" className="col-2">
                <input type="file" onChange={this.handleFileUpload} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h1>상세 입력</h1>
        <Form />
      </div>
    );
  }
}

export default DocumentComponent;
