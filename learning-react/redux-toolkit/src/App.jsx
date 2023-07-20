import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import { increment } from './features/counter/counterSlice'

const App = () => {
  const {value} = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <Navbar/>
      <h1>{value}</h1>
      <button className=' bg-cyan-400 py-1 px-2 text-white' onClick={() => dispatch(increment())}>Click</button>
    </>
  )
}

export default App
