import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Sidebar from '../views/sidebar'
import TabsNavigation from './tabs'

const drawerWidth = 300

export default createDrawerNavigator(
    { TabsNavigation },
    {
        contentComponent: props => <Sidebar {...props} />,
        drawerWidth: drawerWidth,
        drawerBackgroundColor: 'transparent',
        drawerPosition: 'right',
        drawerLockMode:'locked-closed',
        contentOptions: {
            activeBackgroundColor: 'transparent', 
        }
    }
);

