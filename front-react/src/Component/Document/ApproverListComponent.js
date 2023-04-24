import React, { Component } from 'react';
import '../../css/DocumentComponent.css';

class ApproverListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      approvers: [
        { id: 1, name: '김영희', department: '인사팀', position: '부장' },
        { id: 2, name: '이철수', department: '영업팀', position: '과장' },
        { id: 3, name: '박지영', department: '마케팅팀', position: '차장' },
        // Add more approvers as needed
      ],
      selectedApprovers: [],
    };
  }

  handleApproverClick = (approver) => {
    const { selectedApprovers } = this.state;
    const approverIndex = selectedApprovers.findIndex((selectedApprover) => selectedApprover.id === approver.id);
  
    let newSelectedApprovers;
    if (approverIndex !== -1) {
      // Remove approver from selectedApprovers if already selected
      newSelectedApprovers = selectedApprovers.filter((selectedApprover) => selectedApprover.id !== approver.id);
    } else {
      // Add approver to selectedApprovers if not already selected
      newSelectedApprovers = [...selectedApprovers, approver];
    }
  
    this.setState({ selectedApprovers: newSelectedApprovers });
  };

  handleConfirmClick = () => {
    const { selectedApprovers } = this.state;
  
    // Send selected approvers back to the parent component
    if (typeof this.props.onApproversSelected === 'function') {
      this.props.onApproversSelected(selectedApprovers);
    }
  
    // Close the current window
    window.close();
  };

  render() {
    const { approvers, selectedApprovers } = this.state;

    return (
      <div className="approver-selection">
        <h2>결재자 목록</h2>
        <ul>
          {approvers.map((approver) => (
            <li key={approver.id} className={selectedApprovers.includes(approver) ? 'selected' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedApprovers.includes(approver)}
                  onChange={() => this.handleApproverClick(approver)}
                />
                {approver.name} - {approver.department} - {approver.position}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={this.handleConfirmClick}>확인</button>
      </div>
    );
  }
}

export default ApproverListComponent;
