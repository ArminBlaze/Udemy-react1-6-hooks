import React, { useEffect, useState, useCallback, useMemo  } from 'react';
import 'Component.css';

const getPlanet = (id) => {
  console.log('getPlanet', id);
  
  return fetch(`https://swapi.co/api/planets/${id}`)
          .then(res => res.json())
          .then(data => data) 
} 

const useRequest = (request, flag) => {
  const initialState = useMemo( () => ({
		data: null,
		loading: false,
		error: null,
	}), [] )

  let [data, setData] = useState(initialState);

  useEffect( () => {
    let cancelled = false;
    
    if(flag) {
      setData(initialState)

      request()
        .then(data => !cancelled && setData({
          data,
          loading: false,
          error: null
        }))
        .catch(error => !cancelled && setData({
          data: null,
          loading: false,
          error
        }))
    }
    
    return () => cancelled = true;
  },
  [request, flag, initialState])

  return data;
} 

// const usePlanetInfo = (id) => {
//   const request = () => getPlanet(id);

//   const callback = useCallback(request, [id]);

//   return useRequest(callback);
// }

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]) ;

  return useRequest(request, id);
}
 
const PlanetInfo = ({id}) => {
  const planetInfo = usePlanetInfo(id);

  return(
    <div className='Component'>
      <h3>PlanetInfo</h3>
      {getData(planetInfo)}
    </div>
  )

}

function getData({data, loading, error}) {
  if(error) return <div>Что-то пошло не так</div>
  if(loading) return <div>Загрузка...</div>
  return data && data.name
}
 
export default PlanetInfo;