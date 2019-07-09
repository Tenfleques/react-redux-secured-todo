import React from 'react';
import {UserList, NavBar} from "../../Components";
import {ErrorBoundarySilent, ErrorBoundaryNoisy} from "../../Exceptions"

export default function Users() {
    return (
        <div>
            <ErrorBoundarySilent>
                <NavBar/>
            </ErrorBoundarySilent>
            <div className="container">
                <div className="row mt-5">
                    <ErrorBoundaryNoisy fallback="<em classNmne='text-danger'> failed to get users... </em>">
                        <UserList />
                    </ErrorBoundaryNoisy>
                    
                </div>  
            </div>
        </div>
    );
  }