import RequestService from "./service"
export const userService = {
    login,
    logout,
    getMe,
    getUsers,
    addTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
};
function login(login, password) {
    let body = {
        "login" : login, 
        "password": password,
    }
    return RequestService.getRequest("login","POST", body);
}
function logout() {
    return RequestService.getRequest("logout","POST", {});
}
function getMe(){
    return RequestService.getRequest("me","GET", {});
}
function getUsers(){
    return RequestService.getRequest("users","GET", {});
}
function addTodo(title, description){
    let body = {
        title : title,
        description: description
    }
    return RequestService.getRequest("todos","POST", body);
}
function getTodos(){
    return RequestService.getRequest("todos","GET");
}
function getTodo(id){
    return RequestService.getRequest("todos","GET", id);
}
function updateTodo(id, body){
    return RequestService.getRequest("todos","PUT",id, body)
}
function deleteTodo(id){
    return RequestService.getRequest("todos","DELETE",id)
}