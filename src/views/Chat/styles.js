import { StyleSheet} from 'react-native';
import {colors} from '../../common/colors';

export default StyleSheet.create({
    main:{
        backgroundColor:colors.main,
        flex:1
    },
    loginBtn:{
      alignItems:'flex-end',
      width:'100%',
      paddingRight:20,
      marginTop:-25
    },
    btn:{
      flexDirection:'row',
      width:120,
      height:35,
      justifyContent:'space-around',
      backgroundColor:'#fff',
      alignItems:'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },
    imgLog:{
      width:'96%',
      height:70,
    },
    subDiv:{
      backgroundColor:'#fff',
      padding:15,
      marginTop:20,
      marginBottom:30,
    },
    lastMessage:{
        marginLeft:15,
        marginTop:15,
        fontSize:14,
        color:'#585858'
    },
    chatTextDiv:{
        borderBottomWidth:0.5,
        borderBottomColor:colors.background,
        paddingBottom:10
    },
    unreadChatDiv:{
        height:20,
        width:20,
        backgroundColor:colors.main,
        borderRadius:10,
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center'
    },
    unreadChatText:{
        color:'#fff',
        fontSize:11
    },
    Chat:{  padding:5,
           backgroundColor:'#fff',
           flexDirection:'row',
           justifyContent:'center',
           marginTop:1
          },
    orderUpdates:{
        color:'grey',
        fontSize:12,
        marginTop:10
    },
    loginOffers:{
        fontWeight:'bold', 
        fontSize:13
    },
    shoppingText:{
        color:colors.order,
        marginTop:20
    },
    noMessages:{
      flex:1,
      backgroundColor:colors.background,
      justifyContent:'center',
      alignItems:'center',
      padding:15
    },
    loginText:{
        color:'#CF8A04',
        fontSize:13
    },
    container0:{
        flex:1
    },
    chatDiv:{
        flex:98,
        flexDirection:'row'
    },
    chatTime:{
        fontSize:11,
        color:'grey',
        textAlign:'right'
    },
    Imig:{
        height:50,
        width:50,
        borderRadius:25
    },
    header:{
        height:40,
        backgroundColor:colors.main,
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontSize:18,
        color:'#fff'
    },
    container:{
         backgroundColor:'#fff',
         flex:1
    },
    texteArea:{
        paddingLeft:10,
        flex:90,
        height:40
      },
      btnImg:{
          height:20,
          width:20,
          marginTop:-2,
          marginLeft:-5,
          borderRadius:10
      },
      messageDiv:{
          maxWidth:'80%',
          borderWidth:1, 
          borderColor:'#E5E5E5',
          padding:2, 
          paddingLeft:5,
          paddingRight:5,
          borderRadius:10
      },
      img:{
          height:null,
          width:null,
          flex:1,
          borderRadius:25,
          resizeMode:'contain'
      },
      date:{
          marginTop:10,
          marginBottom:10,
          textAlign:'center',
          color:'#000',
          fontSize:11,
        },
      time:{
          textAlign:'right',
          color:'grey',
          fontSize:9,
          marginTop:2
        },
      price:{
          marginTop:10,
          color:colors.main,
          fontWeight:'bold'
      },
      template:{
          flexDirection:'row',
          borderColor:'#B7E5F8',
          alignItems:"center",
          borderWidth:5,
          padding:3,
          borderRadius:5,
          maxWidth:'90%'
      },
      item:{
          width:'100%',
          marginTop:15,
          padding:5,
          paddingTop:0,
          flexDirection:'row',
          borderBottomWidth:5,
          borderBottomColor:colors.background
      },
      actionBtn:{
          height:30,
          backgroundColor:colors.main,
          marginLeft:-20,
          width:60,
          justifyContent:'center',
          alignItems:'center'
      },
      footer:{
          flexDirection:'row',
          backgroundColor:'#F1F0F0',
          padding:10,
          alignItems:'center'
      },
      textDiv:{
          flexDirection:'row',
          flex:75,
          backgroundColor:'#fff',
          borderColor:'#CAC8C8',
          borderWidth:1,
          marginRight:5,
          marginLeft:5,
          borderRadius:20,
          alignItems:'center',
          padding:5
      },
      attachBtn:{
          height:30,
          width:30,
          borderRadius:15,
          backgroundColor:colors.main,
          justifyContent:'center',
          alignItems:'center',
          paddingLeft:3,
          paddingTop:2
      },
      header0:{
          flexDirection:'row',
          justifyContent:'space-between',
          padding:10,
          paddingBottom:0,
          borderBottomWidth:1,
          borderBottomColor:'#ECECEC',
          backgroundColor:'#fff'
      },
      button:{
          marginRight:2,
          backgroundColor:'#F2F5F5',
          height:30,
          justifyContent:'center',
          alignItems:'center',
          paddingLeft:5,
          paddingRight:5,
          borderRadius:5
      }
})
