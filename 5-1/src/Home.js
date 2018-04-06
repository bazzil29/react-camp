import React, { Component } from 'react';
import './StyleSheets/App.css';
import ListItem from "./ListItem";
import Header from "./Header";
import {saveToStorage} from "./Services/LocalStorageServices";
import {getTodosFromStorage} from "./Services/LocalStorageServices";
import {createTodo, deleteTodo, doneTodo, fetchTodos} from "./Services/APIServices";



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
        fetchTodos().then(object => {
            if(object.success){
                this.setState({
                    datas: object.data,
                })
            }
        });
    }



    handleAddTodo = () => {

        const input = document.getElementById("input").value;
        document.getElementById('input').value = '';

        var isHas = false;

        for(var i = 0 ; i < this.state.datas.length ; i++){
            if(input == this.state.datas[i].text||input==''){
                isHas = true;
                break;
            }
        }

        if (!isHas) {
            const todo = {
                text: input,
                complete: false,
            };

            createTodo(input).then(object => {
                this.saveTodo()
            })


        }
        else {
            alert("this target has already been existed , plz type an orther name! ");
        }


    }



    handleDeleteTodo = (e)=> {



        deleteTodo(e)
            .then(object=>{
                this.saveTodo();
            });
    }


    handleDoneTodo = (e) =>{

        doneTodo(e)
            .then(object=>{
                this.saveTodo();
            });

    }




    render(){

        return <div>

            <Header clickAdd={this.handleAddTodo}/>

            <ul className={"list"}>
                <ListItem todos={this.state.datas} deleteTodo={this.handleDeleteTodo} doneTodo={this.handleDoneTodo}/>
            </ul>

        </div>;
    }
}



export  default  Home;
