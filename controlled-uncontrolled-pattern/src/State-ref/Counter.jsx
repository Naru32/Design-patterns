import React, { useRef, useState } from 'react'

function Counter() {
const countRef = useRef(0)
const [countState,setCount] = useState(0)
  return (
    <>
    <h1>Difference between ref and state</h1>

    <p>Count with ref: {countRef.current}</p> 
    {/* ref preserves the count across re-renders */}
    <button onClick={()=> console.log(countRef.current = countRef.current + 1)}>+</button>
    <p>Count with state: {countState}</p>
    {/* state causes the re-render */}
    <button onClick={()=> setCount(countState + 1)}>+</button>
    </>
  )
}

export default Counter