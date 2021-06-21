import './historyTab.scss'

import React from 'react'

const historyTab = () => {
    return (
        <div className="history-bar">
            <ul className="history-bar__links">
                <li><a href="index.html">HOME</a><span> / </span></li>
                <li><a href="#">ACCESSORIES</a><span> / </span></li>
                <li><a href="#" className="active">Beat Solo2 on Ear Headphones - Black</a></li>
            </ul>
        </div>
    )
}

export default historyTab