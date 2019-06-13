import React from 'react';
import NavBar from "../../Components/Navbar";
import AddTodo from "../../Components/AddTodo";
import TodoList from "../../Components/TodoList";

export default function ToDoPage() {
    return (
        <div className="container">
            <NavBar/>  
            <div className="row mt-5">
                <AddTodo/>
                <TodoList /> 
            </div>  
        </div>
    );
  }
  