import * as React from "react/cjs/react.development";
import Redirect from "react-router-dom/es/Redirect";
import {deleteTokenFromStorage} from "../Services/LocalStorageServices";

class LogoutPage extends React.Component{

    render(){

        deleteTokenFromStorage();

        return(
            <Redirect to={'./'}/>
        )
    }


}

export  default LogoutPage;