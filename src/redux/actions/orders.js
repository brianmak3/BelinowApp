import *  as types from '../types'
 
export function createOrder(data) {

    return (dispatch) => {
        let url = types.ordersURL()
        dispatch({ type: types.CREATE_ORDER })
        fetch(url, 
           {
               method: 'POST',
               headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
           })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.CREATE_ORDER_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.CREATE_ORDER_FAILED,
                    data: {id: 0},
                    error: err.message
                })
            })

    }
}

export function getOrders(id) {
    return (dispatch) => {
        let url = types.ordersURL(id)
        dispatch({ type: types.GET_ORDERS })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.GET_ORDERS_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.GET_ORDERS_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
}

