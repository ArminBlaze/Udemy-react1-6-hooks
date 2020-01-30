import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import UseState from './UseState';

 
class App extends Component {
  
  
  render() {
    return (
      <div>
        <ClassComponent/>
        <UseState/>
      </div>
    )
  }
}
 
export default App;