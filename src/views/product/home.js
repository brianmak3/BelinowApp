import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    StyleSheet,
    StatusBar,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import { Dropdown } from 'react-native-material-dropdown';
import HTMLView from 'react-native-htmlview'
import Swiper from 'react-native-swiper'
import Share, { ShareSheet, Button } from 'react-native-share';
import { Connect, mapDispatchToProps,mapStateToProps } from '../../Redux';
import Theme from '../../theme/style'
import Styles from './style'
import { Iconn, colors } from '../../common/Index';
import { Menu, MenuOptions,MenuOption, MenuTrigger,} from 'react-native-popup-menu';
import Headroom from 'react-native-headroom'
const arrBack = 'arrow-back';
import { discounted } from '../../Functions';

class Popover extends React.Component{
    render(){
          const options = [
              {label:'Share', icon:'share'},
              {label:'Back to homepage', page:'Shop', icon:'home'}, 
              {label: 'Report this Product', page:'ReportScreen', icon:'information-circle'}];
         const {navigate} = this.props;
         return( 
                <Menu style={{alignItems:'center',backgroundColor:'#fff',justifyContent:'center'}}>
                    <MenuTrigger style={[Styles.headerBtn,{flex:0, width:40,height:50}]}> 
                        <Iconn name="more" color={colors.main} size={25}/> 
                    </MenuTrigger>
                    <MenuOptions>
                      {
                          options.map((a,index)=>{
                              return(
                                <MenuOption key={index} onSelect={() => navigate(a.page)} style={Styles.option} >
                                    <Iconn name={a.icon} size={20} color={colors.main} />
                                    <Text style={{fontSize:13,marginLeft:10}}> {a.label} </Text>
                                </MenuOption>
                              )
                          })
                      }
                    </MenuOptions>
                </Menu>
        )
    }
}
class Product extends Component {

    constructor(props) {
        super(props)
        this.attributes = [];
        this.state = {
            tab_index: 0,
            shareSheetVisible: false
        }
    }

    render() {
        const { navigation } = this.props
        const product = navigation.getParam('product')
        if (product) {
            return this.renderProduct()
        }
        return <View></View>
    }

    renderImages() {
        const { navigation } = this.props
        const product = navigation.getParam('product')
        return product.images.map((image, index) => {
            return (
                <TouchableOpacity key={index} activeOpacity={1} onPress={() => { }}>
                    <Image
                        source={{ uri: image.src }}
                        style={Styles.productImage}
                        resizeMode={'cover'} />
                </TouchableOpacity>
            )
        })
    }

    componentWillUnmount() {
        StatusBar.setBarStyle('light-content');
       
    }
    componentDidMount() { 
        StatusBar.setBarStyle('dark-content');
        console.log(JSON.stringify((this.props.navigation.getParam('product'))));
    }

    renderAttributes(attributes) {
        if (attributes.length < 1) {
            return <View></View>
        }

        attributes[0].selected = attributes[0].options[0];

        return (
            attributes.map((a, i) => {
                var data = []
                a.options.map((value) => {
                    data.push({ value })
                })

                return <View
                    style={[{ flex: 0.5 }, attributes.length <= 1 ? {} : attributes.length - 1 === i ? { marginLeft: 15 } : {}]}
                    key={i}>
                    <Dropdown
                        renderAccessory={() => <Image style={{ opacity: 0.6 }} source={require('../../assets/images/ic_down.png')} />}
                        fontSize={14}
                        itemPadding={9}
                        baseColor={'#cdcdcd'}
                        onChangeText={(value) => { a.selected = value }}
                        itemTextStyle={{ fontFamily: Theme.regularFont }}
                        label={a.name}
                        data={data}
                        value={data[0].value}
                    />
                </View>
            })
        )
    }

    renderReviewerButton(attr_length) {
        const { navigation } = this.props
        const product = navigation.getParam('product')
        return (
            <TouchableOpacity style={[Styles.div1,Styles.selDiv]}> 
                <View style={{padding:15}}> 
                    <Text>Select Variation <Text style={{color:'grey'}}>(e.g. color,size)</Text></Text>
                </View>
                <Iconn name={'arrow-forward'} size={20} color={'grey'} />
            </TouchableOpacity>
        )
    }

