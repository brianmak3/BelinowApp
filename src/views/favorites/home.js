import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView
} from "react-native";

import Theme from '../../theme/style'
import TitleLogo from '../../theme/titleLogo'
import MenuButton from '../../theme/menuButton'
import styles from './style'
import Empty from './empty'

export default class FavoritesScreen extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View style={styles.container}>
                <Empty />
            </View>
        );
    }

}

FavoritesScreen.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerTitle: <TitleLogo />,
    headerLeft: <MenuButton navigation={navigation} />
})