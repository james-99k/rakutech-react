import React from 'react'
import './logo.scss'
import { Link } from 'react-router-dom'

function logo() {
    return (
        <Link to="/">
            <div className="logo">
                <h1 className="logo__black">
                    RAKU
                </h1>
                <h1 className="logo__red">
                    TECH
                </h1>
            </div>
        </Link>
    )
}

export default logo