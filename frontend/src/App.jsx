import React,{useContext} from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import UserLogout from './pages/UserLogout'
import CaptainLogout from './pages/CaptainLogout'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/riding" element={<Riding/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/home" element={<UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>} />

        <Route path='/user/logout' element={<UserProtectWrapper>
          <UserLogout/>
        </UserProtectWrapper>}/>

        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/captain-home" element={<CaptainProtectWrapper>
          <CaptainHome/>
          </CaptainProtectWrapper>}/>
        <Route path='/captain/logout' element={<CaptainProtectWrapper>
          <CaptainLogout/>
        </CaptainProtectWrapper>}/>
        <Route path='/captain/riding' element={<CaptainRiding/>}/>
      </Routes>
    </div>
  )
}

export default App
