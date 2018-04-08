
export const saveTokenToStorage = (token) => {

    localStorage.setItem("token",token);

};

export  const getTokenFromStorage = () =>{

    const token = localStorage.getItem("token");

    return token;
};

export  const  deleteTokenFromStorage = () => {
    localStorage.setItem('token','');
}
