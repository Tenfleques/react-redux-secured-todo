import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux';
import Person from "./Person";
import Base64ImagesConstants from "../constants/images.base64.json";

class UsersList extends React.Component {
  componentDidMount(){
    if(this.props.user.role === "admin"){
      this.props.getUsers();
    }    
  }
  render() {
      return (
          !this.props.users.length && <img src={Base64ImagesConstants.loading}  alt="" className="mx-auto hpem-4"/>) 
        || 
          (this.props.users && (this.props.users instanceof Array) && this.props.users.map(person => <Person key={person.name} person={person}/>)
      );
  }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    return {
      users,
      user : authentication.user
    };
}
export default connect(mapStateToProps,userActions)(UsersList)