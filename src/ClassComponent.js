import React, { Component } from 'react';
import './Component.css';
 
class ClassComponent extends Component {
  state = {
    color: 'white'
  }
  
  setDark = () => {
    this.setState({color: 'black'});
  };
  
  setLight = () => {
    this.setState({color: 'white'});
  };
  
  render() {
    const {color} = this.state;
    return (
      <div className='Component' style={{backgroundColor: color}}>
        <h3>Class Component</h3>
        <button onClick={this.setDark}>Dark</button>
        <button onClick={this.setLight}>Light</button>
      </div>
    )
  }
}
 
export default ClassComponent;