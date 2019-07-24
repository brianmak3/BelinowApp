import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import Theme from '../theme/style'

class CategoryAccordion extends Component {
    constructor(props) {
        super(props) 
        this.collection = []
    }

    toggleCollapse(item, index) {
        const unfolded = !this.collection[index].unfolded
        this.collection.map((item) => { item.unfolded = false })
        this.collection[index].unfolded = unfolded
        this.setState({})
    }

    render() {
        const { data, navigation } = this.props
        const parents = data.filter(x => x.parent == 0 && x.slug != "uncategorized")
        return (
            <View style={styles.container}>
                {parents && parents.map((item, index) => {
                    this.collection.push(item)
                    const childs = data.filter(x => x.parent == item.id)
                    return (
                        <View key={index} style={styles.accordion}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { this.toggleCollapse(item, index) }} style={styles.accordionHeader}>
                                <Text style={styles.accordionTitle}>{item.name}</Text>
                                <Text style={styles.collapsedStatus}>
                                    {!this.collection[index].unfolded ? <Image resizeMode={'contain'} source={require('../assets/images/ic_plus.png')} style={styles.plus} /> : <Image resizeMode={'contain'} source={require('../assets/images/ic_minus.png')} style={styles.minus} />}
                                </Text>
                            </TouchableOpacity>
                            {this.collection[index].unfolded &&
                                <View style={styles.accordionContent}>
                                    <TouchableOpacity activeOpacity={0.5} 
                                    onPress={() => { navigation.navigate('CategoryProductsScreen', { item })} }
                                        style={styles.accordionItem}>
                                        <Text style={styles.accordionItemContentText}>
                                            {'Show All'}
                                        </Text>
                                    </TouchableOpacity>
                                    {childs && childs.map((item, index) => { 
                                        return (
                                            <TouchableOpacity
                                                onPress={() => { navigation.navigate('CategoryProductsScreen', { item }) }}
                                                activeOpacity={0.5} key={index} style={styles.accordionItem}>
                                                <Text style={styles.accordionItemContentText}>
                                                    {item.name} {'(' + item.count + ')'}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>}
                        </View>
                    )
                })}
            </View>
        );
    }
}
export default CategoryAccordion;

const styles = StyleSheet.create({
    accordion: { marginBottom: 0, flex: 1, paddingRight: 15 },
    accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 25, alignItems: 'center' },
    accordionTitle: { fontWeight: '500', fontFamily: Theme.mediumFont, fontSize: 14, letterSpacing: 1, color: Theme.primaryColor },
    collapsedStatus: { fontWeight: '500', fontFamily: Theme.mediumFont, fontSize: 20, letterSpacing: 1, color: Theme.greyColor},
    accordionContent: { marginLeft: 40, paddingBottom: 15 },
    accordionItem: { marginBottom: 20 },
    plus: { width: 12, height: 12 },
    minus: {width: 12, height: 2}
});