import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { alertActions, userActions } from './redux';

import {PrivateRoute, NavBar} from './Components'

import {Home, Todos,LoginPage}  from './Pages';

class Routes extends Component {
  componentDidMount() {
    //console.log('==== Routes mounted!');
  }

  render() {
    console.log('Routes props', this.props);
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute path="/" component={Home} authed={this.props.authentication} />
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}
export default connect(mapStateToProps, userActions)(Routes)