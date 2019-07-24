import * as types from '../types'

const initialState = {
    data: {id: 0},
    loading: true,
    error: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_ORDER:
            return {
                ...state,
                loading: true,
                data: {id: 0}
            }
        case types.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: false,
                errorMessage: ''
            }
        case types.CREATE_ORDER_FAILED:
            return {
                ...state,
                loading: false,
                data: {id: 0},
                error: true,
                errorMessage: action.error
            }
        default:
            return state
    }
}

export default reducer
