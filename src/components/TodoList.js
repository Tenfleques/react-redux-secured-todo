import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux';
import Base64ImagesConstants from "../constants/images.base64.json";

class TodoList extends React.Component {
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(userActions.getTodos());
  }
  handleDelete(id){
    const {dispatch} = this.props
    dispatch(userActions.deleteTodo(id))
  }
  handleInitEdit(e){

  }
  listTodos(){
    const user = JSON.parse(localStorage.getItem("user"));

    return (!this.props.todos.length && <img src={Base64ImagesConstants.loading}  alt=""/>) || (this.props.todos && (this.props.todos instanceof Array) && this.props.todos.map(todo => (
      <div key={todo.id} className="col-12 col-md-4 col-lg-3">
          <div className="card text-white bg-primary mb-3 pb-3">
            <div className="card-body">
              <div className="row">
                <span className="h5 col text-left text-warning" onClick={(e) => this.handleInitEdit(todo.id)}>
                  {(user.role === "admin" || (todo.createdBy === user.name)) && "edit" }
                  </span>

                  <span className="h5 col-1 text-right text-danger" onClick={() => this.handleDelete(todo.id)}>
                    {(user.role === "admin" || (todo.createdBy === user.name)) && "x" }
                  </span>
              </div>
              <h4 className="card-title">
                {todo.title}
              </h4>
              <p className="card-text">{todo.description}</p>
            </div>
            <div className="card-footer pt-1 pb-0">
              <em>
                {todo.createdBy}
              </em>
            </div>
          </div>
      </div>
    )));
  }
  render() {
      return (
        <div className="col-12 mt-5">
          <div className="row">
            {this.listTodos()}
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
    const { todos } = state;
    console.log(state)
    return {
      todos
    };
}
export default connect(mapStateToProps)(TodoList)