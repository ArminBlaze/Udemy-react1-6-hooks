import React, { useEffect, useState  } from 'react';
import 'Component.css';
 
const PlanetInfo = ({id}) => {

  let [planet, setPlanet] = useState('');

  useEffect( () => {
    let cancelled = false;

    if(id) fetch(`https://swapi.co/api/planets/${id}`)
            .then(res => res.json())
            .then(data => !cancelled && setPlanet(data.name)) 
    
    return () => cancelled = true;
  },
  [id])


  return(
    <div className='Component'>
      <h3>PlanetInfo</h3>
      {planet}
    </div>
  )
}
 
export default PlanetInfo;