import React from 'react'
import './signup.scss'
import Logo from '../Authentication/logo'
import SignUp from '../Authentication/signup'

const signUp = () => {
    return (
        <div className="wallpaper">
            <div className="auth-container">
                <Logo />
                <SignUp />
            </div>
        </div>
    )
}

export default signUp