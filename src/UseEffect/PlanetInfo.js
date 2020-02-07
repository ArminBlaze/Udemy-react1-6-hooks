import React, { useEffect, useState, useCallback  } from 'react';
import 'Component.css';

const getPlanet = (id) => {
  console.log('getPlanet', id);
  
  return fetch(`https://swapi.co/api/planets/${id}`)
          .then(res => res.json())
          .then(data => data) 
} 

const useRequest = (request, flag) => {
  let [data, setData] = useState('');

  useEffect( () => {
    let cancelled = false;


    if(flag) request()
      .then(data => !cancelled && setData(data))
    
    return () => cancelled = true;
  },
  [request, flag])

  return data;
} 

// const usePlanetInfo = (id) => {
//   const request = () => getPlanet(id);

//   const callback = useCallback(request, [id]);

//   return useRequest(callback);
// }

const usePlanetInfo = (id) => {
  const request = () => getPlanet(id);

  const callback = useCallback(request, [id]);

  return useRequest(callback, id);
}
 
const PlanetInfo = ({id}) => {

  const data = usePlanetInfo(id);


  return(
    <div className='Component'>
      <h3>PlanetInfo</h3>
      {data.name}
    </div>
  )
}
 
export default PlanetInfo;