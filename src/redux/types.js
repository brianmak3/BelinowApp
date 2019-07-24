import config from '../config'

export const BASE_URL = `${config.SITE_URL}/wp-json/wc/v3/`
export const API_URL = `${config.SITE_URL}/api/`
export const AUTH_PARAMS = `?consumer_key=${config.WC_CONSUMER_KEY}&consumer_secret=${config.WC_CONSUMER_SECRET}&`

export function getProductsURL(action, per_page) {
    return `${BASE_URL}products${action !== undefined ? `/${action}` : ''}` +
        `${AUTH_PARAMS}per_page=${per_page !== undefined ? per_page : (config.PRODUCTS_PER_PAGE || 10)}` +
        `&status=publish`
}

export function getSearchURL() {
    return `${BASE_URL}products${AUTH_PARAMS}&status=publish`
}

export function getCategoriesURL() {
    return `${BASE_URL}products/categories${AUTH_PARAMS}&status=publish&per_page=100`
}

export function getPaymentGatewaysURL() {
    return `${BASE_URL}payment_gateways${AUTH_PARAMS}`
}

export function getShippingZonesURL() {
    return `${BASE_URL}shipping/zones${AUTH_PARAMS}`
}

export function getShippingMethodsURL(id) {
    return `${BASE_URL}shipping/zones/${id}/methods${AUTH_PARAMS}`
}

export function getProductsReviewsURL() {
    return `${BASE_URL}products/reviews${AUTH_PARAMS}&status=approved`
}

export function ordersURL(customer_id) {
    return `${BASE_URL}orders${AUTH_PARAMS}&customer=${customer_id}&per_page=100`
}

export function getNonceURL(controller, method) {
    return `${API_URL}get_nonce/?controller=${controller}&method=${method}`
}

export function getRegisterURL() {
    return `${API_URL}user/register/?`
}

export function getLoginURL(nonce) {
    return `${API_URL}user/generate_auth_cookie/?nonce=${nonce}&`
}

export function getValidateCookieURL(cookie) {
    return `${API_URL}user/validate_auth_cookie?cookie=${cookie}`
}

export function getCustomerURL(id) {
    return `${BASE_URL}customers/${id}${AUTH_PARAMS}`
}

export function addReviewURL() {
    return `${BASE_URL}products/reviews${AUTH_PARAMS}`
}


export const GET_CART_SUCCESS = 'GET_CART_SUCCESS' 
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS'
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS'
export const EMPTY_CART = 'EMPTY_CART'

export const MAKE_ORDER = 'MAKE_ORDER'
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS'
export const MAKE_ORDER_FAILED = 'MAKE_ORDER_FAILED'
export const SAVE_ADDRESS = 'SAVE_ADDRESS'

export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS'
export const UPDATE_ADDRESS_FAILED = 'UPDATE_ADDRESS_FAILED'

export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'

export const GET_PAYMENT_GATEWAYS = 'GET_PAYMENT_GATEWAYS'
export const GET_PAYMENT_GATEWAYS_SUCCESS = 'GET_PAYMENT_GATEWAYS_SUCCESS'
export const GET_PAYMENT_GATEWAYS_FAILED = 'GET_PAYMENT_GATEWAYS_FAILED'

export const GET_SHIPPING_ZONES = 'GET_SHIPPING_ZONES'
export const GET_SHIPPING_ZONES_SUCCESS = 'GET_SHIPPING_ZONES_SUCCESS'
export const GET_SHIPPING_ZONES_FAILED = 'GET_SHIPPING_ZONES_FAILED'

export const GET_SHIPPING_METHODS = 'GET_SHIPPING_METHODS'
export const GET_SHIPPING_METHODS_SUCCESS = 'GET_SHIPPING_METHODS_SUCCESS'
export const GET_SHIPPING_METHODS_FAILED = 'GET_SHIPPING_METHODS_FAILED'

export const GET_WHISLIST = 'GET_WHISLIST'
export const ADD_TO_WHISLIST = 'ADD_TO_WHISLIST'
export const REMOVE_FROM_WHISLIST = 'REMOVE_FROM_WHISLIST'

export const GET_ORDERS = 'GET_ORDERS'
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS'
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED'

export const CREATE_ORDER = 'CREATE_ORDER'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED'

export const UPDATE_ORDER = 'UPDATE_ORDER'
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS'
export const UPDATE_ORDER_FAILED = 'UPDATE_ORDER_FAILED'


 
// HOME PAGE
export const FETCH_PRODUCTS_FEATURED = 'FETCH_PRODUCTS_FEATURED'
export const FETCH_PRODUCTS_FEATURED_SUCCESS = 'FETCH_PRODUCTS_FEATURED_SUCCESS'
export const FETCH_PRODUCTS_FEATURED_FALIED = 'FETCH_PRODUCTS_FEATURED_FALIED'