    shrareButtonPress(network) {
        const { navigation } = this.props
        const product = navigation.getParam('product')
        this.onCancel()
        setTimeout(() => {
            Share.shareSingle({
                social: network,
                title: product.name,
                message: product.name,
                url: product.permalink,
                subject: 'Share Link'
            });
        }, 300);
    }

    shareOnPress() {
        this.onOpen()
    }

    onCancel() {
        this.setState({ shareSheetVisible: false });
    }

    onOpen() {
        this.setState({ shareSheetVisible: true });
    }
  
    addToCartPress(product, goCart) {
        var attrs = []
        if (product.attributes) {
            product.attributes.map((a) => { 
                if (a.selected){
                    attrs.push(a.name + ": " + a.selected)
                }
            })
        }
        this.props.CartAction.addToCart(product, attrs, 1);
        if (goCart)
            this.props.navigation.navigate('CartListScreen')

    }

    renderProduct() {

        const { navigation, cart } = this.props
        const product = navigation.getParam('product');
        returnSocial =()=>{
            buttons = [
                {icon:'heart-empty', label:'Like', value:1223423},
                {icon:'star-outline', label:'Ratings', value:6156}
            ]
           return(
                   <View style={{flexDirection:'row',marginTop:8,backgroundColor:'#fff'}}>
                           {
                               buttons.map((a,index)=>{
                                   return(
                                        <View key={index} style={Styles.socialBtn}>
                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                <Iconn name={a.icon} size={25} color={'#000'} />
                                                <Text style={{fontSize:13}}> {a.label} </Text>
                                            </View>
                                            <Text style={{color:'grey',fontSize:13}}>{a.value}</Text>
                                        </View>
                                   )
                               })
                           }
                   </View>
           )
       }
       returnSocialButtons = ()=> {
        const buttons = [
            {label:'Share',icon:'facebook-f'},
            {label:'Tweet',icon:'twitter'},
            {label:'pn',img: require('../../assets/images/Pinterest.jpg')}

        ]
        return(
            <View style={{flexDirection:'row',padding:15}}>
                {buttons.map((button, index)=>{
                    return(
                        <TouchableOpacity key={index}>
                                 {button.img?
                                  <View style={Styles.socialBt}>
                                        <Image source={button.img} style={{height:25,width:70,resizeMode:'cover'}} />
                                  </View>
                                    :
                             <View style={[Styles.socialBt,{backgroundColor:(button.label=='Share'?colors.facebook:'#fff')}]}>
                                <Icon name={button.icon} size={15} color={(button.label=='Share'?'#fff':'#1dcaff')} />
                                <Text  style={{fontSize:13,color:(button.label=='Share'?'#fff':'#000')}}>{button.label}</Text>
                            </View>}
                        </TouchableOpacity>
                    )
                })
                }
            </View>
        )
    }
        returnButton = (name)=>{
            const noOfItemsInCart = (cart.length?cart.map(item => item.quantity).reduce((prev, next) => prev + next):0);
            return(
              <TouchableOpacity onPress={()=>{
                     switch(name){
                         case arrBack:
                         navigation.goBack();
                         break;
                         default:
                          navigation.navigate('CartListScreen');
                         break;
                     }
                 }} style={[Styles.headerBtn,{flex:0, width:40,height:50,flexDirection:'row'}]}>
                        <Iconn name={name} size={23} color={name=='cart'?colors.main:'grey'} />
                        {name == 'cart' && cart.length?<View style={Styles.notes}><Text style={{color:'#fff',fontSize:(noOfItemsInCart >10?7:11)}}>{noOfItemsInCart > 10?'10+':noOfItemsInCart}</Text></View>:null }
                    </TouchableOpacity>
                )
        }
        returnStats = ()=>{
            const stats= [
                {img: require('../../assets/images/home.png'),label:'Products',value:6322},
                {icon: 'star-outline',label:'Rating',value: parseFloat(product.average_rating).toFixed(1)},
                {icon: 'text',label:'Chat response',value:'91%'},
            ]
            return(
                <View style={Styles.stats}>
                        {
                            stats.map((stat,index)=>{
                                return(
                                    <View style={[Styles.starsDiv,{borderRightWidth:(index!==2?1:0)}]}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            {stat.img?
                                            <Image source={stat.img} style={Styles.Icon} />:
                                            <Iconn name={stat.icon} color={'grey'} size={20} />
                                           }
                                           <Text style={Styles.val}> {stat.value} </Text>
                                        </View>
                                        <Text style={{color:'grey', fontSize:13}}>{stat.label}</Text>
                                    </View>
                                )
                            })
                        }
                </View>
            )
        }
        const header = (<View style={Styles.header0}>
                        {returnButton(arrBack)}
                            <Text style={{fontWeight:'bold',flex:1}} numberOfLines={1}>{product.name}</Text>
                         {returnButton('cart')}
                          <Popover navigate={navigation.navigate} />
                        </View>)
        return (
            <View style={Styles.container}>
                  <SafeAreaView />
                  <Headroom
                    style={{flex:1}}
                    headerComponent={ header }
                    ScrollableComponent={ScrollView}
                    headerHeight={ 40 }
                    scrollEventThrottle={ 40 }
                    >
             <View style={Styles.container}>
                  <ScrollView style={{backgroundColor:colors.background}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
                        <View style={[Styles.productImageContainer, { height: product.rating_count > 0 ? 430 : 460 }]}>
                            <Swiper loop={false} dotColor={Theme.backgroundColor} activeDotColor={Theme.primaryColor}>
                                {this.renderImages()}
                            </Swiper>
                        </View>
                        <View style={Styles.productDetails}>
                          <View style={Styles.productName}>
                                <View style={Styles.productNameTextWrap}>
                                    <Text style={Styles.productNameText}>{product.name}</Text>
                                    <View style={Styles.prices}>
                                        {discounted(product.regular_price,product.price,true)?<Text style={Styles.price_discounted}>RM{product.regular_price}</Text>:null}
                                        <Text style={Styles.productPrice}>RM{product.price}</Text>
                                    </View>
                                </View>
                                {discounted(product.regular_price,product.price,true)?<ImageBackground style={Styles.offBg} source={require('../../assets/images/discount.png')} >
                                    <Text style={{color:'#E35F02',fontSize:11}}>{discounted(product.regular_price,product.price,true)}%</Text>
                                    <Text style={{color:'#fff',fontSize:11,marginTop:2,fontWeight:'bold'}}>OFF</Text>
                                </ImageBackground>:null}
                            </View>
                          <View style={[Styles.div1,{paddingBottom:10}]}>
                                <View style={Styles.div2}>
                                    <Image style={Styles.freeShipImg} source={require('../../assets/images/shipping.png')} />
                                    <Text style={Styles.upTo}>Up to RM.49 off shipping for orders over RM35.00</Text>
                                </View>
                                <View style={Styles.planeDiv}>
                                     <Image style={Styles.planeImage} source={require('../../assets/images/plane.png')} />
                                     <View style={{marginLeft:5}}>
                                        <Text style={Styles.texts}>Shipping from: <Text style={{color:'#000'}}>overseas</Text></Text>
                                        <Text style={[Styles.texts,{marginTop:5}]}>Shipping to: <Text style={{color:'#000'}}>Bulkit Jelutong, Selangor</Text></Text>
                                        <TouchableWithoutFeedback>
                                            <View style={Styles.select}>
                                              <Text style={[Styles.texts,{marginTop:0, marginRight:10}]}>Cost: <Text style={{color:'#000'}}>RM0.00 - RM5.49</Text></Text>
                                              <Iconn name={'arrow-down'} size={20} color={'grey'} />
                                            </View>
                                        </TouchableWithoutFeedback>
                                     </View>
                                </View>
                            </View>
                            <View style={Styles.div1}> 
                                {returnSocial()}
                                {returnSocialButtons()}
                            </View>
                            <View style={Styles.div1}> 
                              <View style={Styles.shop}>
                                  <View style={{flexDirection:'row',alignItems:'center'}}>
                                      <View>
                                         <Image style={Styles.profileImage} source={require('../../assets/images/shipping.png')} />
                                         <View style={Styles.checkIcon}><Iconn name={'checkmark'} size={22} color={'#fff'} /></View>
                                      </View>
                                      <View style={{marginLeft:10}}>
                                            <Text style={Styles.userName}>fellcellfe.my</Text>
                                            <Text style={{color:'grey', fontSize:13}}>Active 2 minutes ago</Text>
                                      </View>
                                  </View>
                                    <TouchableOpacity style={Styles.viewBtn}>
                                        <Text>View Shop</Text>
                                    </TouchableOpacity>
                              </View>
                                {returnStats()}
                            </View>
                            {this.renderReviewerButton(product.attributes.length)}
                            <View style={Styles.productDescWrap}>
                               <Text style={{fontWeight:'bold'}}>Product Details</Text>
                                <HTMLView addLineBreaks={false} value={product.description} stylesheet={HtmlStyles} />
                                 {
                                     Object.keys(product).map((key)=>(
                                        <Text>{key}</Text>
                                    ))
                                 }
                            </View>
                        </View>
                            </ScrollView>
                </View>

               

                {/*<View style={Styles.footer}>
                    <TouchableOpacity style={FormStyle.primaryButton} onPress={() => { 
                        StatusBar.setHidden(false, 'slide'); 
                        this.addToCartPress(product, true); 
                    }}>
                        <Text style={FormStyle.primaryButtonText}>{'BUY NOW'}</Text>
                    </TouchableOpacity>
                </View>

                <ShareSheet visible={this.state.shareSheetVisible} onCancel={this.onCancel.bind(this)}>
                    <Button iconSrc={{ uri: FACEBOOK_ICON }} onPress={() => { this.shrareButtonPress('facebook') }}>Facebook</Button>
                    <Button iconSrc={{ uri: TWITTER_ICON }} onPress={() => { this.shrareButtonPress('twitter') }}>Twitter</Button>
                    <Button iconSrc={{ uri: WHATSAPP_ICON }} onPress={() => { this.shrareButtonPress('whatsapp') }}>Whatsapp</Button>
                    <Button iconSrc={{ uri: GOOGLE_PLUS_ICON }} onPress={() => { this.shrareButtonPress('googleplus') }}>Google +</Button>
                    <Button iconSrc={{ uri: EMAIL_ICON }} onPress={() => { this.shrareButtonPress('email') }}>Email</Button>
                    <Button iconSrc={{ uri: PINTEREST_ICON }} onPress={() => { this.shrareButtonPress('pinterest') }}>Pinterest</Button>
                    <Button iconSrc={{ uri: MORE_ICON }} onPress={() => { this.onCancel(); setTimeout(() => { Share.open(this.shareOptions) }, 300); }}>More</Button>
                </ShareSheet>*/}
                </Headroom>
                <View style={Styles.buttons}>
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('ChatScreen')}  >
                        <View style={Styles.sluntButton0}>
                            <Iconn name={'text'} color={colors.mainStrong} size={25}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.addToCartPress(product, false)}>
                        <LinearGradient start={{x: 0.0, y: 0}} end={{x: 0.9, y: 1.5}} locations={[0,0.5,0.6]}colors={['#B672EA', '#8046E1', '#4627D0']} style={Styles.sluntButton}>
                            <Text style={{color:'#fff'}}>Add To Cart</Text>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.addToCartPress(product, true)}>
                        <LinearGradient start={{x: 0.0, y: 0}} end={{x: 0.9, y: 1.5}} locations={[0,0.5,0.6]}colors={['#FCE414', '#FC9425', '#FC9425']} style={Styles.sluntButton}>
                            <Text style={{color:'#fff'}}>Buy Now</Text>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                </View>
            </View>


        )
    }


}
export default Connect(mapStateToProps, mapDispatchToProps)(Product);

