import React, {Component} from "react"
import WorkInfo from "../workInfo/WorkInfo";
import Global from "../global/Global";
class Main extends Component{
    render(){
        return(
            <div>
                <Global/>
                <WorkInfo />
            </div>

        )
    }


}
export default Main;