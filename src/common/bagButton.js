
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

const empty = require('../assets/images/ic_heart.png')
const loved = require('../assets/images/ic_heart_red.png')

import * as Animatable from 'react-native-animatable'
import Theme from '../theme/style'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WhislistAction from '../redux/actions/whislist'
import fsManager from './fs-manager'

class Bag extends Component {

    checkIsInWhislist(product) {
        const { whislist } = this.props
        for (var i = 0; i < whislist.length; i++)
            if (whislist[i].id === product.id) {
                return true
            }
        return false
    }

    render() {
        const { width, height, product, buttonStyles } = this.props
        const isLoved = this.checkIsInWhislist(product)
        return (
            <TouchableOpacity style={[styles.button, buttonStyles]} onPress={() => { this.toggle() }}>
                <Image source={!isLoved ? empty : loved} resizeMode={'contain'}
                    style={[styles.image, { width: width, height: height, marginTop: 2 }]} />
            </TouchableOpacity>
        );
    }

    async toggle() {
        const { product } = this.props
        let data = await fsManager.getWhislist()
        data = data || '[]'
        let wl = JSON.parse(data);
        if (wl.length > 0) {
            let exists = false
            for (var i = 0; i < wl.length; i++) {
                if (wl[i].id == product.id) {
                    exists = true
                }
            }
            if (exists) {
                this.props.WhislistAction.remove(product)
                wl = wl.filter(i => i.id !== product.id)
                await fsManager.saveWhislist(JSON.stringify(wl))
            } else {
                wl.push(product)
                this.props.WhislistAction.add(product)
                await fsManager.saveWhislist(JSON.stringify(wl))
            }
        }
        else {
            wl.push(product)
            this.props.WhislistAction.add(product)
            await fsManager.saveWhislist(JSON.stringify(wl))
        }

    }
}


function mapStateToProps(state) {
    return {
        whislist: state.whislist,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        WhislistAction: bindActionCreators(WhislistAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heart)

const styles = StyleSheet.create({
    button: {

    },
    image: {

    }
});



<TouchableOpacity onPress={() => {
    StatusBar.setHidden(false, 'slide');
    navigation.navigate('CartListScreen');
}} style={Styles.cartButton}>
    <View style={Styles.cartIconBadged}>
        <Image resizeMode={'contain'}
            style={Styles.cartIcon}
            source={require('../../assets/images/ic_cart_active.png')}
        />
        {
            cart && cart.length > 0 && <View style={Styles.badgeWrap}>
                <Text style={Styles.badgeText}>
                    {cart.map(item => item.quantity).reduce((prev, next) => prev + next)}
                </Text>
            </View>
        }
    </View>
</TouchableOpacity>