import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/history';
import { userActions } from './redux';

import {PrivateRoute, FooterBar} from './Components'
import {Home, Todos, LoginPage, Users}  from './Pages';
import Base64ImagesConstants from "./constants/images.base64.json";

import {ErrorBoundarySilent, ErrorBoundaryNoisy} from "./Exceptions"


import "./bootstrap.css"
import "./styles.css";

class App extends React.Component {
    componentDidMount(){
        this.props.getMe();
    }
    render() {
        return (
            <div>
                {
                    !this.props.authentication.checkedUser && 
                    <div className="row mt-5 pt-5">
                        <div className="mx-auto display-1 mt-5 pt-5">
                            Welcome 
                            <img src={Base64ImagesConstants.loading} 
                                    alt="загрузка..."
                            />
                        </div>                        
                    </div>

                }
                {
                    (this.props.authentication.checkedUser) && 
                    (
                        <Router history={history}>
                            <div>
                                <ErrorBoundaryNoisy>
                                    <PrivateRoute exact path="/" 
                                        component={Home} 
                                        />
                                </ErrorBoundaryNoisy>
                                <ErrorBoundaryNoisy>
                                    <PrivateRoute exact path="/todos"  
                                        component={Todos} 
                                        /> 
                                </ErrorBoundaryNoisy>
                                <ErrorBoundaryNoisy>
                                   <PrivateRoute exact path="/users"  
                                        component={Users} 
                                        />  
                                </ErrorBoundaryNoisy>
                                <ErrorBoundaryNoisy>
                                    <Route path="/login" component={LoginPage} />
                                </ErrorBoundaryNoisy>   
                            </div>
                        </Router>  
                    ) 
                }
                <ErrorBoundarySilent>
                    <FooterBar />
                </ErrorBoundarySilent> 
            </div>                     
        );
    }
}

function mapStateToProps(state) {
    const { alert, todos, authentication } = state;
    return {
        alert,
        todos,
        authentication
    };
}
export default connect(mapStateToProps, userActions)(App);