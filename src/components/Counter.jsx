import React from 'react'
import { counterContext } from "../context/Counter";
import { useContext } from "react";


const Counter = () => {
    const contextUpdate = useContext(counterContext);
  return (
    <>
    <div className=' text-5xl px-12 text-blue-50 font-mono font-extrabold' >
    <button className='absolute left-10 top-[410px]' onClick={ () => contextUpdate.setCount(contextUpdate.count + 1)}>Increment</button>
    <button  className='absolute right-10 top-[410px]' onClick={ () => contextUpdate.setCount(contextUpdate.count - 1)}>Decrement</button>
    </div>
    
    </>
  )
}

export default Counter

