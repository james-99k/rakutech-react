import {ActionTypes} from './action-types'

export const addProducts = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCTS,
        payload: product,
    }
}

export const removeProducts = (product) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: product,
    }
}