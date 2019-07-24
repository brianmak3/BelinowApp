import { StyleSheet, Platform, Dimensions } from 'react-native'
import Theme from '../../theme/style'
import { colors } from '../../common/Index';

export default StyleSheet.create({

    searchView: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    searchBar: {
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    searchBarInner: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#E9EAEA',
        borderRadius:15,
        paddingLeft:5,
        flex: 0.98
    },
    searchText: {
        fontFamily: Theme.regularFont,
        fontSize: 15,
        color: Theme.primaryColor,
        lineHeight: 16,
        height: 40,
        flex: 1,
        marginLeft:5
    },
    searchIcon: {
        width: 16,
        height: 16
    },
    optionBtn:{
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        paddingLeft:10,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#DCDEDE', 
    },
    popover:{
        backgroundColor:'rgba(0,0,0,0.5)',
        zIndex:100,
        position:'absolute',
        height:'100%',
        marginTop:-32,
        width:'100%'
    },
    closeIcon:{
        width: 16,
        height: 16
    },
    sortDiv:{
        borderBottomColor:'#E9EAEA',
        borderBottomWidth:1,
        paddingBottom:5
    },
    allBtn:{
        width:'30%',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:colors.main,
        alignItems:'center'
    },
    allText:{
        color:colors.main
    },
    sortSelection:{
        flexDirection:'row',
        width:'45%',
        justifyContent:'space-between',
        marginLeft:5
    },
    btn:{
        padding:10,

    },
    btnsList:{flexDirection:'row',
            width:'40%',
            justifyContent:'space-around'
        },
    more:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        color:'#5B5A5A',
        fontSize:13,
        marginLeft:5
    },
    buttons:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    div:{
        marginTop:15,
        padding:10
    },
    button:{
        backgroundColor:'#E9EAEA',
        padding:5,
        margin:7,
        borderRadius:5,
        height:30,
        justifyContent:'center'
    },
    buttonText:{
        fontSize:12
    },
    noResults:{
        fontSize:15,
        fontWeight:'bold',
        color:'#898888'
    },
    // listItemButton: {
    //     padding: 20,
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     borderBottomColor: '#F8F8F8',
    //     borderBottomWidth: 1
    // },
    // listItemText: {
    //     fontFamily: Theme.regularFont,
    //     fontSize: 16,
    //     color: Theme.primaryColor,
    //     lineHeight: 19,
    //     width: 220,
    //     letterSpacing: 1,
    // },
    // listItemTextRight: {
    //     color: '#9B9B9B',
    //     fontFamily: Theme.regularFont,
    //     fontSize: 16,
    //     lineHeight: 19,
    //     letterSpacing: 1
    // },
    // listItemImage:{
    //     width: 90,
    //     height: 90,
    //     borderWidth: 1,
    //     marginRight: 15,
    //     borderColor: 'white',
    //     borderRadius: 4
    // }

    image: {
        width: 150/2,
        height: 184/2,
        borderRadius: 4,
        marginBottom: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E6E8EC'
    },
    item: {
        paddingLeft: 15,
        flexDirection: 'row'
    },
    prices: {
        flexDirection: 'row'
    },
    item_inner:{
        
    },
    price: {
        fontFamily: Theme.boldFont,
        fontSize: 15,
        color: Theme.primaryColor,
        letterSpacing: 0.5,
        fontWeight: '600'

    },
    price_discounted: {
        fontFamily: Theme.boldFont,
        fontSize: 15,
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
        fontSize: 15,
        letterSpacing: 1,
        marginTop: 8,
        marginBottom: 10,
        color: Theme.primaryColor,
        width: 235,
        fontWeight: '500'
    },


})