import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import UseState from 'UseState';
import UseContext from 'UseContext';
import {Provider} from 'context/myContext';
import myContext from 'context/myContext';

 
class App extends Component {
  render() {
    return (
      <Provider value={'Peka!'}>
        <div>
          <ClassComponent/>
          <UseState/>
          <UseContext/>
        </div>
      </Provider>
    )
  }
}
 
export default App;