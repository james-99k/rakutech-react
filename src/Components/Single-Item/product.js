import React from 'react'
import './product.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCaretDown, faMinus, faPlus, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { addToCart } from '../../Redux/Cart/cart-actions'

const product = ({ currentItem, addToCart }) => {
    const star = <FontAwesomeIcon className="star" icon={faStar} />
    const down = <FontAwesomeIcon className="down" icon={faCaretDown} />
    const minus = <FontAwesomeIcon className="minus" icon={faMinus} />
    const plus = <FontAwesomeIcon className="plus" icon={faPlus} />
    const cart = <FontAwesomeIcon className="cart" icon={faShoppingCart} />
    const heart = <FontAwesomeIcon className="heart" icon={faHeart} />

    return (
        <div className="product-container">
            <div className="product-container__left">
                <div className="top">
                    <div className="top__product">
                        <div className="product">
                            <div className="product__image">
                                <img src={currentItem.img} alt={currentItem.title} id="product__image" />
                            </div>
                            <div className="set">
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="details">

                        </div>
                    </div>
                    <div className="top__information">
                        <div className="title">
                            {currentItem.title}
                        </div>
                        <div className="review">
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
                        <div className="price">
                            <div className="discounted">
                                {currentItem.price}
                            </div>
                            <div className="original">
                                {currentItem.originalPrice}
                            </div>
                        </div>
                        <div className="availability">
                            <h5>Availability</h5>
                            <span>In Stock</span>
                        </div>
                        <div className="category">
                            <h5>Category</h5>
                            <span>Accessories</span>
                        </div>
                        <div className="shipping">
                            <h5>Free Shipping</h5>
                        </div>
                        <div className="color">
                            <h5>Select Color</h5>
                            <div className="choices">
                                <div className="black active"
                                    onclick="document.getElementById('product__image').src='images/beats_black.png'"></div>
                                <div className="red"
                                    onclick="document.getElementById('product__image').src='images/beats_red.png'"></div>
                                <div className="gold"
                                    onclick="document.getElementById('product__image').src='images/beats_gold.png'"></div>
                                <div className="pink"
                                    onclick="document.getElementById('product__image').src='images/beats_pink.png'"></div>
                                <div className="white"
                                    onclick="document.getElementById('product__image').src='images/beats_white.png'"></div>
                            </div>
                        </div>
                        <div className="size">
                            <h5>Size</h5>
                            <li className="dropdown__options"><a href='#' className="dropdown language">XS{down}</a>
                                <ul>
                                    <li className="dropdown__options--tab"><a href='#'>SM</a></li>
                                    <li className="dropdown__options--tab"><a href='#'>MD</a></li>
                                    <li className="dropdown__options--tab"><a href='#'>LG</a></li>
                                    <li className="dropdown__options--tab"><a href='#'>XL</a></li>
                                </ul>
                            </li>
                        </div>
                        <div className="buttons">
                            <div className="buttons__left">
                                <div className="add-to-cart" >
                                    {minus}
                                    <input className="quantity" type="number" value="0" disabled />
                                    {plus}
                                </div>
                            </div>
                            <div className="buttons__right">
                                <div className="add-to-cart" onClick={() => addToCart(currentItem.id)}>
                                    {cart}
                                    <span>Add To Cart</span>
                                </div>
                                <div className="favorite">
                                    {heart}
                                </div>
                            </div>
                        </div>
                        <div className="social">
                            <div className="facebook">
                                <i className="fab fa-facebook-f"></i>
                                <span>Share on Facebook</span>
                            </div>
                            <div className="twitter">
                                <i className="fab fa-twitter"></i>
                                <span>Share on Twitter</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom__container">
                        <div className="bottom__container--nav">
                            <ul>
                                <li><a href="#">Product Infomation</a></li>
                                <li><a href="#">Reviews <span>0</span></a></li>
                                <li><a href="#">Another tab</a></li>
                            </ul>
                        </div>
                        <div className="bottom__container--text">
                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                                tristique
                                ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices
                                posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor
                                dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at
                                ultricies
                                eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in
                                arcu
                                id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc
                                mattis
                                lobortis. </p>

                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                                tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus
                                et
                                ultrices posuere cubilia Curae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.cart.currentItem
    }
}

const mapDispatachToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatachToProps)(product)
