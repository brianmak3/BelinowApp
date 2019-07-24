import React, { Component } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions,
    StyleSheet,
    Animated,
    Easing,
    Image
} from "react-native"

import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Theme from '../../theme/style'
import SearchButton from '../../theme/searchButton'
import BackButton from '../../theme/back'
import Loading from '../..//common/loading'
import Heart from '../../common/heart'

import * as ProductAction from '../../redux/actions/products'
import * as types from '../../redux/types'

import styles from './style'

const window_width = Dimensions.get('window').width
const padd = 15
const ic_list_view_active = require('../../assets/images/ic_list_view.png')
const ic_list_view = require('../../assets/images/ic_list.png')
const ic_grid_view_active = require('../../assets/images/ic_grid.png')
const ic_grid_view = require('../../assets/images/ic_grid_view.png')

class CategoryProducts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: types.PRODUCTS_FILTER_BY,
            layout: '',
            key: 1,
            width: 1,
            loading: false,
            isListEnd: false,
            fetching_from_server: false,
            firstLoad: false,
            data: []
        }
        this.page = 1;
    }

    componentDidMount() {
        this.page = 1;
        this.animatedImageViewWidth = new Animated.Value(1)
        this._changeLayout('grid')
        this.loadMoreData() 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.products) {
            if (nextProps.products && !nextProps.products.loading){
                if (nextProps.products.data.length > 0) {
                    this.page += 1;
                    this.setState({ 
                        firstLoad: this.page == 2 ? true : false,
                        data: [...this.state.data, ...nextProps.products.data],
                        fetching_from_server: false,
                        isListEnd: false,
                    }); 
                } else {
                    this.setState({
                        fetching_from_server: false,
                        isListEnd: true,
                    });
                }
            }
        }
    }

    loadMoreData() {
        const { fetching_from_server, isListEnd, query } = this.state
        const { navigation } = this.props
        const item = navigation.getParam('item')
        if (!fetching_from_server && !isListEnd) {
            this.setState({ fetching_from_server: true }, () => {
                let _query = query
                _query.category = item.id
                _query.page = this.page 
                this.props.ProductAction.getProducts(_query) 
            });
        }
    }

    _renderHeader() {
        const { navigation } = this.props
        const item = navigation.getParam('item')
        const { layout } = this.state

        return (
            <Animatable.View animation={'fadeInDown'} delay={500} duration={300}>
                <View style={filterStyles.categoryFilters}>
                    <View style={filterStyles.filterName}>
                        <Text style={filterStyles.filterNameText}>{item.count} items</Text>
                    </View>
                    <View style={filterStyles.listLayoutButtonView}>
                        <TouchableOpacity activeOpacity={layout == 'list' ? 1 : 0} style={filterStyles.listLayoutButton} onPress={() => { this._changeLayout('list') }}>
                            <Image source={layout == 'list' ? ic_list_view_active : ic_list_view} resizeMode={'contain'} style={{ width: 16, height: 15 }} />
                        </TouchableOpacity>
                        <View style={filterStyles.lineOfLayoutButtons}></View>
                        <TouchableOpacity activeOpacity={layout == 'grid' ? 1 : 0} style={filterStyles.gridLayoutButton} onPress={() => { this._changeLayout('grid') }}>
                            <Image source={layout == 'grid' ? ic_grid_view_active : ic_grid_view} resizeMode={'contain'} style={{ width: 16, height: 16.41 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={filterStyles.lineOfLayoutButtons2}></View>
                    {/*  <TouchableOpacity style={filterStyles.filterButton}>
                        <Text style={filterStyles.filterButtonText}>FILTER</Text>
                    </TouchableOpacity> */}
                </View>
            </Animatable.View>
        )
    }

    _changeLayout(type) {
        const { key, layout } = this.state
        const _columns = type == 'grid' ? 2 : type == 'list' ? 1 : 2
        const _itemWidth = _columns === 1 ? window_width - padd : (window_width / 2) - (padd / 2)  //((width - (padd * _columns)) / _columns) - (padd / _columns)
        let _imageWidth = _columns === 1 ? _itemWidth - padd * 2 : _itemWidth - padd
        _imageWidth = type == 'grid' ? _imageWidth : _itemWidth * 33 / 100
        if (layout != type) {
            Animated.timing(this.animatedImageViewWidth, {
                toValue: _imageWidth,
                duration: 250,
                easing: Easing.ease,
            }).start();
            this.setState({
                columns: _columns,
                layout: type,
                key: key + 1,
                width: _itemWidth
            })
        }
    }
 
    renderFooter() {
        return (
            <View style={styles.footer}>
                {this.state.fetching_from_server ? (
                    <Loading />
                ) : null}
            </View>
        );
    }

    _renderProducts() {
        const { key, columns, data, firstLoad } = this.state
        return (
            <Animatable.View
                animation={!firstLoad ? '' : 'fadeInUp'}
                duration={500}
                style={{ flex: 1 }}
                key={key}>
                <FlatList
                    data={data || []}
                    numColumns={columns}
                    keyExtractor={(item, index) => { return `${item.name}-${index}` }}
                    renderItem={({ item }) => { return this._renderItem(item) }}
                    style={{ flex: 1 }}
                    onEndReached={() => this.loadMoreData()}
                    onEndReachedThreshold={0.01}
                    ListFooterComponent={this.renderFooter.bind(this)}
                />
            </Animatable.View>
        )
    }

    _renderItem(item) {
        const { navigation } = this.props
        const { key, layout, width } = this.state
        const animatedImageStyle = { width: this.animatedImageViewWidth }
        return (
            <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={[productStyles.item, { width: width }, layout == 'list' ? { flexDirection: 'row' } : {}]}
                onPress={() => navigation.navigate("ProductScreenInCategoryScreen", { product: item })}
                underlayColor="white">
                <Animated.View style={[animatedImageStyle,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                        height: layout == 'grid' ? 200 : 120,
                        borderRadius: 4,
                    }]}>
                    <Image
                        loadingIndicator={null}
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                            width: '100%', height: '100%', borderWidth: 1, borderRadius: 4,
                            borderColor: '#E6E8EC'
                        }}
                        source={{ uri: item.images[0].src }}
                        resizeMode={'cover'}
                    />
                </Animated.View>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Animatable.View animation={key > 2 ? layout == 'list' ? 'fadeInUp' : 'fadeIn' : ''} duration={700} style={[layout == 'list' ? { flexDirection: 'column', paddingHorizontal: 15, width: width * 66 / 100 } : {}]}>
                    <Text numberOfLines={layout == 'list' ? 5 : 1} style={productStyles.name}>
                        {item.name}
                    </Text>
                    {/* eslint-disable-next-line react-native/no-inline-styles */}
                    <View style={[layout == 'list' ? { position: 'absolute', bottom: 15, left: 15, width: width * 54 / 100, flexDirection: 'row', justifyContent: 'space-between' } : { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        {item.regular_price != '' && item.price + '' !== item.regular_price + '' ?
                            <View style={productStyles.prices}>
                                <Text style={productStyles.price_discounted}>${item.regular_price}</Text>
                                <Text style={productStyles.price}>${item.price}</Text>
                            </View>
                            : <Text style={productStyles.price}>${item.price}</Text>}
                        <Heart product={item} width={14} height={12} />
                    </View>
                </Animatable.View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderHeader()}
                <View style={styles.tabContent}>
                    {this._renderProducts()}
                </View>
            </View>
        )
    }




}


