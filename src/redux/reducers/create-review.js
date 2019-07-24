import * as types from '../types'

const initialState = {
    data: { id: 0 },
    loading: false,
    error: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_REVIEW:
            return {
                ...state,
                loading: true,
                data: { id: 0 }
            }
        case types.ADD_PRODUCT_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: false,
                errorMessage: ''
            }
        case types.ADD_PRODUCT_REVIEW_FAILED:
            return {
                ...state,
                loading: false,
                data: { id: 0 },
                error: true,
                errorMessage: action.error
            }
        default:
            return state
    }
}

export default reducer
