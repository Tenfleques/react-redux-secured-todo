import React from 'react';
import {NavBar} from '../../Components';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <div>
            <NavBar/>
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