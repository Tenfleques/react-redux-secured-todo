import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, alert, authentication, ...rest }) => (
  <Route
    {...rest}
    render={props => {
        return (
            authentication.user && authentication.user.name
            ? (props.location.pathname === "/users" && authentication.user.role !== "admin" ? <Redirect to="/" /> : <Component {...props} />)
            : <Redirect to="/login" />
    )}}
  />
);

function mapStateToProps(state) {
  const { alert, authentication } = state;
  return {
      alert,
      authentication
  };
}
export default connect(mapStateToProps)(PrivateRoute);