import React, { useState  } from 'react';
import './Component.css';
 
const HookComponent = () => {
  const [color, setColor] = useState('white'); //1
  
  const setDark = () => setColor('black');
  const setLight = () => setColor('white');
  
  return(
    <div className='Component' style={{backgroundColor: color}}>
      <button onClick={() => setColor('black')}>XZ</button>
      <button onClick={setDark}>Dark</button>
      <button onClick={setLight}>Light</button>
    </div>
  )
}
 
export default HookComponent;