import RequestService from "./service"

export const userService = {
    login,
    getMe,
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo,
    logout
};
function login(login, password) {
    let body = {
        "login" : login, 
        "password": password,
    }
    let resp = RequestService.getRequest("login","POST", body);
    return resp.then(function(user){
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}
function logout() {
    RequestService.getRequest("logout","POST", {});
    localStorage.removeItem('user');
}
function getMe(){
    let resp = RequestService.getRequest("me","GET", {});
    console.log(localStorage.getItem("user"))
    resp.then(function(user){
        if(!user.name){
            localStorage.removeItem('user');
        }
    }).catch(function(e){
        localStorage.removeItem('user');
    });
}
function addTodo(title, description){
    let body = {
        title : title,
        description: description
    }
    return RequestService.getRequest("todos","POST", body);
}
function getTodos(){
    let res = RequestService.getRequest("todos","GET", {});
    return res;
}
function deleteTodo(id){
    console.log(id)
    let res = RequestService.getRequest("todos","DELETE",id)
    return res;
}

function updateTodo(id, body){
    let res = RequestService.getRequest("todos","PUT",id, body)
    return res;
}