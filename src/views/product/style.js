import { Dimensions, StyleSheet, Platform } from 'react-native'
import Theme from '../../theme/style'
import {colors} from '../../common/Index';
import isIphoneX from '../../common/iphonex'
import isIphone5 from '../../common/iphone5'
export default StyleSheet.create({
    scene: {
        height: 100
    },
    container: {
        flex: 1
    },
    header0:{
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',      
        height:50
    },
    headerBtn:{
        flex:10,
        height:35,
        justifyContent:'center',
        alignItems:'center'
    },
    offBg:{
        height:35,
        width:30,
        justifyContent:'center',
        alignItems:'center'
      },
    notes:{
        height:14,
        width:14,
        backgroundColor:colors.main,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-20,
        marginLeft:-7
    },
    select:{flexDirection:'row',
        marginTop:5,
        alignItems:'center'
    },
   texts:{
        color:'grey',
        fontSize:14,
        marginLeft:10,
        marginTop:15
    },
    planeImage:{marginLeft:5,
        height:30,width:35,
        resizeMode:'contain',
        marginTop:15
    },
    upTo:{color:'grey',
        fontSize:15,
        marginLeft:10
    },
    planeDiv:{
        flexDirection:'row',
        paddingRight:10,
    },
    freeShipImg:{
        height:20,
        width:35,
        resizeMode:'contain'
    },
    div2:{
        flexDirection:'row',
        padding:10,
        paddingBottom:0,
        marginTop:10},
    div1:{
        backgroundColor:'#fff',
        padding:10,
        paddingTop:0, 
        marginTop:8,
        paddingLeft:0,
        paddingBottom:0
    },
    option:{
        flexDirection:'row',
        height:40,
        alignItems:'center',
        paddingLeft:15,
        borderBottomWidth:0.5,
        borderBottomColor:'#D3D2D0'
    },
   productImageContainer: {
        height: 460,
        width: '100%',
        top: -15,
        backgroundColor:'red'
    },
    productImage: {
        width: '100%',
        height: 480
    },
    productDescWrap:{
        marginTop: 15
    },
    scene: {
        height: 100
    },
    container: {
        flex: 1,
        backgroundColor: Theme.backgroundColor,

    },
    header: {
        ...Platform.select({
            android: {
                height: 65,
            },
            ios: {
                height: isIphoneX() ? 85 : 65,
            }
        }),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    close: {
        width: 100,
        height: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 15,
        paddingLeft: 15
    },
    closeImage: {
        width: 20,
        height: 16,
    },
    productImageContainer: {
        height: 460,
        width: '100%',
        // top: -45
    },
    productImage: {
        width: '100%',
        height: 480,
    },
    shop:{padding:15,paddingRight:5,flexDirection:'row',
    justifyContent:'space-between',alignItems:'center'},

    productName: {
        flexDirection: 'row',
        padding: 15, 
        justifyContent:'space-between',
        backgroundColor:'#fff'
    },
    selDiv:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    starsDiv:{
        justifyContent:'space-around',
        height:50,
        width:'31%',
        alignItems:'center',
        borderRightColor:'#000'
    },
    stats:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:5,
        justifyContent:'center'
    },
    val:{fontSize:13,
        color:colors.mainStrong,
        fontWeight:'bold'
    },
    Icon:{height:35,
        width:35,
        resizeMode:'cover'
    },
    viewBtn:{
        height:30,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#A7A6A5',
        borderWidth:0.5,
        borderRadius:3
    },
    stats:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:5,
        justifyContent:'center'
    },
    checkIcon:{
        height:22,
        width:22,
        borderRadius:11,
        backgroundColor:colors.mainStrong,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-15,
        marginLeft:30
    },
    serName:{fontWeight:'bold',
    marginBottom:5, 
    fontSize:13
},
    profileImage:{
        height:50,
        width:50,
        borderRadius:25,
        resizeMode:'contain',
        borderWidth:0.5,
        borderColor:'#D3D2D0'
    },
    socialBt:{
        width:70,
        height:25,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        paddingRight:5,
        marginRight:10,
        borderColor:'#D3D2D0',
        borderWidth:0.5,
        borderRadius:3,
        justifyContent:'space-around'
    },
    socialBtn:{
        width:'45%',
        height:35,
        borderColor:'#D3D2D0',
        borderWidth:1,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:15,
        paddingLeft:10,
        paddingRight:10
    },
    productNameTextWrap: {
        flex: 0.70,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    productNameText: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontFamily: Theme.mediumFont,
        color: Theme.primaryColor,
        fontWeight: '500'
    },
    productPrice: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
        textAlign: 'right',
        letterSpacing: 0.5,
        fontFamily: Theme.boldFont,
        color: colors.main
    },
    price_discounted: {
        textAlign: 'right',
        fontFamily: Theme.boldFont,
        fontSize: 15,
        lineHeight: 24,
        color: Theme.primaryColor,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        opacity: 0.75,
        fontWeight: '500',
        letterSpacing: 0.5,
        marginRight:20
    },
    prices: {
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'flex-start'
    },
    productShorDescription: {
        paddingHorizontal: 15,
        height: 50
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: Theme.backgroundColor,
        ...Platform.select({
            android: {
                height: 80,
            },
            ios: {
                height: isIphoneX() ? 85 : 80,
            }
        }),
    },
    productTabs:{
        marginHorizontal: 0
    },


    // TABS
    tabHeaders: {
        flexDirection: 'row'
    },
    tabHeader: {
        flex: 0.333334,
        backgroundColor: Theme.greyColor,
        padding: 15,
        borderWidth: 1,
        borderColor: Theme.primaryColor, 
    },
    tabHeaderActive: {
        //backgroundColor: Theme.primaryColor,
        borderWidth: 0
    },
    tabHeaderText: { 
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontFamily: Theme.mediumFont,
        color: Theme.primaryColor
    },
    textLeft: { textAlign: 'left' },
    textCenter: { textAlign: 'center' },
    textRight: { textAlign: 'right'},

    tabHeaderTextActive: {
        color: Theme.white

    },
   
    tabContents:{
        marginTop: 15,
        padding: 15
    },
    tabContentActive: {
        display: 'flex'
    },
    tabContent:{
        display: 'none'
    },


    productContent:{
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8', 
    },

    
    
    otherDetailButton: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginLeft: 10,
        height: 40,
        marginTop: 20
    },

    otherDetailButtonText: {
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        paddingLeft: 10,
        paddingTop: 9,
        height: 40,
    },
    otherDetailButtonImage: {
        marginTop: 0, 
        height: 13,
    },

    productAtributesAndReviewsButton: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    productDescWrap:{
        padding:5,
        backgroundColor:'#fff',
        marginTop:10
    },
    buttons:{
        height:45,
        flexDirection:'row'
    },
    sluntButton:{
        width:'40%',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        transform: [{ skewX: '-18deg' }]
    },
    sluntButton0:{
        width:'20%',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        transform: [{ skewX: '-18deg' }]
    },
    reviewsFullRow:{
        flex: 1, 
        marginLeft: 0,
    },

    productActions:{
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 48
    },
    productActionButton: {
        flex: 0.33334, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRightWidth: 1, 
        borderRightColor: '#e8e8e8'
    },
    likeImage: {
        width: 18,
        height: 16
    },
    cartImage: {
        width: 20,
        height: 18
    },
    shareImage: {
        width: 15,
        height: 18
    }, 
   


    cartButton: {
        position: 'absolute',
        right: 8, 
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: 100,
        paddingBottom: 15, 
        paddingHorizontal: 15
    },
    cartIconBadged: {

    },
    cartIcon: {
        width: 22,
        height: 22
    },
    badgeWrap: {
        width: 18,
        height: 18,
        borderRadius: 18,
        backgroundColor: Theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -2,
        right: -8
    },
    badgeText: {
        color: Theme.white,
        fontFamily: Theme.boldFont,
        fontSize: 10,
        fontWeight: '600',
        textAlign: 'center'
    },

});


