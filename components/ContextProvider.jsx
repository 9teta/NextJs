'use client'
import { createContext, useState } from 'react'
 
export const AppContext = createContext({});

export default function ContextProvider({ children }) {

  const [count, setCount] = useState(0);

  return <AppContext.Provider value={{count,setCount}}>{children}</AppContext.Provider>
}
