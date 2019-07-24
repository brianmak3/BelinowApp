import * as types from '../types'

export default function (state = [], action) {
	switch (action.type) {

		case types.GET_CART_SUCCESS:
			return state;

		case types.ADD_TO_CART_SUCCESS:  
 
			if (state.length === 0) {
				return [
					...state,
					action.item
				]
			} else {
				
				let x = null

				if (state) {

					// find same product
					state.map(item => {
						if (item.id === action.item.id) {
							let z = true
							for (let i = 0; i < item.attributes.length; i++) { 
								if (item.attributes[i] !== action.item.attributes[i]) {
									z = false
								}
							}
							if (z){
								x = item
							}
						}
					})

					// increase the quantity if same attributes else add new cart item
					if (x != null) { 
						let y = true 
						for (let i = 0; i < x.attributes.length; i++) {
							if (x.attributes[i] !== action.item.attributes[i]) {
								y = false
							}
						}   
						if (y) {

							x.quantity = action.item.quantity === 'reset' ? 1 : action.item.quantity > 1 ? action.item.quantity : 1 + x.quantity
							return [
								...state
							]
						} else {
							return [
								...state,
								action.item
							];
						} 
					}

				}

				return [
					...state,
					action.item
				]

			}

		case types.REMOVE_FROM_CART_SUCCESS:
			return [
				...state.filter(i => i.cart_item_id !== action.item.cart_item_id)
			]

		case types.EMPTY_CART: 
			return [];
			
		default:
			return state

	}

}

 