const HtmlStyles = StyleSheet.create({
    p: {
        fontFamily: Theme.lightFont,
        fontSize: 14,
        lineHeight: 24,
        color: Theme.primaryColor,
        letterSpacing: 0.5,
        textAlign: 'justify'
    }
});
 

let SHARE_OPTIONS = {
    title: "React Native",
    message: "Hola mundo",
    url: "http://facebook.github.io/react-native/",
    subject: "Share Link" //  for email
};


//  twitter icon
const TWITTER_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABvFBMVEUAAAAA//8AnuwAnOsAneoAm+oAm+oAm+oAm+oAm+kAnuwAmf8An+0AqtUAku0AnesAm+oAm+oAnesAqv8An+oAnuoAneoAnOkAmOoAm+oAm+oAn98AnOoAm+oAm+oAmuoAm+oAmekAnOsAm+sAmeYAnusAm+oAnOoAme0AnOoAnesAp+0Av/8Am+oAm+sAmuoAn+oAm+oAnOoAgP8Am+sAm+oAmuoAm+oAmusAmucAnOwAm+oAmusAm+oAm+oAm+kAmusAougAnOsAmukAn+wAm+sAnesAmeoAnekAmewAm+oAnOkAl+cAm+oAm+oAmukAn+sAmukAn+0Am+oAmOoAmesAm+oAm+oAm+kAme4AmesAm+oAjuMAmusAmuwAm+kAm+oAmuoAsesAm+0Am+oAneoAm+wAmusAm+oAm+oAm+gAnewAm+oAle0Am+oAm+oAmeYAmeoAmukAoOcAmuoAm+oAm+wAmuoAneoAnOkAgP8Am+oAm+oAn+8An+wAmusAnuwAs+YAmegAm+oAm+oAm+oAmuwAm+oAm+kAnesAmuoAmukAm+sAnukAnusAm+oAmuoAnOsAmukAqv9m+G5fAAAAlHRSTlMAAUSj3/v625IuNwVVBg6Z//J1Axhft5ol9ZEIrP7P8eIjZJcKdOU+RoO0HQTjtblK3VUCM/dg/a8rXesm9vSkTAtnaJ/gom5GKGNdINz4U1hRRdc+gPDm+R5L0wnQnUXzVg04uoVSW6HuIZGFHd7WFDxHK7P8eIbFsQRhrhBQtJAKN0prnKLvjBowjn8igenQfkQGdD8A7wAAAXRJREFUSMdjYBgFo2AUDCXAyMTMwsrGzsEJ5nBx41HKw4smwMfPKgAGgkLCIqJi4nj0SkhKoRotLSMAA7Jy8gIKing0KwkIKKsgC6gKIAM1dREN3Jo1gSq0tBF8HV1kvax6+moG+DULGBoZw/gmAqjA1Ay/s4HA3MISyrdC1WtthC9ebGwhquzsHRxBfCdUzc74Y9UFrtDVzd3D0wtVszd+zT6+KKr9UDX749UbEBgULIAbhODVHCoQFo5bb0QkXs1RAvhAtDFezTGx+DTHEchD8Ql4NCcSyoGJYTj1siQRzL/JKeY4NKcSzvxp6RmSWPVmZhHWnI3L1TlEFDu5edj15hcQU2gVqmHTa1pEXJFXXFKKqbmM2ALTuLC8Ak1vZRXRxa1xtS6q3ppaYrXG1NWjai1taCRCG6dJU3NLqy+ak10DGImx07LNFCOk2js6iXVyVzcLai7s6SWlbnIs6rOIbi8ViOifIDNx0uTRynoUjIIRAgALIFStaR5YjgAAAABJRU5ErkJggg==";

