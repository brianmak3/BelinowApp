import React from 'react'
import App from './src/App'
import configureStore from './src/store/configureStore'
import DropdownAlert from 'react-native-dropdownalert'
import { AppRegistry, View, StatusBar } from 'react-native'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import { DropDownHolder } from './src/common/dropalert'
import { colors } from './src/common/Index';
import { MenuProvider } from 'react-native-popup-menu';
const store = configureStore()
const flex = { flex: 1 }
const padding = { padding: 10 }

const application = () => {
    return (
        <MenuProvider>
            <View style={flex}>
            <StatusBar backgroundColor={colors.status}/>
                <Provider store={store}>
                    <App />
                </Provider>
                <DropdownAlert
                    updateStatusBar={false}
                    defaultContainer={padding}
                    ref={ref => DropDownHolder.setDropDown(ref)}
                    closeInterval={6000} />
            </View>
        </MenuProvider>
    )
}

AppRegistry.registerComponent(appName, () => application)