import React from 'react'
import { useState } from 'react'

import './home.css'

import Login from '../components/Login/login'
import Register from '../components/register/register'
import Header from '../components/header/header'
import { UserAddOutlined } from '@ant-design/icons'

const Home = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  

  return (
    <div className='home'>
        <Header />
        {isLogin && <Login handleLogin = {handleLogin} />}
        {isRegister && <Register handleRegister = {handleRegister} />}  
    </div>
  )
}

export default Home