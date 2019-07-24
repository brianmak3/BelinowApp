import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";

import Theme from '../../../theme/style' 
import FormStyle from '../../../theme/form'
import Styles from '../style' 

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CurrentCustomer from '../../../redux/actions/current-customer'
import * as OrderAction from '../../../redux/actions/orders'
import * as CartAction from '../../../redux/actions/cart'

class CheckoutComplete extends Component {

    constructor(props) {
        super(props)
    }

    complete(id) {
        this.props.navigation.navigate('OrdersScreen', { id })
    }

    componentWillMount() {
        const { navigation, currentCustomer } = this.props;
        const order = navigation.getParam('order')
        
        if (order === undefined) {
            navigation.goBack()
        } else {

            let line_items = []
            order.cart.map((item) => {
                line_items.push({
                    product_id: item.id,
                    quantity: item.quantity,
                    name: item.name + " (" + item.attributes.join(", ") + ")",
                    price: (parseFloat(item.product.sale_price) || parseFloat(item.product.price)).toFixed(2).toString(),
                    sku: item.product.sku || '',
                    total: parseFloat((parseFloat(item.product.sale_price) || parseFloat(item.product.price)) * item.quantity).toFixed(2).toString()
                })
            })


            var data = {
                payment_method: order.payment_method.id,
                payment_method_title: order.payment_method.title,
                transaction_id: order.transactionid,
                set_paid: true,
                customer_id: currentCustomer.customer.id,
                billing: currentCustomer.customer.billing,
                shipping: currentCustomer.customer.shipping,
                line_items: line_items,
                shipping_lines: [
                    {
                        method_id: order.shippingMethod.shippingMethod.id,
                        method_title: order.shippingMethod.shippingMethod.title,
                        total: parseFloat(order.shippingMethod.shippingCost).toFixed(2)
                    }
                ]
            };
            this.props.OrderAction.createOrder(data)
        }
    }

    render() {
        const { order, CartAction } = this.props;
        if (order.id == 0 || order.loading == true) {
            return (
                <View style={Styles.container}>
                    <View style={Styles.loadingContainer}>
                        <Image source={require('../../../assets/images/loading.gif')} resizeMode={'contain'} style={Styles.loadingImage} />
                        <Text style={Styles.loadingText}>
                            {'Payment processing please wait...'}
                        </Text>
                    </View>
                </View>
            )
        } else {
            CartAction.removeCart();
            
            return (
                <View style={Styles.container}>
                    <View style={Styles.pageContentComplete}>
                        <View style={Styles.iconcCheckWrap}>
                            <Image style={Styles.iconCheck} resizeMode={'contain'}
                                source={require('../../../assets/images/ic_done.png')} />
                        </View>
                        <View style={Styles.thankyou}>
                            <Text style={Styles.thankyouText}>{'Payment Complete'}</Text>
                        </View>
                    </View>
                    <View style={Styles.desc}>
                        <Text style={Styles.descText}>{'Order code is '}</Text>
                        <Text style={Styles.descLinkText} onPress={() => { this.complete(order.data.id) }}>
                            {'#SX' + order.data.id + ' '}
                        </Text>
                        <Text style={Styles.descText}>
                            {'Please check the delivery status at '}
                        </Text>
                        <Text style={Styles.descLinkText} onPress={() => { this.complete(order.data.id) }}>
                            {'Order Tracker Page'}
                        </Text>
                    </View>
                    <View style={FormStyle.bottomButton}>
                        <TouchableOpacity style={FormStyle.submitButton} onPress={() => { this.complete() }}>
                            <Text style={FormStyle.submitButtonText}>{'CONTINUE SHOPPING'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

    }



}

CheckoutComplete.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    title: '',
    headerLeft: (<View />),
    headerRight: (<View />) 
})

function mapStateToProps(state) {
    return {
        order: state.createOrder,
        address: state.address,
        currentCustomer: state.currentCustomer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        OrderAction: bindActionCreators(OrderAction, dispatch),
        CurrentCustomer: bindActionCreators(CurrentCustomer, dispatch),
        CartAction: bindActionCreators(CartAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComplete);


 