import React from 'react'
import './Login.css'
import { UserAddOutlined } from '@ant-design/icons'

const Login = () => {
  return (
    <div className='login'>
        <div className="login-form">
            <div className="form-title">Sign in</div>
            <div className="input-username">
              <input type="text" placeholder='Username' />
            </div>
            <div className="input-password">
              <input type='password' placeholder='Password'/>
            </div>
            <div className="more-options">
              <UserAddOutlined />
              <span>Create new account</span>
            </div>
            <button className='btn'>Sign in</button>
        </div>
    </div>
  )
}

export default Login