import React from "react"

import { 
    View,
    Text,
    StyleSheet
} from "react-native"

import Theme from '../theme/style'

const Badge = (props) => 
(
    (props.number != '0' || props.number != 0) ?
        <View style={styles.container}><Text style={styles.label}>{props.number}</Text></View>
    : null
)

export default Badge

const styles = StyleSheet.create({
    container: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: Theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -2,
        right: -8
    },
    label: { 
        color: 'white',
        fontFamily: Theme.boldFont,
        fontSize: 10,
        textAlign: 'center'
    }
})