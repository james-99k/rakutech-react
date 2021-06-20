import React from 'react'
import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../Redux/Cart/cart-actions'

const Card = ({ product, addToCart, loadCurrentItem }) => {
    const heart = <FontAwesomeIcon className="heart" icon={faHeart} />
    const cart = <FontAwesomeIcon className="cart" icon={faShoppingCart} />
    const star = <FontAwesomeIcon className="star" icon={faStar} />

    return (

        <div>
            <div className="card" >
                <div className="card__top">
                    <div className="card__top--hot"><p>
                        {product.hot}
                    </p></div>
                    <div className="card__top--image">
                        <img className="product-img" src={product.img} alt={product.title} />
                    </div>
                    <div className="card__top--back">
                        <div className="circle">
                            {heart}
                        </div>
                        <button onClick={() => addToCart(product.id)} className="circle">
                            {cart}
                        </button>
                    </div>
                </div>
                <Link to={`/product/${product.id}`}>
                    <div className="card__title" onClick={() => loadCurrentItem(product)}>
                        {product.title}
                    </div>
                    <div className="card__rating">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                    </div>
                    <div className="card__price">
                        <div className="card__price--discounted">
                            {product.price}
                        </div>
                        <div className="card__price--original">
                            {product.originalPrice}
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    }
}

export default connect(null, mapDispatchToProps)(Card)