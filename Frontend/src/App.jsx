import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Todo from './Pages/Todo'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        
        
        <Route path='/todo/:todoId' element={<Todo />} />

        <Route path='*' element={<h1 className='text-5xl h-screen flex flex-col items-center justify-center'>
          <p>404</p>
          <p>page not found</p>
        </h1>} />
      </Routes>
    </div>
  )
}

export default App