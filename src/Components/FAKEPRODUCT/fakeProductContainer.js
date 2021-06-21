import React, { useState, useEffect, useMemo } from 'react'
import './fakeProductContainer.scss'
import Tab from '../Header/navTab'
import Logo from '../Header/logo'
import NavMain from '../Navigation/navMain'
import Search from '../Search/searchHome';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../Redux/Cart/cart-actions'

const FakeProduct = (props) => {

    console.warn(props.product)
    const [fakeProducts, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setProduct(res.data)
                setLoading(true)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const renderList = fakeProducts.map((products, product, addToCart, loadCurrentItem) => {
        const { image, title, price, description, addCart } = products
        return (
            <div class="fakeProduct">
                <div class="fakeProduct__left">
                    <Link to={`/product/${product.id}`}>
                        <div class="fakeProduct__left--image" onClick={() => loadCurrentItem(product)}>
                            <img src={image} alt="" />
                        </div>
                    </Link>
                </div>
                <div class="fakeProduct__right">
                    <div class="fakeProduct__right--title">
                        {title}
                    </div>
                    <div class="fakeProduct__right--review">
                        <div class="rating">
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                        </div>
                        <div class="count">
                            0 reviews
                        </div>
                        <div class="link">
                            <a href="#">Submit a review</a>
                        </div>
                    </div>
                    <div class="fakeProduct__right--price">
                        <div class="discounted">
                            ${price}
                        </div>
                        <div class="original">
                        </div>
                    </div>
                    <div class="fakeProduct__right--details">
                        {description}
                    </div>
                    <div class="fakeProduct__right--buttons">
                        <button class="add-to-cart" onClick={() => addToCart(product.id)}>
                            <i class="fas fa-shopping-cart"></i>
                            <span>Add To Cart</span>
                        </button>
                        <button class="favorite">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Tab />
            <Logo />
            <NavMain />
            {loading ? (<>{renderList}</>) : (<div className="loader">
                <div></div>
            </div>)}
            <Search />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    }
}

export default connect(null, mapDispatchToProps)(FakeProduct)