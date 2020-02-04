import React, { useEffect  } from 'react';
import 'Component.css';
 
const UseEffect = ({value, random}) => {
  useEffect( () => {
    console.log('useEffect');

    return () => console.log('Clear useEffect');
  },
  [])


  return(
    <div className='Component'>
      <h3>Hook useEffect</h3>
      {value}
      <br/>
      {random}
    </div>
  )
}
 
export default UseEffect;