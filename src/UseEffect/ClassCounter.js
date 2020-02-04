import React, { Component } from 'react';
import 'Component.css';
 
class ClassCounter extends Component {
  
  componentDidMount() {
    console.log('class mount');
  }

  componentDidUpdate(props) {
    console.log('class update');
  }
  
  componentWillUnmount() {
    console.log('class unmount');
  }

  render() {
    return (
      <div className='Component'>
        <h3>Class Component</h3>
        {this.props.value}
        <br/>
        {this.props.random}
      </div>
    )
  }
}
 
export default ClassCounter;