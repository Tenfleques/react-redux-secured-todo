import React from 'react';
import { connect } from 'react-redux';

import { alertActions, userActions } from '../../../redux';
import Base64ImagesConstants from "../../../constants/images.base64.json";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            login: '',
            password: '',
            submitted: false
        };
        props.clear();
        props.logout();
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
        this.props.login(login, password)
        
    }
    notificationZone(){
        return (
            this.props.authentication.error && 
            <div className="text-center pt-3">
                <em className={"nav-item text-left " + this.props.alert.type }>
                    {this.props.authentication.error}
                </em>
            </div>
        );
    }
    render() {
        const { loggingIn } = this.props.authentication;
        const { login, password, submitted } = this.state;
        return (
            <div className="container p-5">
                <form className="row mt-5 p-md-5 bg-primary text-white max-w-600px mx-auto" onSubmit={this.handleSubmit}>
                    <div className='form-group col-12'>
                        {this.notificationZone()}
                    </div>
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
    const { authentication, alert } = state
    return {
        authentication,
        alert
    };
}
export default connect(mapStateToProps, Object.assign({}, alertActions, userActions))(LoginPage)