import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Shop from './1'
import Category from './2'
//import Search from './3'
import Cart from './4'
import Profile from './5'
import TabBarOptions from './options'

export default createBottomTabNavigator({
    Shop,
    Category,
    //Search,
    Cart,
    Profile
}, TabBarOptions)