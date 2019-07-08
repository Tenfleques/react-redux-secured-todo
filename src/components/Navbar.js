import React from 'react';
import {Link} from 'react-router-dom';
import AppConfig from "../app.json";
import { userActions } from '../redux';
import { connect } from 'react-redux';

function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="nav-item text-white" to="/">
        {AppConfig.title} Home
      </Link>
      <Link className="nav-item text-white" to="/todos">
        Todos
      </Link>
      {props.user.role === "admin" && <Link className="nav-item text-white" to="/users">
        Users
      </Link>}
      <Link className="nav-item text-white" to="#"  onClick={props.logout} >
      Logout {props.user.name}
      </Link>
    </nav>
  );
}
function mapStateToProps(state) {
  const { alert, authentication } = state;
  return {
      alert,
      user: authentication.user
  };
}
export default connect(mapStateToProps, userActions)(NavBar);