//  facebook icon
const FACEBOOK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEUAAAAAQIAAWpwAX5kAX5gAX5gAX5gAXJwAXpgAWZ8AX5gAXaIAX5gAXpkAVaoAX5gAXJsAX5gAX5gAYJkAYJkAXpoAX5gAX5gAX5kAXpcAX5kAX5gAX5gAX5YAXpoAYJijtTrqAAAAIHRSTlMABFis4vv/JL0o4QvSegbnQPx8UHWwj4OUgo7Px061qCrcMv8AAAB0SURBVEjH7dK3DoAwDEVRqum9BwL//5dIscQEEjFiCPhubziTbVkc98dsx/V8UGnbIIQjXRvFQMZJCnScAR3nxQNcIqrqRqWHW8Qd6cY94oGER8STMVioZsQLLnEXw1mMr5OqFdGGS378wxgzZvwO5jiz2wFnjxABOufdfQAAAABJRU5ErkJggg==";

//  whatsapp icon
const WHATSAPP_ICON = "data:image/png;base64,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";

//  gplus icon
const GOOGLE_PLUS_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACQ1BMVEUAAAD/RDP/STX9Sjb+STT+SjX+SjX+SjX+STT/SzP/Sjb/SzX/VVX/SDb+SDP+SjX9RzT9STT9SjT+STX+SjT9SjT/SST/TTP+SjX+SjX/RDP/RzP+SjX+SjX/STf9SDX/SjX/TU3+Sjb+SjX/Qyz/Szb+SjX/TTP+SjX9STX+SjP/TTX9Szb+Szb/YCD/SzX/SzX+Sjb+STX/TTX/SzX/Szb/TDT+SjX9SzX/STf+TDX/SjT9SzX9Szb+SjX/SjX/SzX/STT9SjT9TDT+SDT/VQD9STX/STX9SjX+SjX9STX+SzT/UDD9Sjb+SjX9RzT/QED+SjT+SjX/XS7+SjX/Ui7/RC3+SjX/TTz/RzP+SjX/TTP/STf+SjX/STT/RjP+Sjb/SzX/Szz/Rjr/RzL+RzP+SjX/Szf/SjX9Sjb+SjX+Sjb+SjX+SjX+SjX/STf/SjT/SjT9SjX9SzT+RzT+STT/STT+SjX/STP/Tjf+SjX/Szb/SjX/STX9SjX/SjT/AAD/SjH/STb+SzX+Sjb+SjT9SDT+Sjb+SjX9STf9STT/SDX/TDf+STb/TjT/TjH+SjX+SDT/Sjb9SzX9RzX+TDT/TUD/STX+SjX+STX/VTn/QjH/SjX+SjX/Ri7+Szb/TTP+SjX/SDX/STT9SjX+SjX/SDL/TjT9Sjb/RjL+SjX9SzX/QED/TDT+SjX+SjX9STX/RjX/VSv/Rzb/STX/ORz/UDD9SzX+Sjb/STT9SzP+SzX+SjX+SjX9Szb/Ti//ZjPPn7DtAAAAwXRSTlMAD1uiy+j5/8FBZHQDY9zvnYSc5dGhBwr+1S0Zqu44mz4KtNkXY7Yo8YLcfp3bCGZ+sLhWaks2z4wO6VOklrtWRFSXos4DoD+D/ZnoEKasjwS7+gvfHC3kHmjtMlTXYjfZXBEWa+/nQRiK5u7c8vVGRWepp6+5eulQF/dfSHSQdQEfdrzguZzm+4KSQyW1JxrAvCaCiLYUc8nGCR9h6gvzFM41MZHhYDGYTMejCEDi3osdBj1+CSCWyGyp1PC3hUEF/yhErwAAAjFJREFUSMft1tdfE0EQB/ADJD+JKAomHoqKxhJLFCnSpdgIxobYgqhYaJKIHVQUsSFiBSuCvWPv3T/N2ZPD3EucvVcyL3sz2W8+l73ZvShKKEIxcCIsPGJQpAV9MThK1KzAEAaNHjosZviI2DgBR9psVrvCx6Ni1fjRNI5JIDx2nF5m4ejxsCRqVxMmknZMksGTVUzpu5zqJD1NAodNB2boyUzCrlnK7CSKOUCyGJOC4BSan6onaWLN5irpCIwgOAMBt5eZRVk2H+fQx7n92TzK8pT8AopCwCbGgiB4Pk1fsFDPFlG2mL9gRTTdnahnxcASDx/nq6SX6tkyYLnEo1qxknBJ2t9kVSlcq2WaZM1a0qXrtOv18Jbp9Q3l5Rv/39ubHKQ3V2xRtm7bXlkluyGra2qJ76jzwb/TxH721O9K3U1fsMfsgbCXcLFZvI+wL8ok3i/6+ECDOdxYJ/TBQ9Kw+nDTkRyHtodKjjbLyGMtx304cTKi8NRpoVutfJp5xgtv21ntxGw/J7T3PNdeuAhcuqxn9o5W0p1Ma78CpF/9lzdfI3ydiStobrjhIL4BRN7k4WRa3i5D5RbQ3cPDMcDtO4ZKGXCXedtuQL1nqNwHHjDxQ/rNGYbKI/gfM/ETwv6ngafSM3RwH3O7eK86Wzz9L582PO9lN9iLl6KpXr2uf9P7tvHde4e75oNEZ3/85NQ2hKUyzg/1c57klur68vXbd9XtdP34+et36C9WKAZo/AEHHmXeIIIUCQAAAABJRU5ErkJggg==";

