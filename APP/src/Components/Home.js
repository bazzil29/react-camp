import React from 'react';
import '../StyleSheets/App.css';
import ListItem from "./ListItem";
import Header from "./Header";
import {createTodo, deleteTodo, doneTodo, fetchTodos} from "../Services/APIServices";
import Redirect from "react-router-dom/es/Redirect";
import {getTokenFromStorage} from "../Services/LocalStorageServices";




class Home extends  React.Component{

    constructor(props){

        super(props);

        this.state = {

            datas: [],
        }
    }


    componentDidMount(){
        this.saveTodo();
    }


    saveTodo = () =>{
        fetchTodos()
            .then(object =>{

            if(object.success){
                this.setState({
                    datas: object.data,
                })
            }
        });
    };



    handleAddTodo = () => {

        const input = document.getElementById("input").value;
        document.getElementById('input').value = '';

        createTodo(input)
            .then(object => {
                this.saveTodo()
            });

    };



    handleDeleteTodo = (e)=> {

        deleteTodo(e)
            .then(object=>{
                this.saveTodo();
            });
    };


    handleDoneTodo = (e) =>{

        doneTodo(e)
            .then(object=>{
                this.saveTodo();
            });

    };



    render(){



        let  isLogin;

        isLogin = getTokenFromStorage() !== '';


        if(isLogin){

            return(
                <div>

                    <Header clickAdd={this.handleAddTodo}/>
                    <ul className={"list"}>
                        <ListItem todos={this.state.datas} deleteTodo={this.handleDeleteTodo} doneTodo={this.handleDoneTodo}/>
                    </ul>

                </div>
            );

        }
        else{

            return(
                <Redirect to={'/login'}/>
            )
        }




    }
}



export  default  Home;
