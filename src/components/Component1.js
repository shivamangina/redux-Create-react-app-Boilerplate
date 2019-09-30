import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addTask} from "../redux/actions";


export class Component1 extends Component {

    handleSubmit = (e) => {
        e.preventDefault()     
    }
    
  render() {
    return (
      <div>
        <h6>Component 1</h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {}
}



const mapDispatchToProps = (dispatch) => {
    return { addTask:(task) => dispatch(addTask(task))}
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1)
