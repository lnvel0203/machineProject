import React, {Component} from "react"
import Salary from "../Salary/Salary";
import Global from "../global/Global";
class Main extends Component{
    render(){
        return(
            <div>
                <Global/>
                <Salary />
            </div>

        )
    }


}
export default Main;