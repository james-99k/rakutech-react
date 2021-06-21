import React from 'react'
import './pageTab.scss'

const pageTab = () => {
    return (
        <div className="accessories-page">
            <div className="accessories-page__number">1</div>
            <div className="accessories-page__number">2</div>
            <div className="accessories-page__number active">3</div>
            <div className="accessories-page__number">4</div>
            <div className="accessories-page__number">5</div>
        </div>
    )
}

export default pageTab