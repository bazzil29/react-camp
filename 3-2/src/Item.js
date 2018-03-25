import React ,{Component} from "react";
import './App.css';



class Item extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            data : this.props.inputItem,
        }

    }


    delete = (e) =>{
        this.props.deleteTodo(e.target.parentElement.id)
        // console.log(e.target.parentElement.id);
    }

    doneTodo = (e) =>{
        this.props.doneTodo(e.target.id);
    }

    render(){


        return   <li className={this.props.classNameInput?"complete":""} id={this.props.inputItem} onClick={this.doneTodo}>
            {this.props.inputItem}
            <button type={"button"} className={"close"} onClick={this.delete}>X</button>
        </li>;

    }

}

export default Item;