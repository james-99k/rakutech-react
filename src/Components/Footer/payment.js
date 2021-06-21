import React from 'react'
import './payment.scss'
import western from '../Images/westernUnion.png'
import master from '../Images/master.png'
import paypal from '../Images/Paypal.png'
import visa from '../Images/visa.jpg'

function payment() {
    return (
        <div className="payment">

            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>

            <ul className="payment__option">

                <li><img className="img" src={western} alt="Logo" /></li>
                <li><img className="img" src={master} alt="Logo" /></li>
                <li><img className="img" src={paypal} alt="Logo" /></li>
                <li><img className="img" src={visa} alt="Logo" /></li>

            </ul>

        </div>
    )
}

export default payment