import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from "react-native";

import Theme from '../../theme/style'
import BackButton from '../../theme/back'
import Styles from './style'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WhislistAction from '../../redux/actions/whislist'
import * as CartAction from '../../redux/actions/cart'

class Whislist extends Component {

    componentDidMount() {
        this.props.WhislistAction.getWhislist()
    }

    constructor(props) {
        super(props)
    }

    render() {

        const { whislist, navigation } = this.props

        return (
            <View style={Styles.container}>
                <View style={Styles.cartHeader}>
                    <View style={Styles.cartHeaderLeft}>
                        <View style={Styles.cartStatusBottom}>
                            <Text style={Styles.cartStatusText2}>
                                {whislist.length} {'items'}
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {this.renderProducts()}
                </ScrollView>

            </View>
        );
    }

    addToCartPress(product) {
        var attrs = []
        if (product.attributes) {
            product.attributes.map((a) => {
                if (a.selected) {
                    attrs.push(a.name + ": " + a.selected)
                }
            })
        }
        this.props.CartAction.addToCart(product, attrs, 1);  
    }

    renderProducts() {
        const { navigation, whislist } = this.props;

        return whislist.map((x) => {
            const product = x.product
            return (
                <View style={ProductStyles.item} key={product.id}>

                    <TouchableOpacity onPress={() => navigation.navigate("ProductScreenInProfile", { product })} underlayColor="white">
                        <Image style={ProductStyles.image} source={{ uri: product.images[0].src }} resizeMode={'cover'} />
                    </TouchableOpacity>

                    <View style={ProductStyles.inner}>

                        <TouchableOpacity onPress={() => navigation.navigate("ProductScreenInProfile", { product })} underlayColor="white">
                            <Text numberOfLines={5} style={ProductStyles.name}>{product.name}</Text>
                        </TouchableOpacity>

                        {product.regular_price != '' && product.price + '' !== product.regular_price + '' ?
                            <View style={ProductStyles.prices}>
                                <Text style={ProductStyles.price_discounted}>${product.regular_price}</Text>
                                <Text style={ProductStyles.price}>${product.price}</Text>
                            </View>
                            : <Text style={ProductStyles.price}>${product.price}</Text>
                        }

                        <TouchableOpacity style={ProductStyles.addToCart} onPress={() => { this.addToCartPress(product) }} underlayColor="white">
                            <Text style={ProductStyles.buttonText}>{'ADD TO CART'}</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            )
        })
    }



}

Whislist.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: 'WHIS LIST',
    headerRight: (<View></View>)
})


function mapStateToProps(state) {
    return {
        whislist: state.whislist
    };
}

function mapDispatchToProps(dispatch) {
    return {
        WhislistAction: bindActionCreators(WhislistAction, dispatch),
        CartAction: bindActionCreators(CartAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Whislist);


const ProductStyles = StyleSheet.create({
    image: {
        width: 96,
        height: 124,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#E6E8EC'
    },
    item: {
        padding: 15,
        paddingBottom: 0,
        flexDirection: 'row',
    },
    inner: {
        padding: 15,
        paddingBottom: 0,
        paddingTop: 8,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
    },
    prices: {
        flexDirection: 'row'
    },
    price: {
        fontFamily: Theme.boldFont,
        fontSize: 14,
        color: Theme.primaryColor,
        letterSpacing: 0.5,
        fontWeight: '600'

    },
    price_discounted: {
        fontFamily: Theme.boldFont,
        fontSize: 13,
        color: Theme.primaryColor,
        paddingRight: 5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        opacity: 1,
        letterSpacing: 0.5,
        display: 'none'
    },
    name: {
        width: '100%',
        fontFamily: Theme.mediumFont,
        fontSize: 14,
        letterSpacing: 1,
        marginBottom: 10,
        color: Theme.primaryColor,
        fontWeight: '500'
    },
    addToCart: {
        backgroundColor: Theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 140,
        borderRadius: 4
    },
    buttonText: {
        fontFamily: Theme.mediumFont,
        fontSize: 14,
        letterSpacing: 0.5,
        textAlign: 'center',
        fontWeight: '600',
        color: 'white'
    },

    
})