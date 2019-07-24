import * as types from '../types'

export default function (state = [], action) {
	switch (action.type) {

		case types.GET_WHISLIST:
			return state;

		case types.ADD_TO_WHISLIST:
			var exists = false;
			if (exists) {
				return state.map(item => {
					if (item.id === action.item.id) {
						exists = true;
						return {
							...item, 
						}
					} else {
						return item
					}
				});
			} else {
				return [
					...state,
					action.item
				];
			}

		case types.REMOVE_FROM_WHISLIST:
			return [
				...state.filter(i => i.id !== action.item.id)
			];

		default:
			return state;
	}
}
