import React from 'react'
import { createStackNavigator } from 'react-navigation'
const tabLabel = 'Me'
import { Text, View } from 'react-native';
import {colors, Iconn}  from '../../common/Index';
import Profile from '../../views/profile/home'
import NotificationScreen from '../../views/notification/home'
import OrdersScreen from '../../views/orders/home'
import Address from '../../views/address/home'
import LanguageScreen from '../../views/language/home'
import WhislistScreen from '../../views/whislist/home'
import ProductScreenInProfile from '../../views/product/home'
import Settings from '../../views/settings/home'
import MyOrders from '../../views/orders/MyOrders'



const Stacks = createStackNavigator(
    {
        Profile,
        NotificationScreen,
        OrdersScreen,
        Address,
        LanguageScreen,
        WhislistScreen,
        MyOrders,
        Settings
    },
    {
       
        tabBarOptions: {
            tabBarVisible: false
        },
    }
)

Stacks.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true,routeName;
     routeName = navigation.state.routes[navigation.state.index].routeName;
    if(routeName !=='Profile')
      tabBarVisible = false
    return {tabBarVisible}
}
export default {
    screen: Stacks,
    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center'}}>
                <Iconn  size={24} name={'person'} color={focused ? colors.activeTab : colors.iconsColor} />
            </View>
        )
    }
} 