export const FETCH_PRODUCTS_GROUPED = 'FETCH_PRODUCTS_GROUPED'
export const FETCH_PRODUCTS_GROUPED_SUCCESS = 'FETCH_PRODUCTS_GROUPED_SUCCESS'
export const FETCH_PRODUCTS_GROUPED_FAILED = 'FETCH_PRODUCTS_GROUPED_FAILED'

export const FETCH_PRODUCTS_ORDER_BY_POPULARITY = 'FETCH_PRODUCTS_ORDER_BY_POPULARITY'
export const FETCH_PRODUCTS_ORDER_BY_POPULARITY_SUCCESS = 'FETCH_PRODUCTS_ORDER_BY_POPULARITY_SUCCESS'
export const FETCH_PRODUCTS_ORDER_BY_POPULARITY_FAILED = 'FETCH_PRODUCTS_ORDER_BY_POPULARITY_FAILED'

export const FETCH_PRODUCTS_ORDER_BY_RATING = 'FETCH_PRODUCTS_ORDER_BY_RATING'
export const FETCH_PRODUCTS_ORDER_BY_RATING_SUCCESS = 'FETCH_PRODUCTS_ORDER_BY_RATING_SUCCESS'
export const FETCH_PRODUCTS_ORDER_BY_RATING_FAILED = 'FETCH_PRODUCTS_ORDER_BY_RATING_FAILED'

// PRODUCT CATEGORIES
export const FETCH_PRODUCTS_CATEGORIES = 'FETCH_PRODUCTS_CATEGORIES'
export const FETCH_PRODUCTS_CATEGORIES_SUCCESS = 'FETCH_PRODUCTS_CATEGORIES_SUCCESS'
export const FETCH_PRODUCTS_CATEGORIES_FAILED = 'FETCH_PRODUCTS_CATEGORIES_FAILED'

// PRODUCTS FILTERED
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

// PRODUCTS FILTERED
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS'
export const SEARCH_PRODUCTS_FAILED = 'SEARCH_PRODUCTS_FAILED';

// PRODUCT FILTER PARAMTERS
export const PRODUCT_TYPE_SIMPLE = 'simple'
export const PRODUCT_TYPE_GROUPED = 'grouped'
export const PRODUCT_TYPE_EXTERNAL = 'external'
export const PRODUCT_TYPE_VARIABLE = 'variable'
export const PRODUCTS_ORDER_BY_POPULARITY = 'popularity'
export const PRODUCTS_ORDER_BY_RATING = 'rating'
export const PRODUCTS_ORDER_BY_PRICE_LOW = 'price'
export const PRODUCTS_ORDER_BY_PRICE_HIGH = 'price-desc'
export const PRODUCTS_ORDER_BY_DATE = 'date'
export const PRODUCTS_ORDER_BY_ID = 'id'
export const PRODUCTS_ORDER_BY_INCLUDE = 'include'
export const PRODUCTS_ORDER_BY_TITLE = 'title'
export const PRODUCTS_ORDER_SORT_ASC = 'asc'
export const PRODUCTS_ORDER_SORT_DESC = 'desc'
export let PRODUCTS_FILTER_BY = {
    page: 1,
    type: undefined,
    tag: undefined,
    featured: undefined,
    category: undefined,
    onsale: undefined,
    min_price: undefined,
    max_price: undefined,
    search: undefined
}

  
export const FETCH_PRODUCTS_REVIEWS = 'FETCH_PRODUCTS_REVIEWS'
export const FETCH_PRODUCTS_REVIEWS_SUCCESS = 'FETCH_PRODUCTS_REVIEWS_SUCCESS'
export const FETCH_PRODUCTS_REVIEWS_FAILED = 'FETCH_PRODUCTS_REVIEWS_FAILED';
export const REVIEWS_SUCCESS_ADD_FETCH = 'REVIEWS_SUCCESS_ADD_FETCH'

export const GET_CURRENT_CUSTOMER = 'GET_CURRENT_CUSTOMER' 
export const UNAUTHORIZED_REQUEST = 'UNAUTHORIZED_REQUEST'
export const AUTHORIZED_REQUEST = 'AUTHORIZED_REQUEST'

export const ADD_PRODUCT_REVIEW = 'ADD_PRODUCT_REVIEW'
export const ADD_PRODUCT_REVIEW_SUCCESS = 'ADD_PRODUCT_REVIEW_SUCCESS'
export const ADD_PRODUCT_REVIEW_FAILED = 'ADD_PRODUCT_REVIEW_FAILED'

 