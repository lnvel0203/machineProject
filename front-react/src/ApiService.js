
//ApiService는 스프링부트 서버(보통 'http://localhost:8080/'으로 열린다) 와 연결해주는데 역할을한다.
//리엑트에서 무언가 요청을하면 스프링 부트에서 받아 oracle에서 데이터를 가져오거나 연결하는 목적을 가진다.
//리액트에서 이를 구현하기 위해 Axios를 사용한다 기존 HTML 이나 JSP에서 사용한 AJAX 역할을 한다고 생각
//npm install -f axios@^1.3.5
// http://localhost:8081/members
import axios from 'axios';  //npm install -f axios@^1.3.5
//스프링 부트의 포트번호와 같아야한다
const MEMBER_API_BASE_URL = 'http://localhost:80/members';
//const MEMBER_API_BASE_URL = 'http://localhost:8081/members';
class ApiService {

    //컨트롤러로 접근하겠다. -> 정보를 가지고 - 컨트롤러랑 똑같이 맞춰준다. - 컨트롤러에 메소드와.!

    //insert-   post == insert
    login(member) {
    return axios.post(MEMBER_API_BASE_URL+ "/login", member);
    }
    //받는다.
    // 컨트롤 axios = 스프링부트와 연결한다.
    //list
    fetchMembers(){
        return axios.get(MEMBER_API_BASE_URL);
    }

    //insert-   post == insert
    signOn(member) {
        return axios.post(MEMBER_API_BASE_URL+ "/join", member);
    }
    
    //select(1건) -- 호출할 아이디를 넘긴다.
    fetchMemberByID(memberID){
        return axios.get(MEMBER_API_BASE_URL  + "/" + memberID);
    }
    
    //update 
    editMember(member){
                        //여기까지가 유알엘이다---------------| 여긴 매개변수이다
        return axios.put(MEMBER_API_BASE_URL + "/" +member.id, member);
    }
    //delete 
    deleteMember(memberID){
        //여기까지가 유알엘이다---------------| 여긴 매개변수이다
        return axios.delete(MEMBER_API_BASE_URL + "/" +memberID);
    }


}

export default new ApiService();