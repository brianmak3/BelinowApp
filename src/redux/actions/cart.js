import *  as types from '../types'

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function getCart() {
    return (dispatch) => {
        dispatch({
            type: types.GET_CART_SUCCESS
        });
    }
}

export function addToCart(product, attributes, quantity) {
    return (dispatch) => {
        const cartItem = {
            "id": product.id,
            "image": product.images[0].src,
            "name": product.name,
            "product": product,
            "attributes": attributes,
            "quantity": quantity || 1,
            "cart_item_id": uuidv4()
        }
        dispatch({
            type: types.ADD_TO_CART_SUCCESS,
            item: cartItem
        });
    }
}

export function removeCart() {
    return (dispatch) => {
        dispatch({
            type: types.EMPTY_CART,
        });   
    }
}

export function removeFromCart(item) {
    return (dispatch) => {
        dispatch({
            type: types.REMOVE_FROM_CART_SUCCESS,
            item: item
        });
    }
}
