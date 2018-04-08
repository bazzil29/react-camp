import React  from "react";
import Item from "./Item";




class ListItem extends React.Component{


    deleteTodoList = (e)=>{

        this.props.deleteTodo(e);
    };

    doneTodoList = (e) =>{

        this.props.doneTodo(e);
    };

    render(){


        const listItems = this.props.todos.map((input )=>{

                return  <Item key={input._id} inputItem={input} deleteTodo={this.deleteTodoList} doneTodo={this.doneTodoList}/>
            }

        );

        return listItems;

    }
}

export default ListItem;