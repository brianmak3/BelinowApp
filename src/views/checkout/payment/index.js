import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';

import Theme from '../../../theme/style'
import BackButton from '../../../theme/back'
import FormStyle from '../../../theme/form'
import Styles from '../style'
import * as CartAction from '../../../redux/actions/cart'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CurrentCustomer from '../../../redux/actions/current-customer'

const currency = 'RM'

class CheckoutPayment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            payment_method: undefined
        }
    }

    componentDidMount(){
       // this.props.CurrentCustomer.setCurrentCustomer()
       //alert('fd')
    }

    render() {
        const { payment } = this.props;
        const {
            payment_method
        } = this.state

        // initial payment method.
        if (payment.data && payment_method === undefined) {
            this.setState({ 
                payment_method: payment.data[0]
            })
        }

        return (
            <SafeAreaView style={Styles.container}>
                <View style={[Styles.content, {paddingHorizontal: 10}]}>
                    <View style={Styles.pageHeading}>
                        <Text style={Styles.pageHeadingText}>{'Payment Method'}</Text>
                    </View>
                    <View style={[Styles.options]}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            {payment.data && payment.data.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => { this.setState({ payment_method: item }) }}
                                        style={[Styles.optionLeft, payment_method && payment_method.id === item.id ? Styles.optionButtonCurrent : Styles.optionButton]}>
                                        <Image style={[Styles.optionImage, { width: '100%', height: '100%' }]}
                                            resizeMode={'contain'}
                                            source={
                                                item.id == 'paypal' ?
                                                    require('../../../assets/images/icon-paypal.png') :
                                                    item.id == 'cod' ?
                                                        require('../../../assets/images/Pay_on_Delivery-512.png') :
                                                        require('../../../assets/images/ic_card.png')
                                            }
                                        />
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <View style={Styles.cardDetails}>
                            <View style={Styles.paymentDescriptionWrapper}>
                                <Text style={Styles.paymentDescriptionText}>
                                    {payment_method && payment_method.description}
                                </Text>
                            </View>
                            <View style={Styles.cartPaymentTotal}>
                                <View style={Styles.subtotal}>
                                    <Text style={Styles.subtotalText}>{'Shipping'}</Text>
                                    <Text style={Styles.subtotalText2}>${this.getCartShipping()}</Text>
                                </View>
                                <View style={Styles.subtotal}>
                                    <Text style={Styles.subtotalText}>{'Subtotal'}</Text>
                                    <Text style={Styles.subtotalText2}>${this.getCartSubTotal()}</Text>
                                </View>
                            </View>
                            <View style={Styles.totalWrap}>
                                <Text style={Styles.totalText}>Total</Text>
                                <Text style={Styles.totalText2}>${this.getCartTotal()}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={[FormStyle.bottomButton, { marginBottom: 0 }]}>
                        <TouchableOpacity style={FormStyle.submitButton} onPress={() => { this.doCheckout() }}>
                            <Text style={FormStyle.submitButtonText}>{'CONFIRM ORDER'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
           
            </SafeAreaView>
        )
    }


    getCartTotal() {
        let total = parseFloat(this.getCartSubTotal())
        const shippingFlatRateValue = parseFloat(this.getCartShipping())
        total += shippingFlatRateValue;
        return total.toFixed(2)
    }

    getCartShipping() {
        const { navigation } = this.props
        const shipping = navigation.getParam('shipping')
        const value = shipping.shippingCost
        return value.toFixed(2)
    }

    getCartSubTotal() {
        const { cart } = this.props
        let total = 0
        cart.map((item) => {
            total += (parseFloat(item.product.sale_price) || parseFloat(item.product.price)) * item.quantity
        })
        return total.toFixed(2);
    }

    payWithPaypal(order) { 
        const { navigation } = this.props 
        navigation.navigate('PaypalPayment', { order })
    }

    doCheckout() {

        const { cart, currentCustomer, navigation } = this.props
        const shippingMethod = navigation.getParam('shipping')
        const { payment_method } = this.state
        const total = this.getCartTotal()
        const subtotal = this.getCartSubTotal()
        const shipping = this.getCartShipping()

        const order = {
            total, 
            subtotal,
            shipping,
            cart,
            currency,
            payment_method,
            customer_id: currentCustomer.customer.id,
            shippingMethod: shippingMethod
        }

        // create order
        if (payment_method.id === 'paypal') {
            this.payWithPaypal(order)
        }

    }


}

CheckoutPayment.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    title: 'PAYMENT',
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: (<View />)
})


function mapStateToProps(state) {
    return {
        payment: state.payment,
        cart: state.cart,
        currentCustomer: state.currentCustomer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        CartAction: bindActionCreators(CartAction, dispatch),
        CurrentCustomer: bindActionCreators(CurrentCustomer, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPayment);
