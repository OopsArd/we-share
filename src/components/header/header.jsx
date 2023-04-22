import React, { useState } from 'react'

import './header.css'
import { HomeFilled, FileImageFilled, VideoCameraFilled, 
    FireFilled, StarFilled, 
    PlusCircleFilled, LoginOutlined, UserAddOutlined } from '@ant-design/icons'

const header = () => {
    const [action, setAction] = useState(false);
  return (
    <div className='header'>
        <div className="logo">
            <span>Logo</span>
        </div>
        <nav>
            <div className="nav-item action">
                <span> 
                    <span className="icon">
                        <HomeFilled />
                    </span> 
                    Home
                </span>
            </div>
            <div className="nav-item">
                <span> 
                    <span className="icon">
                        <FileImageFilled />
                    </span>
                     Collections
                </span>
            </div>
            <div className="nav-item">
                <span> <span className="icon">
                        <VideoCameraFilled />
                    </span>
                    Shorts
                </span>
            </div>
            <div className="nav-item">
                <span> 
                    <span className="icon">
                        <FireFilled />
                    </span> 
                    Trending
                </span>
            </div>
            <div className="nav-item">
                <span> 
                    <span className="icon">
                        <StarFilled />
                    </span> 
                    Explore
                </span>
            </div>
        </nav>
        <div className="user-options">
            <span className="icon"><PlusCircleFilled/></span>
            <span className="icon"><LoginOutlined/></span>
            <span className="icon"><UserAddOutlined/></span>
        </div>
    </div>
  )
}

export default header