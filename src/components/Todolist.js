import React, { Component } from "react";
import { connect } from "react-redux";
import { delTask } from "../redux/actions";

export class Todolist extends Component {

handleDelete = (key) => {
    this.props.delTask(key)
    
}


  render() {
    return (
      <div>
        {this.props.todos.map((item,key) => (
          <li key={key}>
            {item}
            <button onClick={() => {
                this.handleDelete(key)
            }}>
              <span role="img" aria-label="sheep">
                ⭕
              </span>
            </button>
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.tasks
});

const mapDispatchToProps = dispatch => {
  return { delTask: taskID => dispatch(delTask(taskID)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);
