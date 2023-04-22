import React from 'react'

import './register.css'
import { CloseOutlined } from '@ant-design/icons'

const register = (props) => {
  return (
    <div className='form'>
         <button onClick={ props.handleRegister } className='btn-exit' >
            <CloseOutlined/>
        </button>
        <div className="register-form">
            <div className="form-title">Register</div>
            <div className="left">
                <div className="input-name">
                    <input type='text' placeholder='Name' />
                </div>
                <div className="input-email">
                    <input type='email' placeholder='Email' />
                </div>
                <div className="input-password">
                    <input type='password' placeholder='Password' />
                </div>
                <div className="input-confirm">
                    <input type='password' placeholder='Confirm Password' />
                </div>
                <button className='btn'>Register</button>
            </div>
            <div className="more-info">
                    <span>Have already an account ? 
                        <span to='/'> Login</span>
                    </span>
                </div>
        </div>
    </div>
  )
}

export default register