//  email icon
const EMAIL_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABC1BMVEUAAAA/Pz8/Pz9AQEA/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz9AQEA+Pj5AQEA/Pz87Ozs7Ozs/Pz8+Pj47OztAQEA/Pz89PT01NTVBQUFBQUE/Pz8/Pz8+Pj4/Pz9BQUE+Pj4/Pz8/Pz89PT0+Pj4/Pz9BQUFAQEA9PT09PT0/Pz87Ozs9PT05OTk/Pz8+Pj4/Pz9AQEA/Pz8/Pz8/Pz8/Pz+AgIA+Pj4/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz9AQEA+Pj4/Pz8+Pj4/Pz85OTk/Pz8/Pz8/Pz8/Pz88PDw9PT0/Pz88PDw8PDw+Pj45OTlktUJVAAAAWXRSTlMA/7N4w+lCWvSx8etGX/XlnmRO7+1KY/fjOGj44DU7UvndMec/VvLbLj7YKyiJdu9O7jZ6Um1w7DnzWQJz+tpE6uY9t8D9QehAOt7PVRt5q6duEVDwSEysSPRjqHMAAAEfSURBVEjH7ZTXUgIxGEa/TwURUFyKYgMURLCvbe2gYAV7ff8nMRksgEDiKl7lXOxM5p8zO3s2CWAwGAx/CjXontzT25Y+pezxtpv2+xTygJ+BYOvh4BBDwx1lKxxhNNZqNjLK+JjVWUYsykj4+2h8gpNTUMkIBuhPNE+SKU7PQC3D62E60ziYzXIuBx0Z+XRTc9F5fgF6MhKNzWXnRejKWGJdc9GZy8AP3kyurH52Ju01XTkjvnldNN+Qi03RecthfFtPlrXz8rmzi739Ax7mUCjy6FhH/vjPonmqVD6pdT718excLX/tsItLeRAqtc7VLIsFlVy/t6+ub27v7t8XD490niy3p+rZpv3i+jy/Or+5SUrdvcNcywaDwfD/vAF2TBl+G6XvQwAAAABJRU5ErkJggg==";

