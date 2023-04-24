import React, {Component} from 'react';
import { Button, Table, TableCell, TableHead, Typography, TableRow, TableBody} from '@mui/material';
import ApiService from '../../ApiService';
import NavBar from '../../Component/route/NavBar';
import {Create, Delete} from '@mui/icons-material'; // install -f @mui/icons-material@^5.11.16
class ListMemberComponent extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            //5번 - 여기에 출력할 데이터들이 쌓인다. 그다음 출력할 결과를 App.js로 보낸다.
            members :[],
            message : null
        }
    }

    //라이프 사이클 중- 컴포넌트가 생성된 후 사용자에게 보여주기까지의 전체 과정
    //1번 컨트롤러와 통신할 함수를 호출한다.
    //컴퍼넌트가 생성된 후 자동으로 렌더링을한다.
    componentDidMount(){
        this.reloadUserList();
    }

    //리스트의 데이터를 member변수를 이용한다.
    //에러시 에러 출력한다.
    // 스테이트로 this를 사용한다.




    //list
    reloadUserList = () =>{
        //2번 - 엑시오스를 호출 - 스프링 부트 서버와 통신하겠다. -컨트롤러 호출하고
        ApiService.fetchMembers()
        .then(res => {  // 그 호출한 결과가 여기로 들어간다. - 콜백함수의 result이다.
            //3번
            this.setState({ // - setState 즉 변수에 값을 JSON형식으로 보낸다.
                //4번   -- 여기에 값이 들어가고
                members : res.data
            })
        })
        .catch(err=> {
            console.log('reloadUserList() Error!', err);
        });
    }
    //insert
    addMember = () => {
        window.localStorage.removeItem("memberID");
        this.props.history.push('/addmember');

    }


    //update
    editMember = (ID) => {
       
        window.localStorage.setItem("memberID",ID);
        this.props.history.push('/editMember');
    }


  // delete
  deleteMember = (memberID) => {
    ApiService.deleteMember(memberID)
      .then((res) => {
        this.setState({
          message: "Member Deleted Successfully.",
        });
        this.setState({
          members: this.states.members.filter(
            (member) => member.id !== memberID
          ),
        });
      })
      .catch((err) => {
        console.log("deleteMember() Error!!");
      });
  };



    render(){
        return(

            <div>   

                <NavBar/>
                <Typography variant='h1' style={style}>회사 메인</Typography>
                <Button variant='contained' color='primary' onClick={this.addMember} >Add Member</Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>PASSWORD</TableCell>
                            <TableCell>USERNAME</TableCell>
                            <TableCell>AGE</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADDRESS</TableCell>
                            <TableCell>SALARY</TableCell>
                            <TableCell>EDIT</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                        {/* c태그 forEach문이다.*/}
                    <TableBody>
                        {this.state.members.map(member => 
                            <TableRow key={member.id}>
                                <TableCell component="th" scope='member'> {member.id} </TableCell>
                                <TableCell> {member.password} </TableCell>
                                <TableCell> {member.username} </TableCell>
                                <TableCell> {member.age} </TableCell>
                                <TableCell> {member.email} </TableCell>
                                <TableCell> {member.address} </TableCell>
                                <TableCell> {member.salary} </TableCell>
                                <TableCell onClick={()=> this.editMember(member.id)}>
                                    <Create/>
                                </TableCell>
                                <TableCell onClick={()=> this.deleteMember(member.id)}>
                                     <Delete/>
                                </TableCell>

                            </TableRow>    
                        )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default ListMemberComponent;