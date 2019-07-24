import React, { Component } from 'react'
import Theme from '../../theme/style'

export default {
    tabBarOptions: {
        showIcon: true,
        showLabel: true,
         activeTintColor: 'red',
         inactiveTintColor: Theme.secondaryColor,
        labelStyle: {
            fontSize: 12,
            fontFamily: Theme.regularFont,
        },
        style: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'white',
            // borderTopColor: Theme.secondaryColor,
            paddingTop: 0,
            height: 50
        },
    },
    navigationOptions: ({ navigation }) => {
        const { state } = navigation;
        let tabBarVisible = true, drawerLockMode = ''
        if ((state.routeName === "Category" || state.routeName === "Shop") && (state.index != 0 && state.routes.length > 1)) {
            tabBarVisible = false

            const _state = state.routes[0]
            if (_state.index != 0 && _state.routes.length > 1)
                tabBarVisible = false
        }
        else if (state.key === "Cart") {
            const _state = state.routes[0]
            if (_state.index != 0 && _state.routes.length > 1)
                tabBarVisible = false
        }
        else if (state.key === "Me") {
            const _state = state.routes[0]
            if (_state.index != 0 && _state.routes.length > 1)
                tabBarVisible = false
        }

        return {
            tabBarVisible: tabBarVisible,
            drawerLockMode: 'locked-closed'
        }

    }
}