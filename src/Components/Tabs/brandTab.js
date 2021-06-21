import React from 'react'
import './brandTab.scss'

const brandTab = () => {
    return (
        <div className="brand">
            <div className="brand__links">
                <h3>BRAND</h3>
                <ul>
                    <li><a href="#" className="link">Apple</a></li>
                    <li><a href="#" className="link">LG</a></li>
                    <li><a href="#" className="link">Samsung</a></li>
                    <li><a href="#" className="link">Siemens</a></li>
                </ul>
            </div>
            <div className="brand__quantity">
                <ul>
                    <li className="quantity">99</li>
                    <li className="quantity">99</li>
                    <li className="quantity">99</li>
                    <li className="quantity">99</li>
                </ul>
            </div>
        </div>
    )
}

export default brandTab