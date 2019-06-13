import { userConstants } from '../constants/user.constants';
import { userService } from '../RequestService';
import { alertActions } from './alert.actions';
import { history } from '../helpers/history';

export const userActions = {
    login,
    getMe,
    logout,
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
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
    userService.logout();
    return { type: userConstants.LOGOUT };
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
            );
    };
    function request() { return { type: userConstants.ADD_TODO_REQUEST } }
    function success(todo) { return { type: userConstants.ADD_TODO_SUCCESS, todo } }
    function failure(error) { return { type: userConstants.ADD_TODO_FAILURE, error } }
}
function updateTodo(path, body){
    const user = JSON.parse(localStorage.getItem("user"));
    const updated = JSON.parse(JSON.stringify(body))
    updated["id"] = path;
    updated["createdBy"] = user.name
    return dispatch => {
        dispatch(request(path));
        userService.updateTodo(path, body)
            .then(
                res => { 
                    if(res !== "Success"){
                        dispatch(failure(res));
                        dispatch(alertActions.error(res));
                    }else{
                        dispatch(success(updated));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: userConstants.ADD_TODO_REQUEST } }
    function success(todo) { return { type: userConstants.ADD_TODO_SUCCESS, todo } }
    function failure(error) { return { type: userConstants.ADD_TODO_FAILURE, error } }
}

function deleteTodo(path){
    return dispatch => {
        dispatch(request(path));
        userService.deleteTodo(path)
            .then(
                res => { 
                    if(res !== "Success"){
                        dispatch(failure(res));
                        dispatch(alertActions.error(res));
                    }else{
                        dispatch(success(path));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(id) { return { type: userConstants.ADD_TODO_REQUEST } }
    function success(id) { return { type: userConstants.ADD_TODO_SUCCESS, id } }
    function failure(error) { return { type: userConstants.ADD_TODO_FAILURE, error } }
}

function getTodos() {
    return dispatch => {
        dispatch(request());
        userService.getTodos()
            .then(
                todos => dispatch(success(todos)),
                error => dispatch(failure(error.toString()))
            );
    };
    function request() { return { type: userConstants.GET_TODOS_REQUEST } }
    function success(todos) { return { type: userConstants.GET_TODOS_SUCCESS, todos } }
    function failure(error) { return { type: userConstants.GET_TODOS_FAILURE, error } }
}
function getMe() {
    return dispatch => {
        dispatch(request());
        userService.getAll()
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETME_REQUEST } }
    function success(user) { return { type: userConstants.GETME_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETME_FAILURE, error } }
}
