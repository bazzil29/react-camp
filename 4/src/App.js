import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Home.js';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NavBar from "./NavBar";




class App extends  React.Component{


    render(){

        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path={'/'} component= {Home}/>
                    <Route exact path={'/login'} component= {LoginPage}/>
                    <Route exact path={'/resister'} component= {RegisterPage}/>
                </Switch>
            </div>


        )

    }
}
export  default  App;
