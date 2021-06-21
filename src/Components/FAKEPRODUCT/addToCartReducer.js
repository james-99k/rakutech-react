import { ActionTypes } from './action-types'
import airpodMax from "./Images/airpods-max.jpg"
import iphone11 from "./Images/iphone11-white.png"
import macBook from "./Images/macbook.png"
import keyboard from "./Images/magic-keyboard.png"
import ipad from "./Images/ipad.jpg"
import watch from "./Images/appl-watch.png"
import macBookAir from "./Images/macbook-air-space-gray.jpg"
import airPods from "./Images/airPods.jpg"

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
    view: null
}

function addToCartReducer(state = initialState, action){
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTS:
            return [
                ...state, 
                {cardData: action.product}
            ]
        case ActionTypes.REMOVE_PRODUCT:
            return {
                
            }
        case ActionTypes.QUANTITY:
            return {
                
            }
        case ActionTypes.VIEW_PRODUCT:
            return {

            }
        default:
            return state
    }
}

export default addToCartReducer