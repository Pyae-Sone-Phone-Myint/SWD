import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const inputRef = useRef();
  const nav = useNavigate();

const Click = () => {
  nav("/contact",{state:{key:inputRef.current.value}})
  console.log(inputRef.current.value)
}

  return (
    <div>
        Home
        <input type="text" ref={inputRef} />
        <button onClick={Click}>Click me</button>
    </div>
  )
}

export default Home
