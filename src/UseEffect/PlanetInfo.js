import React, { useEffect, useState  } from 'react';
import 'Component.css';

const usePlanetInfo = (id) => {
  let [name, setPlanet] = useState('');

  useEffect( () => {
    let cancelled = false;

    if(id) fetch(`https://swapi.co/api/planets/${id}`)
            .then(res => res.json())
            .then(data => !cancelled && setPlanet(data.name)) 
    
    return () => cancelled = true;
  },
  [id])

  return name;
}
 
const PlanetInfo = ({id}) => {

  const name = usePlanetInfo(id);


  return(
    <div className='Component'>
      <h3>PlanetInfo</h3>
      {name}
    </div>
  )
}
 
export default PlanetInfo;