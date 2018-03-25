import React, { Component } from 'react';
import './App.css';
import ListItem from "./ListItem";
import Header from "./Header";
import {saveToStorage} from "./Services/LocalStorageServices";
import {getTodosFromStorage} from "./Services/LocalStorageServices";



class App extends  React.Component{

    constructor(props){

        super(props);

        this.state = {
            data: getTodosFromStorage(),
        }
    }


    /*componentDidMount(){
        console.log("hehe");
        saveToStorage(this.state.data);
    }*/


    handleAddTodo = () => {

            const input = document.getElementById("input").value;
            document.getElementById('input').value = '';

            var isHas = false;

            for(var i = 0 ; i < this.state.data.length ; i++){
                if(input == this.state.data[i].text||input==''){
                    isHas = true;
                    break;
                }
            }

            if(isHas){
                alert("this target has already been existed , plz type an orther name! ");
            }
            else{
                const todo = {
                text: input,
                complete: false,
            };


            this.state.data.push(todo);

            this.setState({

                data: this.state.data,

            });
            saveToStorage(this.state.data);

        }




}



handleDeleteTodo = (e)=> {

    this.state.data.splice(e,1);
    this.setState (
        {
            data: this.state.data,
        }
    );
    saveToStorage(this.state.data);
}


handleDoneTodo = (e) =>{

        //console.log(e);

        for(var i = 0 ; i < this.state.data.length ; i++){

            if(e === this.state.data[i].text){
                if(this.state.data[i].complete == true)
                    this.state.data[i].complete = false;
                else
                    this.state.data[i].complete = true;
            }
        }

        this.setState({
            data: this.state.data,
        });
        saveToStorage(this.state.data);

}


    render(){

        return <div>

            <Header clickAdd={this.handleAddTodo}/>

            <ul className={"list"}>
                <ListItem todos={this.state.data} deleteTodo={this.handleDeleteTodo} doneTodo={this.handleDoneTodo}/>
            </ul>

        </div>;
    }
}
export  default  App;
