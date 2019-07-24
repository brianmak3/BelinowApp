import React, { Component } from "react";
import {View,Text, StatusBar, SafeAreaView, FlatList, TouchableWithoutFeedback, TouchableOpacity,Image, ScrollView,} from "react-native";
import EmptyCartHolder from './empty'
import Styles from './style' 
import { Connect,mapDispatchToProps,mapStateToProps } from '../../../Redux';
import ProductList from '../../../components/ProductList';
import Headroom from 'react-native-headroom';
import { Iconn, icons, colors } from '../../../common/Index';
import Swipeout from 'react-native-swipeout';
import Info from './Info';
import LinearGradient from 'react-native-linear-gradient';
import RadioButton from '../../../theme/RadioButton';
class CartScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.CartAction.getCart()
        this.props.PaymentAction.getGateways()
        this.props.ShippingMethodsAction.getList();
        StatusBar.setBackgroundColor(colors.main);
    }

    nav(route) {
        const { currentCustomer, navigation } = this.props
        const { customer } = currentCustomer
        if (!customer) {
            navigation.navigate('LoginScreen', { backTo: 'CheckoutAddress' })
        } else {
            navigation.navigate(route)
        }
    }

    getCartTotal() {
        const { cart } = this.props
        let total = 0
        cart.map((item) => {
            total += item.product.price * item.quantity
        })
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    }

    render() {
        const { cart, navigation,productsRating } = this.props;
        const header = (
            <View style={Styles.header}>
                <Text style={{fontSize:18,color:'#fff'}}>My Cart {cart.length?'('+cart.map(item => item.quantity).reduce((prev, next) => prev + next)+')':null}</Text>
                <TouchableOpacity style={Styles.deleteBtn}>
                    <Text style={Styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
        var swipeoutBtns = [
            {
              component:
                ( <LinearGradient  colors={['#FBAA59', '#FA973F', '#F88824']}  style={Styles.swipebtn}>
                      <Iconn  name='heart-empty' size={20} color={'#fff'} />
                  </LinearGradient>)
            },
            {
              component:
                (
                  
                    <LinearGradient  colors={['#F52E0B', '#BC2106', '#951B06']}  style={Styles.swipebtn}>
                       <Iconn  name='trash' size={20} color={'#fff'} />
                    </LinearGradient>
                )
            }
          ]
        return (
            <View style={Styles.cartContainer}>
                <SafeAreaView />
                <View style={Styles.main}>
                    <Headroom
                        style={{flex:1}}
                        headerComponent={ header }
                        ScrollableComponent={ScrollView}
                        headerHeight={ 40 }
                        scrollEventThrottle={ 40 }
                        >
                    {cart === undefined || cart.length == 0?
                    <View  style={Styles.ScrollView}>
                        <EmptyCartHolder navigation={navigation} productsRating={productsRating}/>
                        <View style={Styles.flatDiv}>
                            <Text style={Styles.just}>Just for You</Text>
                        </View>
                        <ProductList horizontal navigation={navigation} data={productsRating.data} loading={productsRating.loading} />
                    </View>
                    :<View style={Styles.main}>
                        <View style={Styles.preferred}>
                          <View style={Styles.wrap}>
                            <View style={Styles.flexWrap}>
                                <Text style={{color:'grey',fontSize:12}}>Preferred Delivery option </Text><Iconn name={'pin'} size={20} color={'#A0A0A0'} />
                                <Text style={{fontSize:12}} numberOfLines={1}>Wp Kuala Lumpukut Kliesa</Text>
                                </View>
                                <TouchableOpacity >
                                    <Iconn name={'more'} size={25}  />
                                </TouchableOpacity>
                            </View>
                            <View style={{padding:5}}>
                                <TouchableOpacity style={Styles.Selection}>
                                    <Text style={{fontSize:13}}>Please select Item(s)</Text>
                                    <Text style={{fontSize:11,marginTop:5}}>Availability and promotions will be shown here</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList style={{flex:1}} showsVerticalScrollIndicator={false} data={cart} renderItem={({item,index})=>{return( 
                           <View style={Styles.shopDiv}>
                               <View style={Styles.shop}>
                                    <View style={{flexDirection:'row'}}>
                                      <RadioButton />
                                      <Text style={Styles.sellerName}> { 'Car Deco' }</Text>
                                      <Iconn name={icons.forwardDrop} size={20} color={'grey'} />
                                    </View>
                                    <TouchableOpacity style={{marginRight:10}}>
                                        <Text style={Styles.voucherText}>Get Voucher</Text>
                                    </TouchableOpacity>
                               </View>
                              <Swipeout key={index} autoClose={true}  style={{backgroundColor:'#fff'}} buttonWidth={60} right={swipeoutBtns} key={index}>
                                <View style={Styles.SwipeView}>
                                    <TouchableWithoutFeedback>
                                        <View style={Styles.radioView}> 
                                        <RadioButton deleteItem={false} />
                                        </View>
                                     </TouchableWithoutFeedback>
                                        <Image style={Styles.productImg} source={{ uri: item.image }}/>
                                        <Info addRemoveButtons={true} product={item}/>
                                    </View>
                              </Swipeout>
                            </View>
                          )}}/>
                       
                    </View>}
                    {/*<View style={Styles.cartHeader}>
                        <View style={Styles.cartHeaderLeft}>
                            <View>
                                <Text style={Styles.cartStatusText}>
                                    {'YOUR SHOPPING CART'}
                                </Text>
                            </View>
                            <View style={Styles.cartStatusBottom}>
                                <Text style={Styles.cartStatusText2}>
                                    {'Review'} {cart.map(item => item.quantity).reduce((prev, next) => prev + next)} {'items'}
                                </Text>
                                <Text style={Styles.cartStatusText3}>
                                    {' $' + this.getCartTotal()}
                                </Text>
                            </View>

                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        <View style={Styles.cartProducts}>
                            {cart.map((product, index) => (<ProductListItem
                                navigation={this.props.navigation}
                                key={'product' + index}
                                product={product}
                                remove={() => { this.props.CartAction.removeFromCart(product) }} />
                            ))}
                        </View>
                        <View style={FormStyle.pageDoneWithDiscard}>
                            <View style={FormStyle.pageDiscardView}>
                                <TouchableOpacity style={FormStyle.pageDiscardButton} onPress={() => { this.props.navigation.navigate('HomeScreen')  } }>
                                    <Image source={require('../../../assets/images/ic_arrow_left.png')} style={FormStyle.pageDiscardButtonImage} resizeMode={'contain'} />
                                    <Text style={FormStyle.pageDiscardButtonText}>Continue Shopping</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={FormStyle.pageDoneView}>
                                <TouchableOpacity style={FormStyle.pageDoneButton} onPress={() => { this.nav('CheckoutAddress') }}>
                                    <Text style={FormStyle.pageDoneButtonText}>CHECK OUT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            </ScrollView>*/}
                    </Headroom>
                </View>
            </View>

        )
    }

}

CartScreen.navigationOptions = ({ navigation }) => ({
    headerMode:'none',
    header:null
})
export default Connect(mapStateToProps, mapDispatchToProps)(CartScreen);