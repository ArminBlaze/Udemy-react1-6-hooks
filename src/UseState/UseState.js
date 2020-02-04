import React, { useState  } from 'react';
import 'Component.css';
 
const UseState = () => {
  const [color, setColor] = useState('white'); 
  const [fontSize, setfontSize] = useState(14); 
  
  const setDark = () => setColor('black');
  const setLight = () => setColor('white');

  // const smallerFont = () => setfontSize((s) => s - 7);
  const resetFont = () => setfontSize(14);
  const biggerFont = () => setfontSize((s) => s + 7);

  const [person, setPerson] = useState({
		name: 'Vasya',
		surname: 'Pupkin'
  });
  
  const changeName = (name) => setPerson((person) => {
    return {
      ...person,
      name
    }
  })

  const changeSurname = (surname) => setPerson((person) => {
    return {
      ...person,
      surname
    }
  })
  
  return(
    <div className='Component' style={{
      backgroundColor: color,
      fontSize: fontSize,
      }}>
      <h3>hook useState</h3>
      <button onClick={() => setColor('black')}>XZ</button>
      <button onClick={setDark}>Dark</button>
      <button onClick={setLight}>Light</button>

      <button onClick={resetFont}>resetFont</button>
      <button onClick={biggerFont}>biggerFont</button>

      <br/>
      <p>Name: {person.name}, Surname: {person.surname}</p>
      <button onClick={() => changeName('Masha')}>changeName</button>
      <button onClick={() => changeSurname('Popkina')}>changeSurname</button>

    </div>
  )
}
 
export default UseState;