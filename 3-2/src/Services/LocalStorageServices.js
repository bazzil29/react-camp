
export const saveToStorage = (data) => {

    const todosStr = JSON.stringify(data);
    localStorage.setItem("todos",todosStr);

};

export  const getTodosFromStorage = () =>{

    const todosStr = localStorage.getItem("todos");
    const todosOjb = JSON.parse(todosStr);

    return todosOjb;
};