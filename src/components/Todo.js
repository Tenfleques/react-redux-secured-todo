import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux';

class Todo extends React.Component {
    handleDelete(){
      this.props.deleteTodo(this.props.todo.id)
    }
    render (){
        return (
            <div key={this.props.todo.id} className="col-12 col-md-4 col-lg-3">
                <div className="bg-primary card text-white mb-3 pb-3">
                  <div className="card-header border-0 py-0 text-right">
                      <span className="h5 col-12 pr-0 text-danger cursor-pointer" onClick={() => this.handleDelete()}>
                          {(this.props.user.role === "admin" || (this.props.todo.createdBy === this.props.user.name)) && "x" }
                      </span>
                  </div>
                  <div className="card-body">
                    <h4>              
                      {this.props.todo.title}
                    </h4>
                    <p className="card-text">{this.props.todo.description}</p>
                  </div>
                  <div className="border-0 card-footer pt-1 pb-0">
                    <em className="small">
                      {this.props.todo.createdBy}
                    </em>
                  </div>
                </div>
            </div>
        )
    }    
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
      user : authentication.user
    };
}
export default connect(mapStateToProps,userActions)(Todo)