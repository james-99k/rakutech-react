import React from 'react'
import './storeProduct.scss'
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

        <Link to={`/product/${product.id}`}>
            <div className="accessories-list">
                <div className="accessories-list__left" onClick={() => loadCurrentItem(product)}>
                    <div className="accessories-list__left--image">
                        <img src={product.img} alt="" />
                    </div>
                </div>
                <div className="accessories-list__right">
                    <div className="accessories-list__right--title" onClick={() => loadCurrentItem(product)}>
                        {product.title}
                    </div>
                    <div className="accessories-list__right--review">
                        <div className="rating">
                            {star}
                            {star}
                            {star}
                            {star}
                            {star}
                        </div>
                        <div className="count">
                            0 reviews
                        </div>
                        <div className="link">
                            <a href="#">Submit a review</a>
                        </div>
                    </div>
                    <div className="accessories-list__right--price">
                        <div className="discounted">
                            ${product.price}
                        </div>
                        <div className="original">
                            ${product.originalPrice}
                        </div>
                    </div>
                    <div className="accessories-list__right--details">
                        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                        tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus
                        adipiscin vulputate g nisl ut dolor ...
                    </div>
                    <div className="accessories-list__right--buttons">
                        <div className="add-to-cart" onClick={() => addToCart(product.id)}>
                            {cart}
                            <span>Add To Cart</span>
                        </div>
                        <div className="favorite">
                            {heart}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    }
}

export default connect(null, mapDispatchToProps)(Card)