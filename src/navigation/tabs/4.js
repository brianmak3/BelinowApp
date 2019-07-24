import React from 'react'
import { createStackNavigator } from 'react-navigation'
import CartListScreen from '../../views/cart/list'
import CheckoutAddress from '../../views/checkout/address'
import CheckoutPayment from '../../views/checkout/payment'
import PaypalPayment from '../../views/checkout/payment/paypal'
import CheckoutComplete from '../../views/checkout/complete'
import CheckoutAgreement from '../../views/checkout/agreement'
import { Text, View } from 'react-native';
import {colors, Iconn}  from '../../common/Index';

const tabLabel = 'Cart'

import ProductScreenInCartScreen from '../../views/product/home'

const Cart = createStackNavigator({
    CartListScreen,
    CheckoutAddress,
    CheckoutPayment,
    PaypalPayment,
    CheckoutAgreement,
    CheckoutComplete 
})

const Stacks = createStackNavigator(
    {
        Cart,
        ProductScreenInCartScreen
    },
    {
        headerMode: 'none',
        mode: 'modal',
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
        },
        tabBarOptions: {
            tabBarVisible: true
        }
    }
)



export default {
    screen: Stacks,
    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center'}}>
                <Iconn  size={24} name={'cart'} color={focused ? colors.activeTab : colors.iconsColor} />
            </View>
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
            navigation.navigate('CartListScreen')
            defaultHandler()
        },
    }
}