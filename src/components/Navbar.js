import React from 'react';
import {Link} from 'react-router-dom';
import AppConfig from "../app.json";
import { userActions } from '../redux';

function NavBar() {
  let user = JSON.parse(localStorage.getItem('user'));
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="nav-item text-white" to="/">
        {AppConfig.title} Home
      </Link>
      <Link className="nav-item text-white" to="/todos">
        Todos
      </Link>
      <Link className="nav-item text-white" to="#" onClick={userActions.logout}>
        Logout {user.name}
      </Link>
    </nav>
  );
}

export default NavBar;