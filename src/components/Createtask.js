import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addTask} from "../redux/actions";


export class Createtask extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
     
        let task = this.refs.createinput.value
        this.props.addTask(task)
        this.refs.createinput.value=""
        

        
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" ref="createinput" />
          <input type="submit" value="Submit" />
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Createtask)
