import React, { Component } from "react";
import { 
    View, 
    StyleSheet,
    Image
} from "react-native";

import Badge from './badge'
import { connect } from "react-redux";

const imageTint = require('../assets/images/ic_cart_active.png')
const image = require('../assets/images/ic_cart.png')
const imageStyle = { width: 25, height: 22 }

class CartButton extends Component {
    render() {
        const { cart, focused } = this.props 
        return (
            <View style={styles.tabIconStyle}>
                <Image resizeMode={'contain'} style={imageStyle} source={focused ? imageTint : image} />
                <Badge number={cart && cart.length > 0 ? cart.map(item => item.quantity).reduce((prev, next) => prev + next) : 0} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const styles = StyleSheet.create({
    tabIconStyle: { position: 'relative' } 
});

export default connect(mapStateToProps)(CartButton)
