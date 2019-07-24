import * as types from '../types'

const initialState = {
	data: [],
	loading: false,
	error: false,
	errorMessage: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SEARCH_PRODUCTS:
			return {
				...state,
				loading: true,
				data: []
			}
		case types.SEARCH_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.data,
				error: false,
				errorMessage: ''
			}
		case types.SEARCH_PRODUCTS_FAILED:
			return {
				...state,
				loading: false,
				data: [],
				error: true,
				errorMessage: action.error
			}
		default:
			return state
	}
}

export default reducer