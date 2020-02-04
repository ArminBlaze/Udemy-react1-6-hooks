import React, { useContext  } from 'react';
import './Component.css';
import myContext from 'context/myContext';
 
const UseContext = () => {
  const value = useContext(myContext);
  
  return(
    <div className='Component'>
      <h2>Hook useContext</h2>
      
      <p>{value}</p>
    </div>
  )
}
 
export default UseContext;