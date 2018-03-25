import React ,{Component} from "react";
import Item from  "./Item"




class ListItem extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            data : this.props.todos ,

        }
    }

    deleteTodoList = (e)=>{

        this.props.deleteTodo(e);
    }

    doneTodoList = (e) =>{

        this.props.doneTodo(e);
    }

    render(){


        const listItems = this.state.data.map((input )=>{
                return  <Item inputItem={input.text} classNameInput = {input.complete} deleteTodo={this.deleteTodoList} doneTodo={this.doneTodoList}/>
            }

        );

        return listItems;

    }
}

export default ListItem;