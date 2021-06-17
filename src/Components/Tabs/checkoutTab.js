import React from 'react'
import './checkoutTab.scss'

const checkoutTab = () => {
    return (
        <div className="tab-content">
            <div className="tab-content__product">
                PRODUCT
            </div>
            <div className="tab-content__price">
                PRICE
            </div>
            <div className="tab-content__quantity">
                QTY
            </div>
            <div className="tab-content__unit-price">
                UNIT PRICE
            </div>
        </div>
    )
}

export default checkoutTab
