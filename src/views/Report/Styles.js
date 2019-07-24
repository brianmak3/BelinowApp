import { StyleSheet } from 'react-native';
import { colors } from '../../common/Index';

export default StyleSheet.create({
    body:{
        flex:1, 
        backgroundColor:'#fff'
    },
    main:{
        backgroundColor:colors.background,
        flex:1, 
    },
    typeText:{
        marginLeft:5, 
        marginTop:25,
        marginBottom:10,
        color:'grey',
        fontSize:13
    },
    img:{
        flex:1,
        height:null,
        width:null, 
        resizeMode:'contain'
    },
    cameraDiv:{
        height:80,
        width:80,
        borderColor:'grey',
        borderStyle:'dotted',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1
    },
    imageDiv:{
        height:80,
        width:80,
        marginRight:10,
        borderColor:'#D3D2D0',
        borderWidth:0.5
    },
    input:{
        width:'100%',
        height:200,
        fontSize:13,
        marginTop:20
    },
    close:{
        position:'absolute',
        zIndex:100,
        alignItems:'flex-end',
        width:'100%',
        top:-10
    },
    icon:{
        height:20,
        width:20,
        borderColor:'#D3D2D0',
        borderWidth:0.5,
        borderRadius:10,
        justifyContent:'center',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingLeft:2,
        paddingTop:2
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:15
    },
    Header:{
        height:50,
        backgroundColor:'#fff',
        flexDirection:'row',

    },
    headerTitle:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
})