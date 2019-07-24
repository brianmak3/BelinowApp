import *  as types from '../types'

export function getList() {
    return (dispatch) => {
        let url = types.getShippingZonesURL()
        dispatch({ type: types.GET_SHIPPING_ZONES })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.GET_SHIPPING_ZONES_SUCCESS,
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