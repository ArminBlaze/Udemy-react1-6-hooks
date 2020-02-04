import React, { Component } from 'react';
import UseState from 'UseState/index.js';
import UseContext from 'UseContext';
import UseEffect from 'UseEffect/index.js';
import {Provider} from 'context/myContext';

 
class App extends Component {
  render() {
    return (
      <Provider value={'Peka!'}>
        <div>
          <UseEffect/>
          <UseContext/>
          <UseState/>
        </div>
      </Provider>
    )
  }
}
 
export default App;