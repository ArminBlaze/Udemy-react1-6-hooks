import { createContext } from 'react';
 
const myContext = createContext('default value.');

const Provider = myContext.Provider;

export default myContext; 
export {Provider};