import * as actionTypes from './cart-types'
import airpodMax from "../../Components/Images/airpodsMax.jpg"
import iphone11 from "../../Components/Images/iphone11-white.png"
import macBook from "../../Components/Images/macbook.png"
import keyboard from "../../Components/Images/magic-keyboard.png"
import ipad from "../../Components/Images/ipad.jpg"
import watch from "../../Components/Images/appleWatch.png"
import macBookAir from "../../Components/Images/macbook-air-space-gray.jpg"
import airPods from "../../Components/Images/airPods.jpg"

const initialState = {
    products: [{
        id: 1,
        hot: "HOT",
        img: airpodMax,
        title: "AirPod Max",
        rating: "star",
        price: 256,
        originalPrice: 359
    },

    {
        id: 2,
        hot: "",
        img: iphone11,
        title: "iPhone 11",
        rating: "star",
        price: 489,
        originalPrice: 796
    },

    {
        id: 3,
        hot: "",
        img: macBook,
        title: "Apple Macbook Pro",
        rating: "star",
        price: 499,
        originalPrice: 599
    },

    {
        id: 4,
        hot: "",
        img: keyboard,
        title: "Magic Keyboard for iPad Pro 11-inch",
        rating: "star",
        price: 299,
        originalPrice: 359
    },

    {
        id: 5,
        hot: "",
        img: ipad,
        title: "iPad (8th Generation)",
        rating: "star",
        price: 829,
        originalPrice: 1099
    },

    {
        id: 6,
        hot: "",
        img: watch,
        title: "Apple Watch",
        rating: "star",
        price: 399,
        originalPrice: 499
    },

    {
        id: 7,
        hot: "",
        img: macBookAir,
        title: "Apple Macbook Air",
        rating: "star",
        price: 415,
        originalPrice: 529
    },

    {
        id: 8,
        hot: "",
        img: airPods,
        title: "Air Pods Pro",
        rating: "star",
        price: 459,
        originalPrice: 599
    },],
    cart: [],
    currentItem: null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find((product) => product.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item)
                    : [...state.cart, { ...item, qty: 1 }],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        case actionTypes.INCREASE:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: +action.payload.qty + 1} : item)
            }
        case actionTypes.DECREASE:
            state = state.qty - 1
            return {
                state
            }
        default:
            return state
    }
}

export default cartReducer