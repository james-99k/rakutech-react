import React from 'react'
import './logo.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="left">
            <Link to="/">
                <div className="left__title">
                    <h1 className="logo-white">
                        RAKU
                        </h1>
                    <h1 className="logo-red">
                        TECH
                        </h1>

                </div>
            </Link>
            <div className="left__design">
                <div className="line"></div>
            </div>
            <div className="left__text">
                Browse from over 500 devices in your area.
                    </div>
        </div>
    )
}

export default Logo