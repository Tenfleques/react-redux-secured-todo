import React from 'react';
import {NavBar} from '../../Components';
import { connect } from 'react-redux';
import {ErrorBoundarySilent} from "../../Exceptions"

const Home = (props) => {
    return (
        <div>
            <ErrorBoundarySilent>
                <NavBar/>
            </ErrorBoundarySilent>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        Welcome {props.user.name}
                    </div>
                </div>            
            </div>    
        </div>
    );
  }
  
  function mapStateToProps(state) {
    const { alert, authentication } = state;
    return {
        alert,
        user : authentication.user
    };
  }
  export default connect(mapStateToProps)(Home);