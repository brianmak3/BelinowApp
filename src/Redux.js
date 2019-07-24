import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../src/redux/actions/products';
import * as WhislistAction from '../src/redux/actions/whislist';
import * as CurrentCustomer from '../src/redux/actions/current-customer';
import * as CartAction from '../src/redux/actions/cart'
import * as PaymentAction from '../src/redux/actions/payment'
import * as ShippingMethodsAction from '../src/redux/actions/shipping-methods'
export const Connect = connect;

export const mapStateToProps = (state)=>{
    return {
        productsFeatured: state.productsFeatured,
        productsGrouped: state.productsGrouped,
        productsRating: state.productsRating,
        productsPopular: state.productsPopular,
        categories: state.categories.parents,
        currentCustomer: state.currentCustomer.customer? state.currentCustomer.customer:{ID:0},
        cart: state.cart,
        productsSearch: state.productsSearch

    };
}

export const mapDispatchToProps = (dispatch)=> {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch),
        WhislistAction: bindActionCreators(WhislistAction, dispatch),
        CurrentCustomer: bindActionCreators(CurrentCustomer, dispatch),
        PaymentAction: bindActionCreators(PaymentAction, dispatch),
        CartAction: bindActionCreators(CartAction, dispatch),
        ShippingMethodsAction: bindActionCreators(ShippingMethodsAction, dispatch),
    };
}
