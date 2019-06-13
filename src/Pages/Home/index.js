import React from 'react';
import NavBar from "../../Components/Navbar";

export default function Home() {
    let user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="container">
            <NavBar/>
            <div className="row mt-5">
                <div className="col-12">
                    Welcome {user.name}
                </div>
            </div>            
        </div>        
    );
  }
  