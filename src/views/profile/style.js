import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.backgroundColor
    },
    container2: {
        flex: 1,
        backgroundColor: 'white'
    },
    lastOrder: {
        height: 150,
        width: '100%',
        paddingTop: 20
    },
    lastOrderButton: {
        backgroundColor: Theme.primaryColor,
        height: 55,
        marginHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 4
    },
    pendingicon: {
        marginTop: 5,
        width: 12,
        height: 12,
        marginBottom: 5
    },
    pendingButton: {
        fontSize: 14,
        fontFamily: Theme.regularFont,
        color: 'white',
        fontWeight: '400'
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 20
    },
    oitext: {
        fontSize: 13,
        fontFamily: Theme.regularFont,
        color: '#999999'
    },
    buttons: {
        flexDirection: 'column',
        marginLeft: 30
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#E8E8E8',
        paddingRight: 15,
        justifyContent: 'space-between'

    },
    blast: {
        borderBottomWidth: 0.5,

    },
    bicon: {
        marginTop: 5,
        width: 20,
        height: 14,
        marginBottom: 5
    },
    bicon1: {
        marginTop: 5,
        width: 16,
        height: 16,
        marginBottom: 5
    },
    bicon11:{
        width: 30,
        height: 30
    },
    btext: {
        fontSize: 16,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        fontWeight: '300',
        paddingLeft: 15,
        letterSpacing: 0.5
    },
    btext1: {
        fontSize: 15,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        fontWeight: '400',
        textAlign: 'left',
        marginBottom: 2
    },
    btext2: {
        fontSize: 13,
        fontFamily: Theme.regularFont,
        color: '#999999',
        fontWeight: '400',
        textAlign: 'left'
    },
    btext22:{
        fontSize: 15,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        fontWeight: '400',
        textAlign: 'left',
        marginBottom: 2,
        marginLeft: 5
    },
    buttonLf: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
       
    },
    buttonLf2:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    buttonRg: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },


    // ORDER - STATUS
    order: {
        position: 'relative',
        margin: 15,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 1},
        shadowRadius: 1.5,
        elevation: 0.5,
        borderRadius: 3,
        backgroundColor: Theme.backgroundColor,

    },
    orderPast: {
        
    },
    orderHeader: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    ohInfo: {
        paddingTop: 15,
        paddingHorizontal: 15
    },
    ohLabel: {
        fontSize: 13,
        fontFamily: Theme.boldFont,
        color: Theme.primaryColor, 
        textAlign: 'center',
        marginBottom: 3
    },
    ohValue: {
        fontSize: 15,
        fontFamily: Theme.regularFont, 
        color: '#999999',
        textAlign: 'center'
    },
    orderBody: {
        marginHorizontal: 15,
        backgroundColor: 'white',
        
    },
    orderWhen: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 30,
        paddingTop: 15
    },
    orderDate: {
        fontSize: 15,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor, 
        textAlign: 'center'
    },
    orderProg: {
        marginTop: 15,
        marginBottom: 15,
    },
    orderProgTitles: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    orderProgTitle: {
        paddingHorizontal: 15,
        width: '33.33333%',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor, 
    },
    progresses: {
        flexDirection: 'row',
        paddingVertical: 15,
    },
    progress: {
        width: '33.33333%',
        height: 1.5,
        backgroundColor: '#EAEAEA',
    },
    progressFill: {
        backgroundColor: Theme.primaryMoreColored,
        width: '33.33333%',
        height: 1.5,
    },
    progressSquare: {
        width: 10.5,
        height: 10.5,
        left: '45%',
        backgroundColor: '#EAEAEA',
        transform: [{ rotate: '45deg' }],
        top: -4.5
    },
    progressSquareFill:{
        width: 10.5,
        height: 10.5,
        left: '45%',
        backgroundColor: Theme.primaryMoreColored,
        transform: [{ rotate: '45deg' }],
        top: -4.5
    },
    orderBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingRight: 0
    },
    orderBottomLf: { 
        flexDirection: 'row',
        alignItems: 'center'
    },
    orderStatusText: {
        fontSize: 12,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor, 
        paddingLeft: 8,
    },
    orderBottomRg: {
       justifyContent: 'flex-end',
        alignItems: 'center'
    },
    viewDetail: {
      width: 110,
      height: 40
    },
    pendingButton2: {
        fontSize: 14,
        color: 'white',
        fontWeight: '500',
    },
    userIcon: {
        width: 60,
        height: 60,
        borderRadius: 30
    },

    userHeader:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingTop: 10,
        paddingBottom: 30
    },
   
    userHeaderLeft: {
        flex: 0.50,
        paddingLeft: 15,
        alignItems: 'flex-start',
    },
    userHeaderRight: {
      
    },
    userName: {
        fontSize: 20,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        marginBottom: 2,
        letterSpacing: 0.5
    },
    userNameBottom:{
        fontSize: 13,
        fontFamily: Theme.lightFont,
        fontWeight: '300',
        color: '#4A4A4A',
        letterSpacing: 0.5,
        marginBottom: 5
    },
    main:{
        backgroundColor:'#fff',
        flex:1
    },
    authBtns:{
        flexDirection:'row',
        height: 50,
        borderBottomColor: '#E8E8E7',
        width:'100%',
        borderRadius:5
      },
      actionBtns:{
        flex:50,
        alignItems:'center',
        justifyContent: 'center'
    },
    lottie: {
        width: '100%',
        height: '100%'
      },
    inputs:{
        paddingTop:20
    },
    label:{
        fontSize:18,
        marginTop:20,
        color: '#686867'
    },
    value:{
        borderBottomColor:'#D0D0CF',
        borderBottomWidth:1,
        height:40,
        paddingLeft:10
    },
    actionBtns1:{
        height:40,
        width:'48%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:2
    },
    error:{
        color:'red',
         fontSize:12
    }
    

});