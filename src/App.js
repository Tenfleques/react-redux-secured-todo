import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/history';
import { alertActions } from './redux';
import { PrivateRoute } from './Components/PrivateRoute';

import Home from './Pages/Home';
import Todos from "./Pages/Todos";
import LoginPage from "./Pages/Auth/Login"
import RequestService from "./RequestService/service";

import Base64ImagesConstants from "./constants/images.base64.json";

import "./bootstrap.css"
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
        this.state = {
            loggedChecked: null
        }
    }
    async componentDidMount(){
        let resp = RequestService.getRequest("me","GET", {});  
        resp.then(me =>{
            if(!Object.keys(me).includes("name")){
                localStorage.removeItem("user");
            }else{
                localStorage.setItem("user", JSON.stringify(me))
            }
            this.setState({
                loggedChecked: true,
            });
        })
        .catch((e) => {
            localStorage.removeItem("user");
            console.log(e)
        })  
    }

    render() {
        return (
            <div>
                {
                    this.state.loggedChecked === null && 
                    <div className="row mt-5 pt-5">
                        <div className="mx-auto display-1 mt-5 pt-5">
                            Welcome <img src={Base64ImagesConstants.loading} 
                                    alt=""
                                    />
                        </div>                        
                    </div>

                }{
                    this.state.loggedChecked && 
                    <Router history={history}>
                        <div>
                            <PrivateRoute exact path="/" component={Home} />
                            <PrivateRoute exact path="/todos" component={Todos} />                    
                            <Route path="/login" component={LoginPage} />
                        </div>
                    </Router>  
                } 
            </div>
                             
        );
    }
}

function mapStateToProps(state) {
    const { alert, todos } = state;
    return {
        alert,
        todos
    };
}

export default connect(mapStateToProps)(App);