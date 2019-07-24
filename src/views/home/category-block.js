import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, 
    Image
} from "react-native";

import Theme from '../../theme/style'

export default class CategoryBlock extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { item, navigation, index } = this.props

        return (
         <View style={{marginRight:1,marginBottom:1,width:'33%'}}>
            <TouchableOpacity style={[styles.container,{borderRightColor:'#fff',borderRightWidth:1,backgroundColor: (index==0||index==3||index==6?'#F7F1EB':index==1||index==4||index==7?'#F8EAEB':'#EBEDF4')}]} onPress={() => { navigation.navigate('CategoryProductsScreen', { item }) }}>
                <View style={styles.item}>
                    {item.image ? <Image source={{ uri: item.image.src, }} resizeMode={'contain'} style={styles.image} /> : <Image source={require('../../assets/images/picture.png')} resizeMode={'cover'} style={styles.image2} />}
                </View>
                <View style={styles.content}>
                    <Text style={styles.header} numberOfLines={2}>{item.name.replace('&amp;','&')}</Text>
                    <Text style={styles.count}>{item.count} Products</Text>
                </View>
            </TouchableOpacity>
         </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: 180,
        borderRadius: 4,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        borderRadius: 4,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        flexDirection: 'column'
    },
    header: {
        fontFamily: Theme.boldFont,
        color: Theme.primaryColor,
        fontWeight: '500',
        fontSize: 13,
        letterSpacing: 1,
        paddingHorizontal: 15,
        textAlign: 'center',
        width: 150
    },
    count: {
        fontFamily: Theme.regularFont,
        color: Theme.greyColor,
        fontWeight: '300',
        fontSize: 12, 
        marginTop: 5,
    },
    image: {
        width: '100%', 
        height: 85 ,
        borderRadius: 4, 
    },
    image2:{
        height: 80,
        width: 80
    }
});