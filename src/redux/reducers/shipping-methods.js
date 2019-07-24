import * as types from '../types'

const initialState = {
	data: [],
	loading: false,
	error: false,
	errorMessage: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_SHIPPING_METHODS:
			return {
				...state,
				loading: true,
				data: []
			}
		case types.GET_SHIPPING_METHODS_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.data.filter(x => x.enabled === true).sort((a, b) => a.order - b.order),
				error: false,
				errorMessage: ''
			}
		case types.GET_PAYMENT_GATEWAYS_FAILED:
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