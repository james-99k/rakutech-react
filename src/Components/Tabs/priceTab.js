import React from 'react'
import './priceTab.scss'

const pricesTab = () => {
    return (
        <div className="prices">
            <h3>PRICES</h3>
            <div className="prices__ranger">
                <span>Ranger:</span>
                <div className="prices__ranger--price">
                    <span>$13.99</span>
                    <span> - </span>
                    <span>$25.99</span>
                </div>
            </div>
            <div className="slider">

            </div>
        </div>
    )
}

export default pricesTab