import React from 'react'
import './colorTab.scss'

const colorTab = () => {
    return (
        <div className="color">
            <h3>COLORS</h3>
            <div className="color__choices">
                <div className="blue active"></div>
                <div className="red"></div>
                <div className="black"></div>
                <div className="gold"></div>
                <div className="pink"></div>
                <div className="white"></div>
            </div>
        </div>
    )
}

export default colorTab