import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import HookComponent from './HookComponent';

 
class App extends Component {
  
  
  render() {
    return (
      <div>
        <ClassComponent/>
        <HookComponent/>
      </div>
    )
  }
}
 
export default App;