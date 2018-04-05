import React from "react";
import {Link} from "react-router-dom";


class NavBar extends  React.Component {

    render(){

        return (
            <li>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </li>
        )
    }

}

export default NavBar;