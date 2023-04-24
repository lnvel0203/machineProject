import React, { Component, useState  } from "react";

import ApiService from "../../../ApiService";

import "./join.css";
import { Box } from "@mui/material";



class JoinComponent extends Component {
 

  constructor(props) {

    

    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
      hp:"",
      brith:"",
      email: "",
      address:"",
      
     
      
     
      message: null,
      
    };

    
  
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };




  signOn = (e) => {
  
    e.preventDefault();

    let member = {
      id: this.state.id,
      username: this.state.username,
      password: this.state.password,
      hp:this.state.hp,
      brith:this.state.brith,
      email: this.state.email,
      address:this.state.address,

    };


    ApiService.signOn(member)
      .then((res) => {
        this.setState({
          message: member.username + "님이 성공적으로 등록되었습니다.",
          
        });
        console.log(this.state.message);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("addMember() 에러!!", err);
      });
  };

  

  onChangeUserId = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

  

    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if ((e.target.value || (userIdRegex.test(e.target.value)))){
     
      
        
      
         
    //  this.state.idChk = true;
    }
  }


  // if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
      // else setUserIdError(true);
      // setUserId(e.target.value);
  render() {






      


    const style={
      marginTop:50,
      fontSize: 60

    }


    return (
      <div className="join">
      <h1 style={style}>회원 가입</h1>
      <form className="joinForm"> 
      <Box display={"flex"}>
      <Box>
      <div className="join_text_area">
          <input 
          type="text"
          id="id" 
          name="id"
          value={this.state.id} 
          className="join_text_input" 
          placeholder="아이디를 입력하세요" 
          onChange={this.onChangeUserId}

          />
        </div>
        <div>
        {this.idChk && <div class="invalid-input">Password must be at least 8 characters and contain at least one letter and one number. </div>}
         
        </div>


        <div className="join_text_area">
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            className="join_text_input"
            placeholder="이름을 입력하세요"
            onChange={this.onChange}
          />
       
        </div>
        <div>
       
        </div>

        <div className="join_text_area">
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            className="join_text_input"
            placeholder="비밀번호를 입력하세요"
            onChange={this.onChange}
          />


        </div>
        <div className="join_text_area">
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={this.state.confirmPassword}
            className="join_text_input"
            placeholder="비밀번호를 다시 입력하세요"
            onChange={this.onChange}
        
          />
   
        </div>

        <div className="join_text_area">
          <input
            type="text"
            id="hp"
            name="hp"
            value={this.state.hp}
            className="join_text_input"
            placeholder="전화번호를 입력하세요"
            onChange={this.onChange}
          />
        </div>

        <div className="join_text_area">
          <input
            type="date"
            id="brith"
            name="brith"
            value={this.state.brith}
            className="join_text_input"
            placeholder="생년월일을 입력하세요"
            onChange={this.onChange}
          />
        </div>


        <div className="join_text_area">
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            className="join_text_input"
            placeholder="이메일을 입력하세요"
            onChange={this.onChange}
          />
   
        </div>


        <div className="join_text_area">
          <input
            type="text"
            id="address"
            name="address"
            value={this.state.address}
            className="join_text_input"
            placeholder="주소를 입력하세요"
            onChange={this.onChange}
          />
        </div>
        <button onClick={this.signOn} className="join_btn">
          Sign On
        </button>
        </Box>

        </Box>


      </form>
 
  
    </div>
    );
  }
}

export default JoinComponent;
