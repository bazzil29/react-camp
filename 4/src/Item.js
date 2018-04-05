import React ,{Component} from "react";
import './App.css';



class Item extends React.Component{

    constructor(props){

        super(props);


    }


    delete = () =>{


        this.props.deleteTodo(this.props.inputItem._id)
        // console.log(e.target.parentElement.id);
    }

    doneTodo = (e) =>{
        this.props.doneTodo(e.target.id);
    }

    render(){

        return <li className={(this.props.inputItem.completed)?"complete":""} id={this.props.inputItem._id} >

            {this.props.inputItem.title}
            <button type={"button"} className={"close"} onClick={this.delete}>X</button>
        </li>;

    }

}

export default Item;


/*<button onClick={this.doneTodo} className={"doneButton"} type={"button"} >V</button>*/