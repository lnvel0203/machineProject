import React, { Component } from "react";
import ApiService from "../../../ApiService";
import "./join.css";
class JoinComponent extends Component {
  // this.state ={
  //     password: '',
  //     username: '',
  //     age: '',
  //     email: '',
  //     address: '',
  //     salary:'',
  //     message: null
  // }

  // password: this.state.password,
  // username: this.state.username,
  // age: this.state.age,
  // email: this.state.email,
  // address: this.state.address,
  // salary: this.state.salary

  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      email: "",
      message: null,
    };
  }

  onChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signOn = (e) => {
    this.props.history.push("/");
    e.preventDefault();

    let member = {
      password: this.state.password,
      userName: this.state.userName,
      email: this.state.email,
    };
    ApiService.signOn(member)
      .then((res) => {
        this.setState({
          message: member.userName + "님이 성공적으로 등록되었습니다.",
        });
        console.log(this.state.message);
       
      })
      .catch((err) => {
        console.log("addMember() 에러!!", err);
      });
  };

  render() {
    return (
      <div className="join">
        <h2>회원 가입</h2>
        <form className="joinForm"> 
          <div className="text_area">
            <input
              type="test"
              id="userName"
              name="userName"
              value={this.state.userName}
              className="text_input"
              placeholder="USERNAME 입력하세요"
              onChange={this.onChange}
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              className="text_input"
              placeholder="PASSWORD를 입력하세요"
              onChange={this.onChange}
            />
          </div>

          <div className="text_area">
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              className="text_input"
              placeholder="EMAIL를 입력하세요"
              onChange={this.onChange}
            />
          </div>

          <button onClick={this.signOn} className="btn">
            Sign On
          </button>
        </form>
      </div>
    );
  }
}

export default JoinComponent;
