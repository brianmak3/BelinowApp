import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View } from 'react-native';
import {colors, Iconn}  from '../../common/Index';
import  MessagesScreen  from "../../views/Chat/Messages";      
import  ChatScreen  from "../../views/Chat/ChatPage";      
const tabLabel = 'Messages'
const Messages = createStackNavigator({
    MessagesScreen
})
const MessagesStack = createStackNavigator(
    {
        Messages,
        ChatScreen
    },
    {headerMode: 'none'}
)
export default {
    screen: MessagesStack,

    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center'}}>
                <Iconn  size={24} name={'text'} color={focused ? colors.activeTab : colors.iconsColor} />
            </View>
        )
    }
}