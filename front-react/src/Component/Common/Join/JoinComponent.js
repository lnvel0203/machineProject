import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { Box } from "@mui/material";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import ApiService from "../../../ApiService";


import "./join.css";
function JoinComponent() {

    const [id, setUserId] = useState("");
    const [pwd, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [hp, setHp] = useState("");
    const [birth, setBirth] = useState("");
    const [address, setAddress] = useState("");
    


    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
        else setUserIdError(true);
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (pwd === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };
    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };




    const onChangeDate = (e) => {
      
      setBirth(e.target.value);
     
    };
  
    const onChangeHp = (e) => {
      
      setHp(e.target.value);
   
    };
    const onChangeAddress = (e) => {
      
      setAddress(e.target.value);
 
};

    const validation = () => {
        if(!id) setUserIdError(true);
        if(!pwd) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!name) setUserNameError(true);
        if(!email) setEmailError(true);

        if(id && pwd && confirmPassword && name && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
      
   // if(validation()) return;
     
        e.preventDefault();
    
        let member = {
          id: id,
          pwd: pwd,
          name: name,
          hp:hp,
          birth:birth,
          email:email,
          address:address,
    
        };
    

        ApiService.signOn(member)
         .then((res) => {
          console.log(id+ "님이 성공적으로 등록되었습니다.");
        
          // {
          //   res.data === ""
          //   ?  window.location.href="/"
          //   : ( validation() === true
          //       ? window.location.href="/"
          //       : window.location.href="/join"
          //     )
          // }
        
        
          {
            res.data === "" ?(
              window.location.href="/join"
             ) :(
              window.location.href="/"
             )
     
           }
          
          //   this.setState({
          //     message: member.username ,
              
          //   });
          //   console.log(this.state.message);
          //   this.props.history.push("/");
          // })
          // .catch((err) => {
          //   console.log("addMember() 에러!!", err);
          });
      

    }


    const style={
      marginTop:50,
      fontSize: 60

    }
    return (
        <div className="join">
          <h1 style={style}>회원 가입</h1>
          <span className="text">Have an account? <Link to="/" className="link">Sign In</Link></span>
            
            {/* <Container className="panel"> */}
                <Form className="joinForm">
                <Box display={"flex"}>
            <Box>


                <div className="join_text_area">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} placeholder="UserID" className="join_text_input" 
                            type="input"
                            id="id" 
                            name="id"
                            value={id}
                            onChange={onChangeUserId} />
                        

                        </Col>
                    </Form.Group>
                    </div>

                    <div className="join_text_area">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password"
                            placeholder="Password"
                            id="pwd"
                            name="pwd"
                            value={pwd}
                            className="join_text_input"
                            onChange={onChangePassword} />
                       
                        </Col>
                    </Form.Group>
                    </div>

                    <div className="join_text_area">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="join_text_input"
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword} />
                           
                        </Col>
                    </Form.Group>
                    </div>

                    <div className="join_text_area">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} placeholder="Username"
                            id="name"
                            name="name"
                            className="join_text_input"
                            value={name}
                            onChange={onChangeUserName} />


                           
                        </Col>
                    </Form.Group>
                    </div>

                    <div className="join_text_area">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={50} type="input"
                            placeholder="Email Address"
                            value={email}
                            id="email"
                            name="email"
                            className="join_text_input"
                            onChange={onChangeEmail} />
                          
                        </Col>
                    </Form.Group>
                    </div>

                    <div className="join_text_area">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={50} type="input"
                            placeholder="Birth"
                            value={birth}
                            id="birth"
                            name="birth"
                            className="join_text_input"
                            onChange={onChangeDate} 
                            />
                           {/* {emailError && <div class="invalid-input">Please enter valid email format.</div>} */}
                        </Col>
                    </Form.Group>
                    </div>



                    <div className="join_text_area">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={50} type="input"
                            placeholder="Hp"
                            value={hp}
                            id="hp"
                            name="hp"
                            className="join_text_input"
                            onChange={onChangeHp} 
                            />
                           {/* {emailError && <div class="invalid-input">Please enter valid email format.</div>} */}
                        </Col>
                    </Form.Group>
                    </div>



                    <div className="join_text_area2">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={50} type="input"
                            placeholder="Address"
                            value={address}
                            id="address"
                            name="address"
                            className="join_text_input"
                            onChange={onChangeAddress} 
                            />
                           {/* {emailError && <div class="invalid-input">Please enter valid email format.</div>} */}
                        </Col>
                    </Form.Group>
                    </div>
                    <br />
                    <div>
                    <button onClick={onSubmit} className="join_btn">
                      Sign On
                    </button>
                        
                        {/* <Button variant="secondary" onClick={onSubmit}>
                            Sign Up
                        </Button> */}
                    </div>
                 <br />

                 </Box>
              <Box>
              <div className='join_Chk'>{userIdError && <div class="invalid-input">아이디는 5자이상 입력해야 합니다.</div>}</div> 

              <div className='join_Chk'>{passwordError && <div class="invalid-input">비밀번호는 8자리 이상 영문+숫자를 입력해야 합니다. </div>}</div>

              <div className='join_Chk'>{confirmPasswordError && <div class="invalid-input">동일한 비밀번호를 입력해야 합니다.</div>}</div>

              <div className='join_Chk'>{userNameError && <div class="invalid-input">반드시 입력해야 합니다.</div>}</div>

              <div className='join_Chk'>{emailError && <div class="invalid-input">이메일 형식을 맞춰서 입력해야 합니다.</div>}</div>

              </Box>

              </Box> 
           
                </Form>

                {/* </Container> */}
             
            
        </div>
    );
}

export default JoinComponent