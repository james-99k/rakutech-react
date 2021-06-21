import React from 'react'
import './signin.scss'
import Logo from '../Authentication/logo'
import SignIn from '../Authentication/signin'

const signin = () => {
    return (
        <div className="wallpaper">
            <div className="auth-container">
                <Logo />
                <SignIn />
            </div>
        </div>
    )
}

export default signin