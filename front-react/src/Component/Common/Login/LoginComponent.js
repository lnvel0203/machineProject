import React, { Component } from "react";
import ApiService from "../../../ApiService";
import "./login.css";
import { Box, Grid } from "@mui/material";
import { Button } from "bootstrap";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      message: null,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    this.props.history.push("/main");

    e.preventDefault();
   
    let member = {
      userName: this.state.userName,
      password: this.state.password,
    };
    ApiService.login(member)
      .then((res) => {
        this.setState({
          message: member.id + "님이 성공적으로 등록되었습니다.",
        });
        console.log(this.state.message);
     
      })
      .catch((err) => {
      
        console.log("login() 에러!!", err);
     
      });
  };

  //insert
  signOn = () => {
    window.localStorage.removeItem("memberID");
    this.props.history.push("/join");
  };

  render() {
    return (
      <div className="Login">
        <h4><img src="img/logo.png" alt="logo"/></h4>
        <form className="loginForm">
          <div className="text_area">
            <input
              type="text"
              id="userName"
              name="userName"
              value={this.state.userName}
              className="text_input"
              onChange={this.onChange}
              placeholder='아이디를 입력하세요'
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              className="text_input"
              onChange={this.onChange}
              placeholder='비밀번호를 입력하세요'
            />
          </div>

          <button onClick={this.login} className="btn">
            로그인
          </button>
          <button onClick={this.signOn} className="btn">
            회원가입
          </button>

          <div> 
          <Box className="loginBox">
          공지사항
            <Box className="loginBoard" border="1px solid #f2f2f2" justifyContent="center" height="100px">
                {/* 공지사항에 대한 데이터를 출력 */}
                <h6>*[공지] 5/17(수) 프로젝트 전부 끝내야함.</h6>
                <h6>*[공지] 4/26(수) 프로젝트 화면 50퍼 끝내기.</h6>
    
            </Box>
          </Box>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
