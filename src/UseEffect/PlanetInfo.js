import React, { useEffect, useState  } from 'react';
import 'Component.css';
 
const PlanetInfo = ({id}) => {

  let [planet, setPlanet] = useState('');



  useEffect( () => {
    console.log('useEffect');

    const callback = {
      flag: true,
      
      setData(data) {
        if(this.flag) setPlanet(data)
      },
      cancel() {
        this.flag = false
      }
    }

    if(id) getData(id, callback);
    
    return () => callback.cancel();
  },
  [id])



  return(
    <div className='Component'>
      <h3>PlanetInfo</h3>
      {planet}
    </div>
  )

  function getData(id, callback) {
    fetch(`https://swapi.co/api/planets/${id}`)
		  .then(res => res.json())
		  .then(data => callback.setData(data.name))
  }
}
 
export default PlanetInfo;