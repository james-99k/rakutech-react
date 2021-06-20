import React, { useState} from 'react'
import './cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { removeFromCart, increase, decrease, adjustQty } from '../../Redux/Cart/cart-actions'

const Cart = ({ itemData, removeFromCart, adjustQty}) => {
    const remove = <FontAwesomeIcon className="remove" icon={faTimes} />
    const minus = <FontAwesomeIcon icon={faMinus} />
    const plus = <FontAwesomeIcon icon={faPlus} />

    let unitPrice = itemData.price * itemData.qty

    const [input, setInput] = useState(itemData.qty)

    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }

    return (
        <div className="checkout-product">
            <div className="checkout-product__product">
                <button className="checkout-product__product--delete" onClick={() => removeFromCart(itemData.id)}>
                    {remove}
                </button>
                <div className="checkout-product__product--image">
                    <img src={itemData.img} alt={itemData.title} />
                </div>
                <div className="checkout-product__product--text">
                    {itemData.title}
                </div>
            </div>
            <div className="checkout-product__price">
                <span>$</span>
                {itemData.price}
            </div>
            <div className="checkout-product__quantity">
                <div className="checkout-product__quantity--button">
                    <button className="minus" onClick={() => decrease(itemData.qty)}>
                        {minus}
                    </button>
                    <input min="1" type="number" className="quantity" value={input} onChange={onChangeHandler}/>
                    <button className="plus" onClick={() => increase()}>
                        {plus}
                    </button>
                </div>
            </div>
            <div className="checkout-product__unit-price">
                <span>$</span>
                {unitPrice}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        increase: (id, value) => dispatch(increase(id, value)),
        decrease: (qty) => dispatch(decrease(qty)),
    }
}

export default connect(null, mapDispatchToProps)(Cart)
