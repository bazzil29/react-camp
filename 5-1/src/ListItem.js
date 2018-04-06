import React ,{Component} from "react";
import Item from  "./Item"




class ListItem extends React.Component{

    constructor(props){

        super(props);

    }

    deleteTodoList = (e)=>{

        this.props.deleteTodo(e);
    }

    doneTodoList = (e) =>{

        this.props.doneTodo(e);
    }

    render(){


        const listItems = this.props.todos.map((input )=>{

                return  <Item inputItem={input} deleteTodo={this.deleteTodoList} doneTodo={this.doneTodoList}/>
            }

        );

        return listItems;

    }
}

export default ListItem;