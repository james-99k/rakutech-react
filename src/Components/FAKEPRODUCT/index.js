import count from './countReducer';
import color from './colorReducer';
import product from './productReducer';
import addToCart from './addToCartReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    count,
    color,
    product,
    addToCart,
})

export default allReducers;