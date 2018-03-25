import React, { Component } from 'react';
import './App.css';


class Header extends React.Component{

    render(){

        return (

            <div className={"header"}>
                <h1>My to do list</h1>
                <form className={"create"}>
                    <input id={"input"} type="text" placeholder={"Title....."} />
                    <button type={"button"} id={"buttonAdd"} >ADD</button>
                </form>
            </div>
        );
    }
}




class Item extends React.Component{

    render(){

        return   <li className={""} onClick={"completed(this)"} >
                    ok men
                    <button type={"button"} className={"close"}>X</button>
                </li>;

    }
}

class ListItem extends React.Component{

    render(){

        return  <ul className={"list"}>
                    <Item />
                </ul>;

    }
}


class App extends  React.Component{

    render(){

        return (
            <div>
                <Header />
                <ListItem />
             </div>

        );
    }
}
export  default  App;
