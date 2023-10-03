'use client'
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

export default function ClientCounterComponent({ children }) {

  const appContext = useContext(AppContext);
  const {count, setCount} = appContext;

  return (
    <div onClick={() => setCount(count+1)}>{children}</div>
  )
}

