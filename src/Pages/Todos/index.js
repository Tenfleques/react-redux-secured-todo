import React from 'react';
import {AddTodoForm,TodoList, NavBar} from "../../Components";
import {ErrorBoundarySilent, ErrorBoundaryNoisy} from "../../Exceptions"

export default function ToDoPage() {
    return (
        <div>
            <ErrorBoundarySilent>
                <NavBar/>
            </ErrorBoundarySilent>
            <div className="container mb-5">
                <div className="row mt-5">
                    <ErrorBoundarySilent>
                        <AddTodoForm/>
                    </ErrorBoundarySilent>

                    <ErrorBoundaryNoisy fallback="<em classNmne='text-danger'> failed to get todos... </em>">
                        <TodoList />
                    </ErrorBoundaryNoisy>                   
                </div>  
            </div>
        </div>
    );
  }