import React ,{Component} from "react";



class Header extends React.Component{


    render(){

        //const input = document.getElementById("input").value;

        return (

            <div className={"header"}>
                <h1>My to do list</h1>
                <form className={"create"}>
                    <input id={"input"} type="text" placeholder={"Title....."} />
                    <button type={"button"} id={"buttonAdd"} onClick = {this.props.clickAdd}>ADD</button>
                </form>
            </div>
        );
    }
}

export  default Header;