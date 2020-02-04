import React, { useEffect, useState  } from 'react';
import 'Component.css';
 
const UseEffectNotification = () => {
  const [visible, setVisible] = useState(true);

  
  useEffect( () => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2500);
    
    return () => clearTimeout(timer)
  },
  [])


  return(
    <div className='Component'>
      <h3>useEffect Timer</h3>
      { visible && <div><p>Hello</p></div> }
      
    </div>
  )
}
 
export default UseEffectNotification;