import React from 'react';
import '../StyleSheets/App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Home.js';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NavBar from "./NavBar";
import LogoutPage from "./LogoutPage";


class App extends  React.Component{


    render(){



        return(

            <div>
                <NavBar />
                <Switch>
                    <Route exact path={'/'} component= {()=> <Home />}/>
                    <Route exact path={'/login'} component= {()=><LoginPage />}/>
                    <Route exact path={'/register'} component= {() => <RegisterPage />}/>
                    <Route exact path={'/logout'} component= {() => <LogoutPage />}/>
                </Switch>
            </div>

        )

    }
}

export  default  App;
