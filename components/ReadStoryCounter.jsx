'use client'
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

export default function ReadStoryCounter(props) {

  const appContext = useContext(AppContext);
  const {count,setCount} = appContext;

  return (
    <div>News read: {count}</div>
  )
}
