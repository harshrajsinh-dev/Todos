import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import RegisterUser from './Pages/RegisterUser'
import LoginUser from './Pages/LoginUser'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App