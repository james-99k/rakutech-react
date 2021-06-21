import React from 'react'
import './signup.scss'
import { Link } from 'react-router-dom'

const signUp = () => {
    return (
        <div className="right">
            <div className="right__title">
                <h1>Sign Up</h1>
            </div>
            <div className="right__signin">
                Already have an account?
                <Link to="/signin">
                    Log in
                </Link>
            </div>
            <form action="/" method="GET" id="form">
                <div className="fullname">
                    <label>Full Name</label>
                    <input type="text" name="fullname" id="fullname" required />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="more than 6 characters" required />
                </div>
                <div className="right__email-updates">
                    <input type="checkbox" name="email-updates" id="email-updates" />
                    <p>Sign up for email updates.</p>
                </div>
                <div className="right__signup">
                    <button type="submit" id="signup-btn">SIGN UP
                            </button>
                </div>
                <div id="msg">
                    <pre>

                    </pre>
                </div>
            </form>
            <div className="right__terms">
                <p>By continuing, you agree to accept</p>
                <p>our Privacy Policy & Terms of Service.</p>
            </div>
        </div>
    )
}

export default signUp