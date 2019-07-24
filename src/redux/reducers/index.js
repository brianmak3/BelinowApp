import { combineReducers } from 'redux'
import cart from './cart'
import whislist from './whislist'
import categories from './categories'
import products from './products'
import productsFeatured from './products-featured'
import productsGrouped from './products-grouped'
import productsPopular from './products-popular'
import productsRating from './products-rating'
import productReviews from './product-reviews'
import productsSearch from './products-search'
import payment from './payment'
import shippingZones from './shipping-zones'
import shippingMethods from './shipping-methods'
import createOrder from './create-order'
import orders from './get-orders'
import currentCustomer from './current-customer'
import createReview from './create-review'

const RootReducer = combineReducers({
	cart,
	whislist,
	categories,
	products,
	productsFeatured,
	productsPopular,
	productsRating,
	productsGrouped,
	productReviews,
	payment,
	shippingZones,
	shippingMethods,
	createOrder,
	orders,
	currentCustomer,
	createReview,
	productsSearch
});

export default RootReducer;
