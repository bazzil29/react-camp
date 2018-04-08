import React  from "react";
import '../StyleSheets/App.css';



class Item extends React.Component{


    delete = () =>{


        this.props.deleteTodo(this.props.inputItem._id);

    };

    doneTodo = () =>{
        this.props.doneTodo(this.props.inputItem._id);
    };

    render(){

        return <li className={(this.props.inputItem.completed)?"complete":""} id={this.props.inputItem._id} onClick={this.doneTodo}>

            {this.props.inputItem.title}
            <button type={"button"} className={"close"} onClick={this.delete}>X</button>
        </li>;

    }

}

export default Item;

