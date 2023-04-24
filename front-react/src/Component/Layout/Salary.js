import React, {Component} from "react"
import Salary from "../Salary/Salary";
import Global from "../global/Global";
import Messenger from "../Messenger/Messenger";
class Main extends Component{
    render(){
        return(
            <div>
                <Global/>
                <Salary />
                <Messenger/>
            </div>

        )
    }


}
export default Main;