import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, actions, ...rest }) => (
  <Route
    {...rest}
    render={props => {
        console.log(authed,actions)
        return (
            authed.user
            ? <Component actions= {actions} user={authed.user} {...props} />
            : <Redirect to="/login" />
    )}}
  />
);

export default PrivateRoute;