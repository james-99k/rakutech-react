import React, { useState, useEffect } from 'react'
import './navTab.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUser, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const NavHeader = ({ cart }) => {
    const arrowDown = <FontAwesomeIcon icon={faCaretDown} />
    const user = <FontAwesomeIcon icon={faUser} />
    const basket = <FontAwesomeIcon icon={faShoppingBasket} />
    const search = <FontAwesomeIcon icon={faSearch} />

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0
        cart.forEach((item) => {
            count += item.qty
        })

        setCartCount(count)
    }, [cart, cartCount])

    return (
        <div className="navHeader">
            <div className="navHeader__left">
                <ul className="navHeader__left--menu">
                    <li className="dropdown__options"><a href='#' className="dropdown language">EN {arrowDown}</a>
                        <ul>
                            <li className="dropdown__options--tab"><a href='#'>JP</a></li>
                            <li className="dropdown__options--tab"><a href='#'>PH</a></li>
                        </ul>
                    </li>
                    <li className="dropdown__options"><a href='#' className="dropdown currency">USD {arrowDown}</a>
                        <ul>
                            <li className="dropdown__options--tab"><a href='#'>JPY</a></li>
                            <li className="dropdown__options--tab"><a href='#'>PHP</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navHeader__right">
                <Link to="/signin">
                    <button className="navHeader__right--profile" >
                        {user} Sign in
                    </button>
                </Link>
                <Link to="/checkout">
                    <button className="navHeader__right--cart">
                        {basket}
                        {cartCount}
                        <span>Items</span>
                    </button>
                </Link>
                <span className="navHeader__right--total">
                    <span>$</span>
                    <input className="total__navHeader" type="number" value="0" disabled />
                </span>
                <button className="navHeader__right--search">
                    {search}
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps)(NavHeader)