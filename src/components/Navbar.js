import React from 'react';
import {Link} from 'react-router-dom';
import AppConfig from "../app.json";
import { userActions } from '../redux';

function NavBar(props) {
  console.log(props)
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="nav-item text-white" to="/">
        {AppConfig.title} Home
      </Link>
      <Link className="nav-item text-white" to="/todos">
        Todos
      </Link>
      {}
      <Link className="nav-item text-white" to="#" onClick={props.actions.logout} >
      Logout {props.actions.authentication.user.name}
      </Link>
    </nav>
  );
}

export default NavBar;