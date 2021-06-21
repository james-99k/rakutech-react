import React, { useState, useEffect } from 'react'
import './checkout.scss'
import Tab from '../Header/navTab'
import Logo from '../Header/logo'
import NavMain from '../Navigation/navMain'
import TabCheckout from '../Tabs/checkoutTab'
import Cart from '../Cart/cart'
import CheckoutSearch from '../Search/checkoutSearch'
import { connect } from 'react-redux'

const Checkout = ({ cart }) => {

    const [subPrice, setSubPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let sub = 0
        let total = 0

        cart.forEach(item => {
            sub += item.qty * item.price
            total = sub + 20
        })

        setSubPrice(sub)
        setTotalPrice(total)
    }, [cart, subPrice, totalPrice, setSubPrice, setTotalPrice])

    return (
        <div>
            <Tab />
            <Logo />
            <NavMain />
            <TabCheckout />
            {cart.map((item) => (
                <Cart key={item.id} itemData={item} />
            ))}
            <div className="checkout-bottom">
                <CheckoutSearch />
                <div className="checkout-content">
                    <div className="checkout-content__information">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <div className="substotal__value">
                                <span>$</span>
                                <input className="subtotal__value--price" type="number" value={subPrice} disabled />
                            </div>
                        </div>
                        <div className="shipping">
                            <span>Shipping fee</span>
                            <div className="shipping__value">
                                <span>$</span>
                                <input className="shipping__value--price" type="number" value="20" disabled />
                            </div>
                        </div>
                        <div className="coupon">
                            <span>Coupon</span>
                            <span>none</span>
                        </div>
                        <div className="total">
                            <span>TOTAL</span>
                            <div className="total__value">
                                <span>$</span>
                                <input className="total__value--price" type="number" value={totalPrice} disabled />
                            </div>
                        </div>
                        <div className="button">
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps)(Checkout)