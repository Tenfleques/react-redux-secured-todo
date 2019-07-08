import React from 'react';
import {AddTodoForm,TodoList, NavBar} from "../../Components";

export default function ToDoPage() {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row mt-5">
                    <AddTodoForm/>
                    <TodoList />  
                </div>  
            </div>
        </div>
    );
  }