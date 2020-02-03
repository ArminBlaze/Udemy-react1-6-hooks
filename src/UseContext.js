import React, { useContext  } from 'react';
import './Component.css';
import myContext from 'context/myContext';
 
const UseContext = () => {
  debugger;
  const value = useContext(myContext);
  
  return(
    <div className='Component'>
      <h3>useContext</h3>
      
      <p>{value}</p>
    </div>
  )
}
 
export default UseContext;