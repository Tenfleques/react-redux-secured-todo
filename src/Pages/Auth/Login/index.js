import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../../redux';
import Base64ImagesConstants from "../../../constants/images.base64.json";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        if(localStorage.removeItem('user'))
            this.props.dispatch(userActions.logout());
            
        this.state = {
            login: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { login, password } = this.state;
        const { dispatch } = this.props;
        if (login && password) {
            dispatch(userActions.login(login, password))
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { login, password, submitted } = this.state;
        return (
            <div className="container p-5">
                <form className="row mt-5 p-md-5 bg-primary text-white max-w-600px mx-auto" onSubmit={this.handleSubmit}>
                    <div className='form-group col-12'>
                        <label htmlFor="login">login</label>
                        <input
                            type="text"
                            name="login"
                            value={login}
                            className={"form-control col-12 mb-3" + (submitted && !login ? ' border-danger' : '')}
                            onChange={this.handleChange}
                        />
                        {submitted && !login &&
                            <div className="text-danger">login is required</div>
                        }
                    </div>
                    <div className='form-group col-12'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className={"form-control col-12 mb-3" + (submitted && !password ? ' border-danger' : '')}
                            onChange={this.handleChange}
                        />
                        {submitted && !password &&
                            <div className="text-danger">Password is required</div>
                        }
                    </div>
                    <div className="form-group col-12">
                        <button 
                            type="submit"
                            className="form-control col-12 mb-3"
                        >
                            Login &nbsp;
                            {loggingIn &&
                                <img src={Base64ImagesConstants.loading} 
                                alt=""
                                />
                            }
                        </button>
                        
                    </div>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
export default connect(mapStateToProps)(LoginPage)