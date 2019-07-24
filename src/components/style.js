import { StyleSheet } from 'react-native';
import Theme from '../theme/style';
import  { colors } from '../common/Index';
export default  StyleSheet.create({
    view: {
        marginBottom: 15
    },
    list: {
        flexDirection: 'row',
        paddingRight: 15
    },
    productDiv:{
        width:'48%',
        margin:4,
        marginTop:7,
        backgroundColor:'#fff'
    },
    description:{
        fontSize:12,
        fontWeight:'bold'
    },
    item: {   
        width:'47%',
        backgroundColor:'#fff'
    },
    productImg:{
        width:'98%',
        height: 184,
        resizeMode:'contain'
    },
    gridItem:{
        flexDirection:'row',
        padding:1,marginTop:2,
        backgroundColor:'#fff',
        borderBottomColor:'#C2C1C1'
    },
    gridImage:{
        height:100,
        width:110,
        resizeMode:'contain'
    },
    prices:{
        flexDirection: 'row'
    },
    price:{
        fontFamily: Theme.boldFont,
        fontSize: 14,
        color: Theme.primaryColor,
        letterSpacing: 0.5,
        fontWeight: '600'

    },
    newPrice:{
        color:colors.main,
        fontWeight:'bold',
        marginTop:2,
        fontSize:15
     },
     oldPrice:{
         fontSize:14,
         color:'grey',
         margin:5,
         marginLeft:0,
         fontSize:11
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
