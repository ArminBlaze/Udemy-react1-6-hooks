import React, { useEffect, useState, useCallback  } from 'react';
import 'Component.css';

const getPlanet = (id) => {
  return fetch(`https://swapi.co/api/planets/${id}`)
          .then(res => res.json())
          .then(data => data) 
} 

const useRequest = (request) => {
  let [data, setData] = useState('');

  useEffect( () => {
    let cancelled = false;

    request()
      .then(data => !cancelled && setData(data))
    
    return () => cancelled = true;
  },
  [request])

  return data;
} 

const usePlanetInfo = (id) => {
  debugger;
  const request = () => getPlanet(id);

  // const callback = useCallback(request, [id]);

  return useRequest(request);
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