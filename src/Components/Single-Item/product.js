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
        <div class="product-container">
            <div class="product-container__left">
                <div class="top">
                    <div class="top__product">
                        <div class="product">
                            <div class="product__image">
                                <img src={currentItem.img} alt={currentItem.title} id="product__image" />
                            </div>
                            <div class="set">
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div class="details">

                        </div>
                    </div>
                    <div class="top__information">
                        <div class="title">
                            {currentItem.title}
                        </div>
                        <div class="review">
                            <div class="rating">
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </div>
                            <div class="count">
                                0 reviews
                            </div>
                            <div class="link">
                                <a href="#">Submit a review</a>
                            </div>
                        </div>
                        <div class="price">
                            <div class="discounted">
                                {currentItem.price}
                            </div>
                            <div class="original">
                                {currentItem.originalPrice}
                            </div>
                        </div>
                        <div class="availability">
                            <h5>Availability</h5>
                            <span>In Stock</span>
                        </div>
                        <div class="category">
                            <h5>Category</h5>
                            <span>Accessories</span>
                        </div>
                        <div class="shipping">
                            <h5>Free Shipping</h5>
                        </div>
                        <div class="color">
                            <h5>Select Color</h5>
                            <div class="choices">
                                <div class="black active"
                                    onclick="document.getElementById('product__image').src='images/beats_black.png'"></div>
                                <div class="red"
                                    onclick="document.getElementById('product__image').src='images/beats_red.png'"></div>
                                <div class="gold"
                                    onclick="document.getElementById('product__image').src='images/beats_gold.png'"></div>
                                <div class="pink"
                                    onclick="document.getElementById('product__image').src='images/beats_pink.png'"></div>
                                <div class="white"
                                    onclick="document.getElementById('product__image').src='images/beats_white.png'"></div>
                            </div>
                        </div>
                        <div class="size">
                            <h5>Size</h5>
                            <li class="dropdown__options"><a href='#' class="dropdown language">XS{down}</a>
                                <ul>
                                    <li class="dropdown__options--tab"><a href='#'>SM</a></li>
                                    <li class="dropdown__options--tab"><a href='#'>MD</a></li>
                                    <li class="dropdown__options--tab"><a href='#'>LG</a></li>
                                    <li class="dropdown__options--tab"><a href='#'>XL</a></li>
                                </ul>
                            </li>
                        </div>
                        <div class="buttons">
                            <div class="buttons__left">
                                <div class="add-to-cart" >
                                    {minus}
                                    <input class="quantity" type="number" value="0" disabled />
                                    {plus}
                                </div>
                            </div>
                            <div class="buttons__right">
                                <div class="add-to-cart" onClick={() => addToCart(currentItem.id)}>
                                    {cart}
                                    <span>Add To Cart</span>
                                </div>
                                <div class="favorite">
                                    {heart}
                                </div>
                            </div>
                        </div>
                        <div class="social">
                            <div class="facebook">
                                <i class="fab fa-facebook-f"></i>
                                <span>Share on Facebook</span>
                            </div>
                            <div class="twitter">
                                <i class="fab fa-twitter"></i>
                                <span>Share on Twitter</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="bottom__container">
                        <div class="bottom__container--nav">
                            <ul>
                                <li><a href="#">Product Infomation</a></li>
                                <li><a href="#">Reviews <span>0</span></a></li>
                                <li><a href="#">Another tab</a></li>
                            </ul>
                        </div>
                        <div class="bottom__container--text">
                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                                tristique
                                ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices
                                posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor
                                dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora
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
