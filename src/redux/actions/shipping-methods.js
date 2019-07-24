import *  as types from '../types'

export function getList() {
    return (dispatch) => {
        let url = types.getShippingMethodsURL(0)
        dispatch({ type: types.GET_SHIPPING_METHODS })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.GET_SHIPPING_METHODS_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.GET_SHIPPING_ZONES_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
} 