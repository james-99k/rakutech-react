import React from 'react'
import './store.scss'
import Tab from '../Header/navTab'
import Logo from '../Header/logo'
import NavMain from '../Navigation/navMain'

import History from '../Tabs/historyTab'
import StoreTab from '../Tabs/storeTab'
import PricesTab from '../Tabs/priceTab'
import ColorTab from '../Tabs/colorTab'
import BrandTab from '../Tabs/brandTab'
import Banner from '../Banner/bannerStore'
import Filter from '../Tabs/filter'
import Product from '../Card/storeProduct'
import Page from '../Tabs/pageTab'
import { connect } from 'react-redux'

const Store = ({ products }) => {
    return (
        <div>
            <Tab />
            <Logo />
            <NavMain />
            <History />
            <div className="container-store">
                <div className="left-store">
                    <StoreTab />
                    <PricesTab />
                    <ColorTab />
                    <BrandTab />
                    <div class="more">
                        <h3>MORE</h3>
                    </div>
                </div>
                <div className="right-store">
                    <Banner />
                    <Filter />
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                    <Page />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.cart.products,
    }
}

export default connect(mapStateToProps)(Store)