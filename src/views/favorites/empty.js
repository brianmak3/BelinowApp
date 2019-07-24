import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import Theme from '../../theme/style' 

const imgSource = require('../../assets/images/like.png')

const EmptyFavorites = (props) => (
    <View style={styles.container}>
        <View style={styles.holder}>
            <Image source={imgSource} style={styles.image} />
            <Text style={styles.text}>{'You have no items in your'}</Text>
            <Text style={styles.text}>{'favorite list.'}</Text>
        </View>
    </View>
)
export default EmptyFavorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9'

    },
    holder: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        height: 150,
        backgroundColor: '#F2F2F2',
        borderRadius: 4,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: '#C7C7C7'
    },
    text: {
        lineHeight: 20,
        fontSize: 15,
        fontFamily: Theme.regularFont,
        textAlign: 'center',
        color: '#888888'
    },
    image: {
        width: 25,
        height: 25,
        marginBottom: 10
    },

});