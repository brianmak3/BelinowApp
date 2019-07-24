import React, { Component } from "react";
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
    Text,
} from "react-native"

import isIphoneX from '../common/iphonex'
import BackButton from '../theme/back'
import Theme from '../theme/style'
import { DropDownHolder } from '../common/dropalert'

class ModalHeader extends Component {

    constructor(props) {
        super(props)
    }

    backButton = () => {
        this.props.navigation.goBack()
    }

    nav (){
        const { add, navigation, user, product_id } = this.props
        // navigation.navigate(add)
        if (add == 'AddReviewScreen' && user == undefined){
            navigation.navigate("LoginScreen")
            //DropDownHolder.alert('warn', '', 'You need to be login')
        } else {
            navigation.navigate(add, { product_id })
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.leftButton}>
                    {this.props.back && <BackButton navigation={this.props.navigation} />}
                    {this.props.close &&
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image style={styles.closeImage} resizeMode={'contain'} source={require('../assets/images/ic_close.png')} />
                        </TouchableOpacity>
                    }
                </View>
                
                <View style={styles.title}>
                    {this.props.headerTitle ? <Text style={styles.headerTitle}>{this.props.headerTitle}</Text> : null}
                </View>
                
                <View style={styles.rightButton}>
                    {this.props.add &&
                        <TouchableOpacity onPress={() => { this.nav() }}>
                            <Image style={styles.addImage} resizeMode={'contain'} source={require('../assets/images/ic_add.png')} />
                        </TouchableOpacity>} 
                </View>
            </View>
        );
    }
}

export default ModalHeader;

const styles = StyleSheet.create({
    closeImage: {
        width: 16, 
        height: 16 
    },
    addImage:{
        width: 20,
        height: 20 
    },
    header: {
        height: isIphoneX() ? 90 : 70,
        width: '100%',
        paddingTop: isIphoneX() ? 50 : 0,
        flexDirection: 'row',
        paddingHorizontal: 0
    },
    leftButton: {
        flex: 0.33334,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 15
    },
    title: {
        flex: 0.33334,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0
    },
    rightButton: {
        flex: 0.33334,
        alignItems: 'flex-end',
        paddingRight: 15,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 16,
        color: Theme.primaryColor,
        fontFamily: Theme.regularFont,
        lineHeight: 24
    }
});

