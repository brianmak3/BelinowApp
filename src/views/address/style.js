import { StyleSheet } from 'react-native'
import {colors} from '../../common/Index';
export default StyleSheet.create({
    main:{
        backgroundColor:colors.backgroundColor,
        flex:1,
        justifyContent:'space-between'
    },
    dropdown:{
        flexDirection:'row',
        marginBottom:5,height:40,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#DFDEDE',
        borderBottomWidth:1,
        width:'95%'
    },
    textInput:{
     height:20,
     borderBottomColor:'#DFDEDE',
     borderBottomWidth:1,
     flex:70
    },more:{
        marginTop:5,
        color:'#51514F',
        fontSize:12
    }
    ,  actionBtns:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:50,
        borderBottomWidth:5,
        borderBottomColor: '#E8E8E7',
        backgroundColor:'#fff'
    },
    selectBtn:{
        width:'50%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },submitBtn:{
        justifyContent:'center',
        alignItems:'center',
        height:45,
        backgroundColor:colors.main
      }
});