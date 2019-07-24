import *  as types from '../types'

export function getGateways() {
    return (dispatch) => {
        let url = types.getPaymentGatewaysURL()
        dispatch({ type: types.GET_PAYMENT_GATEWAYS })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.GET_PAYMENT_GATEWAYS_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.GET_PAYMENT_GATEWAYS_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
} 