import React from 'react'
import './home.scss'
import Tab from '../Header/navTab'
import Logo from '../Header/logo'
import Card from '../Card/card'
import { connect } from 'react-redux'

const Home = ({ products }) => {
    return (
        <div>
            <Tab />
            <Logo />
            <div className="cardList">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
}

export default connect(mapStateToProps)(Home)