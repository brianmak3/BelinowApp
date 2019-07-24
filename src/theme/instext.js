import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native"

import Theme from './style'

const InsText = (props) => {
    if (!props.leftKey && !props.rightText) {
        return <View></View>
    } 

    return (
        <View style={styles.container}>
            <View style={[styles.whiteLine, { width: props.width || 50 }]}></View>
            <View style={styles.styledText}>
                <View style={styles.textStyle}>
                    <Text style={styles.strongerKey}>{props.leftText}</Text>
                    <Text style={styles.leftKey}>{props.rightText}</Text>
                </View>
            </View>
            <View style={[styles.whiteLine, { width: props.width || 50 }]}></View>
        </View>
    )
}
export default InsText;

const styles = StyleSheet.create({
   
    container:{

    },
    styledText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    whiteLine: {
        backgroundColor: 'white',
        height: 1.5,
    },
    strongerKey: {
        fontSize: 24,
        fontFamily: Theme.lightFont,
        color: Theme.primaryColor
    },
    leftKey: {
        color: 'white',
        fontSize: 24,
        fontFamily: Theme.lightFont,
    },
    textStyle: {
        flexDirection: 'row'
    },


});