import React, {Component} from 'react';
import ApiService from '../../ApiService';

class EditMemberComponent extends Component{
  
    constructor(props){
        super(props);

        this.state ={
            id:'',
            password: '',
            username: '',
            age: '',
            email: '',
            address: '',
            salary:'',
            message: null
        }
    }

    // 수정하기전에 정보를 불러오는 것이다.
    componentDidMount(){
        this.loadMember();
    }

    //
    //getElementById???? 알아보기
    loadMember = () =>{
        ApiService.fetchMemberByID(window.localStorage.getItem("memberID"))
        .then(res => {  // 그 호출한 결과가 여기로 들어간다. - 콜백함수의 result이다.
            //3번
            let member = res.data;  //model.addatribute ->
            this.setState({ // - setState 즉 변수에 값을 JSON형식으로 보낸다.
                //4번   -- 여기에 값이 들어가고
                id:member.id,
                password: member.password,
                username: member.username,
                age: member.age,
                email: member.email,
                address: member.address,
                salary:member.salary,
                
            })
        })
        .catch(err=> {
            console.log('loadMember() Error!', err);
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    //API를 넘길때 필요한 json 형식이다.
    editMember = (e) => {
        e.preventDefault();

        let member = {
            id: this.state.id,
            password: this.state.password,
            username: this.state.username,
            age: this.state.age,
            email: this.state.email,
            address: this.state.address,
            salary: this.state.salary
        }
        ApiService.editMember(member)
            .then(res => {
                this.setState({
                    message: member.username + '님의 정보가 수정되었습니다.'
                })
                console.log(this.state.message);
                //돌아간다 리스트로
                this.props.history.push('/members');
            })
            .catch(err => {
                console.log('editMember() 에러!!', err);
            });
    }

    render(){
        return(
            <div>
                <h2>Edit Member</h2>
                <form>
                    <div>
                        <label>Id : </label>
                        <input type="text" name="id" defaultValue={this.state.id} readOnly />
                    </div>

                    <div>
                        <label>Password : </label>
                        <input type="password" name="password" value={this.state.password} placeholder="Edit your Password" 
                            onChange={this.onChange}/>
                    </div>
                    
                    <div>
                        <label>username : </label>
                        <input type="text" name="username" defaultValue={this.state.username} 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>age : </label>
                        <input type="text" name="age" value={this.state.age} placeholder="Edit your age" 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>email : </label>
                        <input type="text" name="email" value={this.state.email} placeholder="Edit your email" 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>address : </label>
                        <input type="text" name="address" value={this.state.address} placeholder="Edit your address" 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>salary : </label>
                        <input type="text" name="salary" value={this.state.salary} placeholder="Edit your salary" 
                            onChange={this.onChange}/>
                    </div>

                    <button onClick={this.editMember}>Edit</button>
                </form>
            </div>
        )
    }
}

export default EditMemberComponent;