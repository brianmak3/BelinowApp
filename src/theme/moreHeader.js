import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Theme from './style'

const Moreheader = (props) => (
    <View style={styles.header}>
        <View style={styles.twrap}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
        <View style={styles.sepSqu}>
            <View style={styles.sswrap}>
                <View style={styles.square} />
            </View>
        </View>
    </View>

    )
export default Moreheader;
 

const styles = StyleSheet.create({
    header:{
        
    },
    twrap: {
        alignItems: 'center',
        height: 50,
        backgroundColor: '#FFF',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: Theme.boldFont,
        letterSpacing: 3,
        color: Theme.secondaryColor,
    },
    sepSqu: {
        height: 0.5, 
        backgroundColor: '#bfbfbf',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#bfbfbf',
        flexDirection: 'row',
    },
    sswrap: {
        flex: 1,
        height: 0.5,
    },
    square: {
        width: 6,
        height: 6,
        left: '50%',
        backgroundColor: Theme.primaryMoreColored,
        transform: [{ rotate: '45deg' }],
        top: -2.5
    } 

});