import *  as types from '../types'

export function getWhislist() {
    return (dispatch) => {
        dispatch({
            type: types.GET_WHISLIST
        });
    }
}

export function add(product) {
    return (dispatch) => {
        const cartItem = {
            "id": product.id,
            "image": product.images[0].src,
            "name": product.name,
            "product": product, 
        }
        dispatch({
            type: types.ADD_TO_WHISLIST,
            item: cartItem
        });
    }   
}

export function remove(item) {
    return (dispatch) => {
        dispatch({
            type: types.REMOVE_FROM_WHISLIST,
            item: item
        });
    }
}
