import React from 'react';
import {UserList, NavBar} from "../../Components";

export default function Users() {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row mt-5">
                    <UserList />
                </div>  
            </div>
        </div>
    );
  }