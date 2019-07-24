import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'

export default StyleSheet.create({
   
    container: {
        flex:1,
        backgroundColor: '#fff', 
    },
    flterBtn:{
        flex:50,
        borderBottomColor:'#FABA7C',
        borderBottomWidth:1
    },
    flterBtnGradient:{
        width:'100%',
        height:45,
        justifyContent:'center',
        alignItems:'center'
    },
    filterDiv:{
        borderBottomWidth:1,
        borderBottomColor:'#EEEDED',
        paddingTop:10,
        paddingBottom:5,
        marginTop:20
    },
    priceInput:{
        height:30,
        borderRadius:5,
        width:'45%',
        borderWidth:1,
        borderColor:'#EEEDED',
        paddingLeft:10
    },
    moreBtn:{
        flexDirection:'row',
        justifyContent:'space-between'
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
    buttonText:{
        fontSize:12
    },
    button:{
        backgroundColor:'#E9EAEA',
        padding:5,
        margin:7,
        borderRadius:5,
        height:30,
        justifyContent:'center'
    },
});