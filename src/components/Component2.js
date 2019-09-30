import React, { Component } from "react";
import { connect } from "react-redux";
import { delTask } from "../redux/actions";

export class Component2 extends Component {

handleDelete = (key) => {
   
    
}


  render() {
    return (
      <div> 
       <h6>Component 2 </h6> 
       {this.props.data}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.tasks.data
});

const mapDispatchToProps = dispatch => {
  return { delTask: taskID => dispatch(delTask(taskID)) };
};

export default connect(mapStateToProps,mapDispatchToProps)(Component2);
