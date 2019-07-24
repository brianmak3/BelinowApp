import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'
import isIphoneX from '../../common/iphonex'

const shippingValue = {
    fontSize: 20,
    fontFamily: Theme.regularFont,
    color: Theme.primaryColor,
    letterSpacing: 1,
    textAlign: 'center',
    fontWeight: '500'
}

const shippingTitle = {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: Theme.regularFont,
    fontWeight: '300',
    color: Theme.primaryColor,
}

const shippingMethodButton = {
    flex: 0.33334,
    backgroundColor: '#fff',
    padding: 8,
    marginRight: 10,
    marginTop: 10,
    borderColor: Theme.primaryColor,
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
}
const optionButton = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    height: 160 / 1.8,
    width: 240 / 1.4,
    borderRadius: 4,
    padding: 25
}

export default StyleSheet.create({
    content: {
        paddingHorizontal: 0,
        flex: 1
    },
    loadingImage: { 
        width: 75, 
        height: 75 
    },
    loadingText:{
        fontFamily: Theme.regularFont,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 24,
        color: Theme.primaryColor,
        marginTop:15
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
    },
    pageContentComplete: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formBody:{
        flex:1,
        paddingBottom: 50
    },
    options: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    optionButton: {
        ...optionButton
    },
    optionText: {
        fontFamily: Theme.regularFont,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: Theme.primaryColor,
        marginTop: 10,
        letterSpacing: 1
    },
    optionImage: {
    
    },
    optionLeft: {
        marginRight: 10,
        //marginLeft: 15
    },
    optionRight: {
        marginRight: 15,
    },
    optionButtonCurrent: {
        ...optionButton,
        borderColor: Theme.primaryColor,
        borderWidth: 0.5,
        backgroundColor: Theme.backgroundColor,
    },

    cardDetails: {
        flex: 1,
        paddingHorizontal: 15
    },
    cardDetailTitle: {
        fontFamily: Theme.regularFont,
        fontSize: 14,
        color: Theme.primaryColor
    },
    cardDetailSubTitle: {
        fontFamily: Theme.regularFont,
        fontSize: 14,
        color: Theme.greyColor
    },
    cardForm: {
        marginTop: 10,
        borderColor: '#BFBFBF',
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: Theme.backgroundColor, 
    },
    cardInputRow: {
        flexDirection: 'row',
        borderBottomColor: '#BFBFBF',
        borderBottomWidth: 0.5,
        paddingBottom: 0.5
    },
    cardLabel: {
        flex: 0.3,
        padding: 15, 
    },
    cardInput: {
        flex: 0.7,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 4,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },

    agreeBox: {
        position: 'absolute',
        bottom: isIphoneX() ? 80 : 50,
        backgroundColor: Theme.backgroundColor,
        paddingHorizontal: 15,
        paddingVertical: 20,
        width: '100%',
        flexDirection: 'row'
    },
    agreeTextWrap: {flex: 0.7, justifyContent: 'flex-start'},
    agreeTextButton: {},
    agreeText: {},
    agreeSwitch: {
        flex:0.3,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    iconcCheckWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    }, 
    iconCheck: {
        width: 90,
        height: 92
    },
    thankyou: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 60
        
    },
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100,
        flex: 1
    },
    thankyouText: {
        fontFamily: Theme.mediumFont,
        fontSize: 16,
        fontWeight: '600',
        color: Theme.primaryColor,
        lineHeight: 19,
        letterSpacing: 0,
        textTransform: 'uppercase'
    },
    desc: {  
        flexDirection: 'row',
         justifyContent: 'center', 
         flexWrap: 'wrap', 
         alignItems: 'center',
         flex: 1
    }, 
    descText: {
        fontFamily: Theme.regularFont,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: '#9B9B9B',
    }, 
    descLinkText: {
        fontFamily: Theme.regularFont,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: Theme.primaryColor
    },
   
    pageHeading: {
        padding: 15,
        paddingBottom: 5,
    },
    pageHeadingText:{
        fontSize: 14,
        fontFamily: Theme.mediumFont,
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: 0.39,
        color: Theme.primaryColor,
    },

    cartPaymentTotal: {
        // borderTopWidth: 0.5,
        // borderTopColor: '#E8E8E8',
        paddingTop: 15,
        paddingBottom: 0,
        marginTop: 50
    },

    subtotal: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    subtotalText: {
        flex: 0.5,
        textAlign: 'left',
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '400',
        letterSpacing: 0.94,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor
    },
    subtotalText2: {
        flex: 0.5,
        textAlign: 'right',
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '400',
        letterSpacing: 0.94,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor
    },
    totalWrap: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#E8E8E8',
    },
    totalText: {
        letterSpacing: 1,
        flex: 0.5,
        textAlign: 'left',
        fontSize: 16,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        fontWeight: '500'
    },
    totalText2: {
        letterSpacing: 1,
        flex: 0.5,
        textAlign: 'right',
        fontSize: 16,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        fontWeight: '500'
    },
    shippingMethodsWrap:{
    },
    shippingMethodsList: {
        marginBottom: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        flex: 1
    },
    shippingMethodButton1: { ...shippingMethodButton, backgroundColor: Theme.primaryColor },
    shippingMethodButton: { ...shippingMethodButton },

    shippingValue1: { ...shippingValue,  color: '#FFF' },
    shippingValue: { ...shippingValue },

    shippingTitle: { ...shippingTitle,  },
    shippingTitle1: { ...shippingTitle, color: '#FFF' },

});
