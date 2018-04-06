import React, { Component } from 'react';
import Redirect from "react-router-dom/es/Redirect";



class LoginPage extends React.Component {

    state = {
        auth : false
    };



    render(){

        return(<Redirect to='/' />);

    }
}

export  default  LoginPage;