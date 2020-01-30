import React, { useState  } from 'react';
import './Component.css';
 
const UseState = () => {
  const [color, setColor] = useState('white'); 
  const [fontSize, setfontSize] = useState(14); 
  
  const setDark = () => setColor('black');
  const setLight = () => setColor('white');

  const smallerFont = () => setfontSize(14);
  const resetFont = () => setfontSize(14);
  const biggerFont = () => setfontSize((s) => s + 7);
  
  return(
    <div className='Component' style={{
      backgroundColor: color,
      'font-size': fontSize,
      }}>
      <h3>useState</h3>
      <button onClick={() => setColor('black')}>XZ</button>
      <button onClick={setDark}>Dark</button>
      <button onClick={setLight}>Light</button>

      <button onClick={resetFont}>resetFont</button>
      <button onClick={biggerFont}>biggerFont</button>

    </div>
  )
}
 
export default UseState;