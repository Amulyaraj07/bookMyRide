import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/home" element={<UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>} />

        <Route path='/user/logout' element={<UserProtectWrapper>
          
        </UserProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
