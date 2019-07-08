import React from 'react';
import {AddTodoForm,TodoList, NavBar} from "../../Components";

export default function ToDoPage(props) {
    console.log(props)
    return (
        <div>
            <NavBar actions={props.actions}/>
            <div className="container">
                <div className="row mt-5">
                <TodoList user={props.authentication.user} todos={props.todos} />  
                </div>  
            </div>
        </div>
    );
  }
//   <AddTodoForm/>
//   <TodoList /> 