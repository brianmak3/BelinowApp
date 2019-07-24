import * as types from '../types'

/**
 * Get Products By Filter
 * @param {types.PRODUCTS_FILTER_BY} params
 */
export function getProducts(params) {
    return (dispatch) => {
        let url = types.getProductsURL()
        if (params.page !== undefined) url += `&page=${params.page || 1}`
        if (params.type !== undefined) url += `&type=${params.type}`
        if (params.tag !== undefined) url += `&tag=${params.tag}`
        if (params.featured !== undefined) url += `&featured=${params.featured}`
        if (params.category !== undefined) url += `&category=${params.category}`
        if (params.onsale !== undefined) url += `&onsale=${params.onsale}`
        if (params.min_price !== undefined) url += `&min_price=${params.min_price}`
        if (params.max_price !== undefined) url += `&max_price=${params.max_price}`
        if (params.search !== undefined) url += `&search=${params.search}`
        dispatch({ type: types.FETCH_PRODUCTS })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.FETCH_PRODUCTS_SUCCESS,
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: types.FETCH_PRODUCTS_FAILED,
                    data: [],
                    error: err.message
                })
            })
    }
}

/**
 * Get Featured Products
 */
export function getFeaturedProducts() {
    return (dispatch) => {
        let url = types.getProductsURL()
        url += '&featured=true'
        dispatch({ type: types.FETCH_PRODUCTS_FEATURED })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.FETCH_PRODUCTS_FEATURED_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.FETCH_PRODUCTS_FEATURED_FALIED,
                    data: [],
                    error: err.message
                })
            })

    }
}

/**
 * Get Grouped Type Products
 */
export function getGroupedProducts() {
    return (dispatch) => {
        let url = types.getProductsURL()
        url += `&type=${types.PRODUCT_TYPE_GROUPED}`
        dispatch({ type: types.FETCH_PRODUCTS_GROUPED })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.FETCH_PRODUCTS_GROUPED_SUCCESS,
                    data: json,
                })
            }) 
            .catch(err => {
                dispatch({
                    type: types.FETCH_PRODUCTS_GROUPED_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
}

/**
 * Get Popular Products
 */
export function getPopularProducts() {
    return (dispatch) => {
        let url = types.getProductsURL()
        url += `&orderby=${types.PRODUCTS_ORDER_BY_POPULARITY}`;
        dispatch({ type: types.FETCH_PRODUCTS_ORDER_BY_POPULARITY })
        fetch(url)
            .then(res => res.json())
            .then(json => {
               dispatch({
                    type: types.FETCH_PRODUCTS_ORDER_BY_POPULARITY_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.FETCH_PRODUCTS_ORDER_BY_POPULARITY_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
}

/**
 * Get Most Rated Products
 */
export function getRatingProducts() {
    return (dispatch) => {
        let url = types.getProductsURL()
        url += `&orderby=${types.PRODUCTS_ORDER_BY_RATING}`
        dispatch({ type: types.FETCH_PRODUCTS_ORDER_BY_RATING })
        fetch(url) 
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.FETCH_PRODUCTS_ORDER_BY_RATING_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.FETCH_PRODUCTS_ORDER_BY_RATING_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
}

/**
 * Get Product Categories
 */
export function getProductCategories() {
    return (dispatch) => {
        const url = types.getCategoriesURL() // action, per_page
        dispatch({ type: types.FETCH_PRODUCTS_CATEGORIES })
        fetch(url) 
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.FETCH_PRODUCTS_CATEGORIES_SUCCESS,
                    data: json.filter((item)=> {return item.count>=10} ).sort(() => 0.5 - Math.random()).slice(0, 12),
                })
            })
            .catch(err => {
                dispatch({
                    type: types.FETCH_PRODUCTS_CATEGORIES_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
}


/**
 * Get Product Reviews
 */
export function getProductReviews(product_id) {
    return (dispatch) => {
        const url = types.getProductsReviewsURL()
        dispatch({ type: types.FETCH_PRODUCTS_REVIEWS })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.FETCH_PRODUCTS_REVIEWS_SUCCESS,
                    data: json.filter(x=> x.product_id == product_id),
                })
            })
            .catch(err => {
                dispatch({
                    type: types.FETCH_PRODUCTS_REVIEWS_FAILED,
                    data: [],
                    error: err.message
                })
            })

    }
}


/**
 * Add Product Reviews
 */
export function addProductReview(review) {
    return (dispatch) => {
        const url = types.addReviewURL()
        dispatch({ type: types.ADD_PRODUCT_REVIEW })
        fetch(url,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            })
            .then(res => res.json())
            .then(json => {
                if (json.message){
                    dispatch({
                        type: types.ADD_PRODUCT_REVIEW_FAILED,
                        error: json.message
                    })
                } else {
                    dispatch({ type: types.ADD_PRODUCT_REVIEW_SUCCESS, data: json })
                }
            })
            .catch(err => {
                dispatch({
                    type: types.ADD_PRODUCT_REVIEW_FAILED,
                    error: err.message
                })
            })

    }
}


/**
 * Search Products
 */
export function searchProducts(searchTerm) {
    return (dispatch) => {
        let url = types.getSearchURL()
        url += `&search=${searchTerm}`
        dispatch({ type: types.SEARCH_PRODUCTS })
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: types.SEARCH_PRODUCTS_SUCCESS,
                    data: json,
                })
            })
            .catch(err => {
                dispatch({
                    type: types.SEARCH_PRODUCTS_FAILED,
                    data: [],
                    error: err.message
                })
            })
    }
}
export function removeSearchProducts(data){
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_PRODUCTS_SUCCESS,
            data: data
        })
    }
}

// getProducts(params)
// getFeaturedProducts()
// getGroupedProducts()
// getPopularProducts()
// getRatingProducts()
// getProductCategories()


// CODED 
// order	string	Order sort attribute ascending or descending.Options: asc and desc.Default is desc.
// orderby	string	Sort collection by object attribute.Options: date, id, include, title and slug.Default is date.
// page	integer	Current page of the collection.Default is 1.
// per_page	integer	Maximum number of items to be returned in result set.Default is 10.
// status	string	Limit result set to products assigned a specific status.Options: any, draft, pending, private and publish.Default is any.
// type string	Limit result set to products assigned a specific type.Options: simple, grouped, external and variable.
// featured	boolean	Limit result set to featured products.
// category	string	Limit result set to products assigned a specific category ID.
// tag	string	Limit result set to products assigned a specific tag ID.
// on_sale	boolean	Limit result set to products on sale.
// min_price	string	Limit result set to products based on a minimum price.
// max_price	string	Limit result set to products based on a maximum price.


// NOT CODED 
// sku	string	Limit result set to products with a specific SKU.
// after	string	Limit response to resources published after a given ISO8601 compliant date.
// before	string	Limit response to resources published before a given ISO8601 compliant date.
// exclude	array	Ensure result set excludes specific IDs.
// include	array	Limit result set to specific ids.
// offset	integer	Offset the result set by a specific number of items.
// parent	array	Limit result set to those of particular parent IDs.
// parent_exclude	array	Limit result set to all items except those of a particular parent ID.
// slug	string	Limit result set to products with a specific slug.
// shipping_class	string	Limit result set to products assigned a specific shipping class ID.
// attribute	string	Limit result set to products with a specific attribute.
// attribute_term	string	Limit result set to products with a specific attribute term ID(required an assigned attribute).
// tax_class	string	Limit result set to products with a specific tax class.Default options: standard, reduced - rate and zero - rate.
// stock_status	string	Limit result set to products with specified stock status.Options: instock, outofstock and onbackorder.