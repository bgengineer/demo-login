import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<LoginPage />} />
        <Route path='/register' element= {<RegistrationPage />} />
        <Route path='/home' element= {<HomePage />} />
      </Routes>
    </div>
  )
}

export default App