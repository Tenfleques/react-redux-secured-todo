import { userConstants } from '../constants/user.constants';
import { userService } from '../RequestService';
import { alertActions } from './alert.actions';
import { history } from '../helpers/history';
import { catchUserActionErrors } from "../Exceptions/catchUserActionErrors";

export const userActions = {
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

function login(username, password) {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => { 
                    console.log(user)
                    if(user["code"]){
                        dispatch(failure(user.message));
                        dispatch(alertActions.error(user.message));
                    }else{
                        dispatch(success(user));
                        history.push('/');
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        dispatch(alertActions.clear());
        dispatch(request("attempting logout"));
        userService.logout()
            .then(
                res => { 
                    history.push('/login');
                    return dispatch(success(res));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(message) { return { type: userConstants.LOGIN_REQUEST, message } }
    function success(res) { return { type: userConstants.LOGOUT_SUCCESS, res } }
    function failure(error) { return { type: userConstants.LOGOUT_FAILURE, error } }
}

function getMe() {
    return dispatch => {
        dispatch(request());
        userService.getMe()
            .then(
                user => {
                    if(!user.name){
                        dispatch(alertActions.error("User not found"))
                        return dispatch(failure("User not found"));
                    }
                    return dispatch(success(user))
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GET_ME_REQUEST} }
    function success(user) { return { type: userConstants.GET_ME_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_ME_FAILURE, error } }
}

function getUsers() {
    return dispatch => {
        dispatch(request());
        userService.getUsers()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GET_USERS_REQUEST} }
    function success(users) { return { type: userConstants.GET_USERS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GET_USERS_FAILURE, error } }
}

function getTodos() {
    return dispatch => {
        dispatch(request());
        userService.getTodos()
            .then(
                todos => dispatch(success(todos)),
                error => dispatch(failure(error.toString()))
            )
            .catch(catchUserActionErrors);
    };
    function request() { return { type: userConstants.GET_TODOS_REQUEST } }
    function success(todos) { return { type: userConstants.GET_TODOS_SUCCESS, todos } }
    function failure(error) { return { type: userConstants.GET_TODOS_FAILURE, error } }
}

function getTodo(id) {
    return dispatch => {
        dispatch(request());
        userService.getTodo(id)
            .then(
                todo => dispatch(success(todo)),
                error => dispatch(failure(error.toString()))
            )
            .catch(catchUserActionErrors);
    };
    function request() { return { type: userConstants.GET_TODOS_REQUEST } }
    function success(todos) { return { type: userConstants.GET_TODO_SUCCESS, todos } }
    function failure(error) { return { type: userConstants.GET_TODO_FAILURE, error } }
}

function addTodo(title, description){
    return dispatch => {
        dispatch(request());
        userService.addTodo(title, description)
            .then(
                todo => { 
                    if(todo["code"]){
                        dispatch(failure(todo.message));
                        dispatch(alertActions.error(todo.message));
                    }else{
                        dispatch(success(todo));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
            .catch(catchUserActionErrors)
            .finally(
                () => {
                    dispatch(getTodos);
                }
            );
    };
    function request() { return { type: userConstants.ADD_TODO_REQUEST } }
    function success(todo) { return { type: userConstants.ADD_TODO_SUCCESS, todo } }
    function failure(error) { return { type: userConstants.ADD_TODO_FAILURE, error } }
}
function updateTodo(path, body, user){
    const updated = JSON.parse(JSON.stringify(body))
    updated["id"] = path;
    updated["createdBy"] = user.name
    return dispatch => {
        dispatch(request(path));
        userService.updateTodo(path, body)
            .then(
                res => { 
                    console.log(res);
                    /*if(res !== "Success"){
                        dispatch(failure(res));
                        dispatch(alertActions.error(res));
                    }else{
                        dispatch(success(updated));
                    }*/
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
            .catch(catchUserActionErrors)
            .finally(
                () => {
                    dispatch(getTodos);
                }
            );
    };
    function request() { return { type: userConstants.EDIT_TODO_REQUEST } }
    //function success(todo) { return { type: userConstants.EDIT_TODO_SUCCESS, todo } }
    function failure(error) { return { type: userConstants.EDIT_TODO_FAILURE, error } }
}

function deleteTodo(path){
    return dispatch => {
        dispatch(request(path));
        userService.deleteTodo(path)
            .then(
                () => { 
                    dispatch(success(path));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
            .catch(catchUserActionErrors)
            .finally(
                () => {
                    dispatch(getTodos);
                }
            );
    };
    function request(id) { return { type: userConstants.DELETE_TODO_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_TODO_SUCCESS, id } }
    function failure(error) { return { type: userConstants.DELETE_TODO_FAILURE, error } }
}



