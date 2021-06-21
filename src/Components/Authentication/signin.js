import React from 'react'
import './signin.scss'
import { Link } from 'react-router-dom'

const signIn = () => {
    return (
        <div className="right">
            <div className="right__title">
                <h1>Sign In</h1>
            </div>
            <button className="right__apple" >
                <i className="fab fa-apple"></i>
                        SIGN IN WITH APPLE
                    </button>
            <button className="right__facebook" >
                <i className="fab fa-facebook-f"></i>
                        SIGN IN WITH FACEBOOK
                    </button>
            <div className="right__or">
                <div className="line"></div> or <div className="line"></div>
            </div>
            <form action="">
                <div className="email">
                    <span>Email</span>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="password">
                    <span>Password</span>
                    <input type="password" name="password" id="password" required />
                </div>
                <button className="signin-btn" id="signin-btn">
                    <span>SIGN IN</span>
                </button>
            </form>

            <div className="right__terms">
                <p>By continuing, you agree to accept</p>
                <p>our Privacy Policy & Terms of Service.</p>
            </div>
            <div className="right__signup">
                Don't have an account?
                <Link to="/signup">
                    Create new account
                </Link>
            </div>
        </div>
    )
}

export default signIn