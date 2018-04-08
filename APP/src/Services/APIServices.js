import {getTokenFromStorage} from "./LocalStorageServices";

export const fetchTodos = () =>{

    const token = getTokenFromStorage();

    const url = 'https://uetcc-todo-app.herokuapp.com/todos?token='+token;

    return fetch(url)
        .then(response =>{

            return response.json();
        });
};

export const createTodo = (text) => {

    const url = 'https://uetcc-todo-app.herokuapp.com/todos';

    const token = getTokenFromStorage();

    const request = new Request (url , {

        headers: {
            'Content-Type' : 'application/json',
            'Authorization': token,
        },

        method: 'POST' ,

        body: JSON.stringify({
            title: text,

        })

    });

    return fetch(request)
        .then(response  => {

            return response.json();

        })


};

export  const  deleteTodo = (id)=>{

        const token = getTokenFromStorage();


        const url = `https://uetcc-todo-app.herokuapp.com/todos/${id}`;

        const request = new Request(url , {

            headers: {
                'Content-Type' : 'application/json',
                'Authorization': token,
            },

            method : 'DELETE'
        });

        return fetch(request)
            .then (response=>{

                return response.json();
            });



};


export  const doneTodo = (id)=>{

        const token = getTokenFromStorage();

        const url = `https://uetcc-todo-app.herokuapp.com/todos/${id}/toggle `;

        const request = new Request(url, {

            headers: {
                'Content-Type' : 'application/json',
                'Authorization': token,
            },

            method: 'POST'
        });

        return fetch(request)
            .then(response => {
                return response.json();
            });




};



export const register = ({email , password , name}) =>{

    const url = `https://uetcc-todo-app.herokuapp.com/register`;

    const request = new Request (url , {

        method: 'POST' ,
        headers: {
            'Content-Type':'application/json'
        },
        body : JSON.stringify({

            email,
            password,
            name,
        })

    });

    return fetch(request)
        .then(response =>{

            return response.json();
        })


};

export const loginAPI = ({email , password}) =>{

    const url =  `https://uetcc-todo-app.herokuapp.com/login`;

    const request = new Request(url , {

        method:'POST',

        headers: {
            'Content-Type':'application/json'
        },

        body : JSON.stringify({
            email,
            password
        })

    });

    return fetch(request)
        .then(response =>{
            return response.json();
        });
};


