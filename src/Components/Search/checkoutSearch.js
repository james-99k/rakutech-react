import React from 'react'
import './checkoutSearch.scss'

const checkoutSearch = () => {
    return (
        <div className="checkout-search">
                <form className="bar" action="action_page.php">
                    <input type="text" placeholder="Voucher code" name="search" />
                    <button type="submit" className="button">Redeem</button>
                </form>
            </div>
    )
}

export default checkoutSearch
