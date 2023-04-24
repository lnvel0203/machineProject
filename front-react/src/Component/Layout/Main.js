import React, {Component} from "react"
import WorkInfo from "../workInfo/WorkInfo";
import Global from "../global/Global";
import Messenger from "../Messenger/Messenger";
class Main extends Component{
    render(){
        return(
            <div>
                <Global/>
                <WorkInfo />
                <Messenger/>
            </div>

        )
    }


}
export default Main;