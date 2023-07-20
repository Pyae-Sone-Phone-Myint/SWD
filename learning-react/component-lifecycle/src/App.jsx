import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
