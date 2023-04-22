import React from 'react'
import { useState } from 'react'

import './login.css'
import { UserAddOutlined, CloseOutlined } from '@ant-design/icons'

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  console.log(username, password);

  const handleSubmit = () => {
      const user =  [username, password];
      localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <div className='form'>
      <button onClick={ props.handleLogin } className='btn-exit' >
        <CloseOutlined/>
      </button>
      <div className="login-form">
          <div className="form-title">Sign in</div>
          <div className="input-username">
            <input 
              value={username}
              type="text" 
              onChange= {(e)=> setUsername(e.target.value)} 
              placeholder='Username' 
            />
          </div>
          <div className="input-password">
            <input 
              value={password} 
              onChange= {(e)=> setPassword(e.target.value)}  
              type='password' 
              placeholder='Password'
            />
          </div>
          <div className="more-options">
            <UserAddOutlined />
            <span>Create new account</span>
          </div>
          <button onClick={ handleSubmit } className='btn'>Sign in</button>
      </div>
    </div>
  )
}

export default Login