import React, { Component } from 'react';
import ApiService from '../../ApiService';

class AddMemberComponent extends Component{

    constructor(props){
        super(props);

        this.state ={
            password: '',
            username: '',
            age: '',
            email: '',
            address: '',
            salary:'',
            message: null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveMember = (e) => {
        e.preventDefault();

        let member = {
            password: this.state.password,
            username: this.state.username,
            age: this.state.age,
            email: this.state.email,
            address: this.state.address,
            salary: this.state.salary
        }
        ApiService.addMember(member)
            .then(res => {
                this.setState({
                    message: member.username + '님이 성공적으로 등록되었습니다.'
                })
                console.log(this.state.message);
                this.props.history.push('/member');
            })
            .catch(err => {
                console.log('addMember() 에러!!', err);
            });
    }

    render(){
        return(
            <div>
                <h2>Add Member</h2>
                <form>
                    <div>
                        <label>Password : </label>
                        <input type="password" name="password" value={this.state.password} placeholder="Input your Password" 
                            onChange={this.onChange}/>
                    </div>
                    
                    <div>
                        <label>username : </label>
                        <input type="text" name="username" value={this.state.username} placeholder="Input your username" 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>age : </label>
                        <input type="text" name="age" value={this.state.age} placeholder="Input your age" 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>email : </label>
                        <input type="text" name="email" value={this.state.email} placeholder="Input your email" 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>address : </label>
                        <input type="text" name="address" value={this.state.address} placeholder="Input your address" 
                            onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>salary : </label>
                        <input type="text" name="salary" value={this.state.salary} placeholder="Input your salary" 
                            onChange={this.onChange}/>
                    </div>

                    <button onClick={this.saveMember}>Save</button>
                </form>
            </div>
        )
    }
}

export default AddMemberComponent;