//  pinterest icon
const PINTEREST_ICON = "data:image/png;base64,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"

//  clipboard icon
const CLIPBOARD_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAB5lBMVEUAAAA8PDw+Pj4/Pz8/Pz8/Pz8/Pz8+Pj47OzsAAAA5OTk+Pj4/Pz8/Pz8+Pj49PT0/Pz8/Pz85OTlAQEA/Pz87Ozs+Pj4+Pj4/Pz8/Pz8/Pz8zMzNBQUE/Pz8/Pz8/Pz9AQEA7Ozs9PT0/Pz9AQEA+Pj4/Pz8+Pj4AAABAQEA/Pz87OztBQUE/Pz8+Pj4zMzNDQ0M/Pz89PT03Nzc/Pz8/Pz8/Pz8/Pz88PDw8PDwAAABCQkI7Ozs9PT0/Pz9AQEA/Pz8uLi4rKytAQEA/Pz89PT0+Pj4/Pz8/Pz8/Pz9CQkJAQEA/Pz9CQkI/Pz8/Pz8/Pz8+Pj49PT0/Pz8yMjI/Pz88PDw/Pz9BQUE8PDw/Pz9AQEA/Pz8/Pz8/Pz89PT0/Pz9CQkI9PT1EREQ9PT08PDw4ODg+Pj6AgIA/Pz8/Pz82NjZVVVU7Ozs/Pz81NTVAQEA/Pz8+Pj49PT1BQUE/Pz8/Pz8/Pz8vLy8/Pz87OztAQEA3Nzc9PT0+Pj4/Pz89PT0/Pz8/Pz89PT1AQEA9PT04ODgzMzM/Pz8/Pz9AQEA/Pz9AQEA/Pz83Nzc9PT0/Pz9AQEA/Pz8+Pj4+Pj5AQEA/Pz89PT1FRUU5OTk/Pz8/Pz8+Pj47Ozs/Pz89PT08PDw+Pj6z1Mg0AAAAonRSTlMAEXTG8/7pslICKMn//J0u2LcSLNu9Y0523KoKL9b7hggauZsEOuJ/ARS7VifkiwUX0bEq1f1p6KGQAz4NpnpY8AsGtMIyb46NbSOMcRuh+fGTFc0z1yKFKy/dpKff1CqKMoYPp+lAgAKd6kIDhdorJJExNjflktMr3nkQDoXbvaCe2d2EijIUn3JsbjDDF1jjOOdWvIDhmhoJfWrAK7bYnMgx8fGWAAACNUlEQVRIx+2W6V8SURSGBxEVeydMbVER1DCwRNTCEhMNsywqExXcUrNVU9NK2wy1fd9sMyvrP+1cmYH5eK5f5f3APef85hnuvfPeM6MoaaW1dWXKMGdasrJzrJtgc7dhQ+p2kzRry4OuHfmSbEEhUTt37d5TRGNxiRRrLwUczjKKyiuI3uuSYCv3ARa3ZyOu2k/xAT5b7aXra3xaVlsH1LPZg4cAvzM10wbgMBs+QqtsDKTyJroXGz7a7AgandECtPLXfKzFY8hCbcBxFudpP3Gy49RpQ8UXtgBnOOzZc53CU+e7Ism7uYnt5ji0p1e3pDmqzTnmAEr7GGz/AGEDg0MXaBgeERXrKIWFBQz2IvlYHbtEh/EycOUqVQLXVCDPxvGz+MPYdRGWjE/coGFyyg9M32SwM8PkydlQIim7JX6DxHpvM9g7c+SjoLESmqd9vjvDYO9NEzs1aahYY7SK+3Zm31Ddmp8jDx4qysIj2qt4O6dviH4xqvk5soj40vJjqjzh7HOf6BtPtb1SnulG6X3O6bHdqb5BejHbKtDOl+UcQ78iNuwzFKKvwx1v3npYJ+kd0BYynqz3Eu2OZvnB+IyCRVE+TD5qSmWBRuDjJzb8GWhIJq4xv36kWKoH6mr1vlFDnvRW86e9Qtd/qUrs1VeKv1VKbJjrOz3Wih8UrTpF37ArMlotFmfg58raLxrjvyXfifl/ku/TdZsiK9NfNcH+y93Ed4A1JzvLkmnOMClppbV19R+iQFSQ2tNASwAAAABJRU5ErkJggg==";

//  more icon
const MORE_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEUAAABEREQ9PT0/Pz8/Pz9AQEA7OzszMzM/Pz8/Pz9FRUU/Pz8/Pz9VVVUAAAA/Pz8+Pj4/Pz8/Pz9BQUFAQEA/Pz+e9yGtAAAAFnRSTlMAD5bv9KgaFJ/yGv+zAwGltPH9LyD5QNQoVwAAAF5JREFUSMft0EkKwCAQRFHHqEnUON3/qkmDuHMlZlVv95GCRsYAAAD+xYVU+hhprHPWjDy1koJPx+L63L5XiJQx9PQPpZiOEz3n0qs2ylZ7lkyZ9oyXzl76MAAAgD1eJM8FMZg0rF4AAAAASUVORK5CYII=";

