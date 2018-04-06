import React from "react";
import {Link} from "react-router-dom";


class NavBar extends  React.Component {

    render(){

        return (
            <li className={"navBar"}>
                <Link id={"home"} to='/'>Home</Link>
                <Link  id={"login"} to='/login'>Login</Link>
                <Link id={"register"} to='/register'>Register</Link>
            </li>
        )
    }

}

export default NavBar;