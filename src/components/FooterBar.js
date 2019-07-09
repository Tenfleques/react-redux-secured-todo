import React from 'react';
import AppConfig from "../app.json";
import { connect } from 'react-redux';

function FooterBar(props) {
  return (
    <nav className="navbar fixed-bottom bg-white mt-5 border-top">
      <div className="navbar-brand">{AppConfig.title}</div>
      {
        props.alert.message
        && (<div className="nav-item text-left">
        status: &nbsp;
        <em className={"nav-item text-left " + props.alert.type }>
          {props.alert.message}
        </em>
      </div>)
      }  
    </nav>
  );
}
function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}
export default connect(mapStateToProps)(FooterBar);