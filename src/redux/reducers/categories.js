import * as types from '../types'

const initialState = {
	data: [],
	loading: false,
	error: false,
	errorMessage: '',
	parents: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_PRODUCTS_CATEGORIES:
			return {
				...state,
				loading: true,
				data: [],
				parents: []
			}
		case types.FETCH_PRODUCTS_CATEGORIES_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.data,
				parents: action.data.filter(x => x.parent === 0 & x.name !== 'Uncategorized').reverse(),
				error: false,
				errorMessage: ''
			}
		case types.FETCH_PRODUCTS_CATEGORIES_FAILED:
			return {
				...state,
				loading: false,
				data: [],
				error: true,
				parents: [],
				errorMessage: action.error
			}
		default:
			return state
	}
}

export default reducer