CategoryProducts.navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.item.name.toUpperCase()}`,
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: <SearchButton navigation={navigation} />
})

function mapStateToProps(state) {
    return {
        products: state.products,
        categories: state.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts)

const filterStyles = StyleSheet.create({
    categoryFilters: {
        flexDirection: 'row',
        borderTopColor: '#e8e8e8',
        borderTopWidth: 1,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
        height: 48,
        alignItems: 'center',
        paddingLeft: 15
    },
    filterName: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    filterNameText: {
        color: Theme.greyColor,
        fontFamily: Theme.regularFont,
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.88,
        fontWeight: '400'
    },
    listLayoutButtonView: {
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    listLayoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: 48,
    },
    gridLayoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        paddingHorizontal: 15
    },
    lineOfLayoutButtons: {
        width: 2,
        height: 24,
        borderLeftWidth: 1,
        borderLeftColor: '#e8e8e8',
    },
    lineOfLayoutButtons2: {
        width: 2,
        height: 48,
        borderLeftWidth: 1,
        borderLeftColor: '#e8e8e8',
    },
    filterButton: {
        flex: 0.3,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    filterButtonText: {
        fontFamily: Theme.regularFont,
        fontSize: 14,
        color: Theme.primaryColor,
        letterSpacing: 1,
        fontWeight: '500',
        textAlign: 'center'
    },
})

const productStyles = StyleSheet.create({
    item: {
        paddingLeft: 15,
        marginBottom: 20
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
        fontFamily: Theme.mediumFont,
        fontSize: 14,
        letterSpacing: 1,
        marginTop: 8,
        marginBottom: 5,
        color: Theme.primaryColor,
        fontWeight: '500'
    }
})