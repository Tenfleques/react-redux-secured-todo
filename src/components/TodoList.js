import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux';
import Base64ImagesConstants from "../constants/images.base64.json";
import Todo from "./Todo";

class TodoList extends React.Component {
  componentDidMount(){
    this.props.getTodos();
  }
  handleDelete(id){
    this.props.deleteTodo(id)
  }
  render() {
      return (
        !this.props.todos.length && <img src={Base64ImagesConstants.loading}  alt="" className="mx-auto hpem-4"/>) 
      || 
        (this.props.todos && (this.props.todos instanceof Array) && this.props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)
    );
  }
}

function mapStateToProps(state) {
    const { todos, authentication } = state;
    return {
      todos,
      user : authentication.user
    };
}
export default connect(mapStateToProps,userActions)(TodoList)
