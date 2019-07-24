import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator
} from "react-native";

import Theme from '../theme/style'

export default class Loading extends Component {

    constructor(props) {
        super(props)
    }
 
    render() {
        const { size } = this.props
        return (
            <View style={styles.container}>
                <ActivityIndicator size={size || 'small'} color={Theme.primaryColor} animating={true} />
            </View>
        )
    }

} 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        height: 100,
        flex: 1
    }
});