import * as types from '../types'

const initialState = {
	customer: undefined
}

export default function (state = initialState, action) {
	switch (action.type) {
		
		case types.GET_CURRENT_CUSTOMER:
			return {
				...state,
				customer:action.data
			}

		case types.AUTHORIZED_REQUEST:
			return {
				...state, 
			}

		case types.UNAUTHORIZED_REQUEST:
			return {
				state: initialState
			}
			
		default:
			return state;
	}
}
