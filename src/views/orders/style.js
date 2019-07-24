import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.backgroundColor,
    },
    orders:{
        marginTop: 30
    },
    cartHeader: {
        backgroundColor: Theme.primaryColor,
        flexDirection: 'row',
        borderBottomWidth: 0.7,
        borderBottomColor: '#E8E8E8',
        height: 50,
        justifyContent: 'center',
        paddingTop: 10
    },
    cartHeaderLeft: {
    },
    cartStatusText: {
        fontFamily: Theme.boldFont,
        fontSize: 17,
        lineHeight: 26,
        fontWeight: '700',
        color: Theme.white,
        letterSpacing: 1.67
    },
    cartStatusBottom: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cartStatusText2: {
        fontFamily: Theme.regularFont,
        fontSize: 14,
        lineHeight: 19,
        fontWeight: '500',
        color: '#fff',
        letterSpacing: 1
    },
    cartStatusText3: {
        fontFamily: Theme.boldFont,
        fontSize: 14,
        lineHeight: 19,
        fontWeight: '600',
        color: Theme.white,
        letterSpacing: 1
    },
    cartHeaderButtonWrapper: {
        width: '50%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    cartHeaderButton: {
        width: 120,
        height: 30,
        backgroundColor: Theme.primaryMoreColored,
        alignSelf: 'flex-end',
        marginRight: 15
    },
    cartHeaderButtonText: {
        fontSize: 12
    },

    item: {
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: '#E8e8e8',
        borderBottomWidth: 1,
        marginLeft: 20,
        paddingLeft: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    right: { 
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5
    },
    order_no: {
        fontFamily: Theme.regularFont,
        fontWeight: '400',
        color: Theme.primaryColor,
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0.5,
    },
    date: {
        fontFamily: Theme.regularFont,
        fontWeight: '400',
        color: '#6E6E6E',
        fontSize: 13,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginTop: 3
    },
    dateItems:{ 
        marginTop: 3,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    sep: {
        backgroundColor: '#9B9B9B',
        height: 4,
        width: 4,
        borderRadius: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 3
    },
    items: {
        fontFamily: Theme.regularFont,
        fontWeight: '400',
        color: '#6E6E6E',
        fontSize: 13,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginTop: 3
    }, 
    status: {
        backgroundColor: Theme.primaryColor,
        borderRadius: 4,
        width: 74,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    status_text: {
        color: 'white',
        fontFamily: Theme.mediumFont,
        fontWeight: '600',
        fontSize: 12,
        letterSpacing:0,
        lineHeight: 14,
    },
    pending: {
        backgroundColor: '#9B9B9B',
    },
    processing:{
        backgroundColor: '#9B9B9B',
    },
    onhold: {
        backgroundColor: '#9B9B9B',
    }, 
    completed: {
        backgroundColor: Theme.primaryColor,
    },
    cancelled: {
        backgroundColor: '#D0021B',
    },
    refunded: {
        backgroundColor: Theme.primaryColor,
    },

     

});