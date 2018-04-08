import React from 'react';
import {register} from "../Services/APIServices";
import Redirect from "react-router-dom/es/Redirect";
import '../StyleSheets/RegisterPage.css';

class RegisterPage extends React.Component {

    state = {
        isRegister: false,
    };

    registerIt = (e) => {

        e.preventDefault();
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const rePassword = document.getElementById('repassword').value;

        document.getElementById('password').value = '';
        document.getElementById('repassword').value = '';


        if (!(password === rePassword && (email !== '' && name !== '' && password !== '' && rePassword !== ''))) {
            window.alert("something wrong! type again?");
        }
        else {
            register({email, password, name})
                .then(response => {

                    console.log("akjsdhkad");

                    this.setState({
                        isRegister: true,
                    });
                });
        }

    };


    render() {


        const success = this.state.isRegister;

        if(success){
            return(<Redirect to={'/'}/>);
        }
        else {



            return(
                <div id="register-box">
                    <form className="registerForm">
                        <h1 id={"singuph1"}>Sign up</h1>

                        <input type="text" name="username" placeholder="Username" id={"name"} />
                        <input type="text" name="email" placeholder="E-mail" id={"email"}/>
                        <input type="password" name="password" placeholder="Password" id={"password"}/>
                        <input type="password" name="password2" placeholder="Retype password"  id={"repassword"}/>
                        <input type="submit" name="signup_submit" value="Sign me up" onClick={this.registerIt}/>
                    </form>
                </div>

            );
        }

    }


}




export default RegisterPage;