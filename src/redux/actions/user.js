import *  as types from '../types'

export function getUser(id) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER,
        });

        let url = types.getCustomerURL(id)
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                dispatch({
                    type: types.GET_USER_SUCCESS,
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: types.GET_USER_FAILED,
                })
            })
    }
} 