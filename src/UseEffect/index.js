import ClassCounter from './ClassCounter';
import UseEffectCounter from './UseEffectCounter.js';
import React, { useState  } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const [random, setRandom] = useState(0);
  const [visible, setVisible] = useState(true);


  return (
    <div className='Component'>
      <h2>UseEffect</h2>
      {
        getBody()
      }
    </div>
  )

  function getBody() {
    if(visible) {
      return (
        <div>
          <button onClick={ () => setValue(v => v+1) }>+</button>
          <button onClick={ () => setRandom(Math.random()) }>Rnd</button>
          <button onClick={ () => setVisible(false) }>hide</button>

          <ClassCounter value={value} random={random}/>
          <UseEffectCounter value={value} random={random}/>
        </div>
      )
    } else {
      return <button onClick={() => setVisible(true)}>show</button>
    }
  }
}
