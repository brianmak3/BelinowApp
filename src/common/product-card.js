import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import Theme from '../theme/style'

class ProductCard extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const { navigation, product } = this.props
        const { name, image, id, discount, price, isNew, isSale } = product

        return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductScreen', { product: product})} >
                <View style={styles.imageContainer}>
                    <Image resizeMode={'contain'} source={image} style={styles.image} />
                </View>
                <View style={styles.content}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        { discount > 0 && <Text style={styles.discount}>${discount}</Text>}
                        <Text style={styles.price}>${price}</Text>
                    </View>
                </View>
                {
                    discount > 0 && <View style={[styles.discountTag, isNew || isSale ? { right: 50 } : { right: 0} ]}>
                        <Text style={styles.tag}>-50%</Text>
                    </View>
                }
                {
                    isNew && <View style={styles.newTag}>
                        <Text style={styles.new}>NEW</Text>
                    </View>
                }
                {
                    isSale && <View style={styles.saleTag}>
                        <Text style={styles.sale}>SALE</Text>
                    </View>
                }
            </TouchableOpacity>
        );
    }
}
export default ProductCard;

const styles = StyleSheet.create({
    container: {
        height: 89,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        paddingVertical: 15, 
    },
    imageContainer:{
        flex: 0.4,
        justifyContent: 'center',  
        alignItems: 'center'
    },
    content: {
        flex: 0.7,
    },
    image: {
        width: 70,
        height: 70,
        backgroundColor: 'white'
    },
    nameContainer: {
        marginBottom: 5
    },
    name: {
        color: Theme.secondaryColor,
        fontSize: 15,
        fontFamily: Theme.regularFont,
        textTransform: 'uppercase',
        maxWidth: 200,
        lineHeight: 18
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    discount: {
        textDecorationLine: 'line-through',
        color: '#999999',
        fontSize: 13,
        fontFamily: Theme.regularFont,
        marginRight: 5
    },
    price: {
        color: Theme.secondaryColor,
        fontSize: 13,
        fontFamily: Theme.boldFont,
    },
    newTag: { position: 'absolute', bottom: 0, right:0, backgroundColor: '#B0D39B', width: 50, height: 20, justifyContent: 'center', alignItems: 'center'},
    new: { color: 'white', fontSize: 12, fontFamily: Theme.boldFont },
    saleTag: { position: 'absolute', bottom: 0, right: 0,backgroundColor: Theme.primaryMoreColored, width: 50, height: 20, justifyContent: 'center', alignItems: 'center' },
    sale: { color: 'white', fontSize: 12, fontFamily: Theme.boldFont },
    discountTag: { position: 'absolute', bottom: 0, right: 0,backgroundColor: Theme.secondaryColor, width: 50, height: 20, justifyContent: 'center', alignItems: 'center' },
    tag: { color: 'white', fontSize: 12, fontFamily: Theme.boldFont },

  
});