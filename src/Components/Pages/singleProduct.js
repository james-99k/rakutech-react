import React from 'react'
import './singleProduct.scss'
import Tab from '../Header/navTab'
import Logo from '../Header/logo'
import NavMain from '../Navigation/navMain'
import Product from '../Single-Item/product'

const SingleProduct = () => {
    return (
        <div>
            <Tab />
            <Logo />
            <NavMain />
            <Product />
        </div>
    )
}

export default SingleProduct
