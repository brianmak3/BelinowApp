import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const tabLabel = 'Home'

import HomeScreen from '../../views/home/home'
import ProductScreen from '../../views/product/home'
import ProductReviewsScreen from '../../views/product/reviews'
import AddReviewScreen from '../../views/product/add-review'
import SearchScreen from '../../views/search/home'
import ReportScreen from '../../views/Report/Report';
import {colors, Iconn}  from '../../common/Index';

const Shop = createStackNavigator({ HomeScreen })
const Stacks = createStackNavigator(
    {
        Shop,
        ProductScreen, 
        ProductReviewsScreen,
        AddReviewScreen,
        SearchScreen,
        ReportScreen
    },
    {
        headerMode: 'none',
        mode: 'modal',
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
        },

        tabBar: {
            visible: false
        }
    }
)
export default {
    screen: Stacks, 
    navigationOptions: () => {
        return {
            drawerLockMode: 'locked-closed',
            tabBarLabel: tabLabel,
            tabBarIcon: ({ focused}) => (
                <View style={{alignItems:'center'}}>
                    <Iconn  size={24} name={'home'} color={focused ? colors.activeTab : colors.iconsColor} />
                </View>
            ), 
        };
    },
}