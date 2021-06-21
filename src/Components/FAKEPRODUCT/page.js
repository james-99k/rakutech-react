import fakeProduct from './fakeProductContainer'
import { connect } from 'react-redux'
import { addProducts } from './productAction'

const mapStateToProps = state => {
    return {
        products: state.cart.products,
    }
}

const mapDispatchToProps = dispatch => ({
    addToCartHandler: product =>dispatch(addProducts(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(fakeProduct)