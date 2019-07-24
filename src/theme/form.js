import { StyleSheet, Platform } from 'react-native'

import Theme from './style'
import isIphoneX from '../common/iphonex'
// import isIphone5 from '../common/iphone5'

export default StyleSheet.create({
    // --------------------------- CONTAINER 
    container: {
        flex: 1,
        backgroundColor: Theme.backgroundColor
    },



    // --------------------------- FLEX GRID 
    row: {
        flexDirection: 'row'
    },
    col2: {
        flex: 0.5
    },
    col3: {
        flex: 0.333
    },
    col1: {
        flex: 1
    },




    // --------------------------- FORM 
    form: {
        backgroundColor: 'white',
        // shadowColor: 'rgba(190,190,190,0.6)',
        // shadowOffset: {
        //     height: 2,
        //     width: 3
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 1,
        // ...Platform.select({
        //     android: {
        //         borderBottomWidth: 1,
        //         borderBottomColor: 'rgba(190, 190, 190, 0.6)'
        //     }
        // })
    },



    // --------------------------- FROM GROUP 
    formGroup: {
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 5
    },
    formGrouplogin:{
        paddingLeft: 12.5,
    },  
    formGroupLessPadd: {
        paddingBottom: 0,
    },

    // --------------------------- INPUT 
    input: {
        flex: 1,
        height: 48,
        fontSize: 16,
        lineHeight: 24,
        color: Theme.primaryColor,
        paddingHorizontal: 0,
        letterSpacing: 1,
        fontFamily: Theme.regularFont,
    },
    textarea: {
        flex: 1,
        height: 100,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 1,
        color: Theme.primaryColor,
        paddingHorizontal: 0,
        fontFamily: Theme.regularFont,  
    },

    textareaBig: {
        height: 200,
        borderColor: '#E8E8E8',
        borderWidth: 0.75,
        padding: 20,
        marginBottom: 20
    },
    inputWithoutIcon: {
        // marginHorizontal: 5,
        paddingHorizontal: 0,
        paddingBottom: 8,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 0.75,
    },



    // --------------------------- INPUT ICON
    inputIcon: {
        width: 45 ,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
    },
    iconMail: {
        width: 12.8,
        height: 16
    },
    iconPassword: {
        width: 11,
        height: 16
    },




    // --------------------------- FORM GROUP SEPERATOR LINE 
    formGroupSpaceLine: {
        height: 2,
        borderBottomColor: '#c3c3c3',
        borderBottomWidth: 0.3,
        marginHorizontal: 20,
        marginVertical: 0,
        backgroundColor: '#FFF',
        marginLeft: 28
    },




    // --------------------------- PRIMARY BUTTON
    primaryButton: {
        backgroundColor: Theme.primaryColor,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderRadius: 4
    },
    primaryButtonText: {
        color: 'white',
        fontFamily: Theme.mediumFont,
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'center',
        fontWeight: '600'
    },


    // --------------------------- DEFAULT BUTTON
    defaultButton: {
        backgroundColor: Theme.white,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Theme.secondaryColor
    },
    defaultButtonText: {
        color: Theme.secondaryColor,
        fontFamily: Theme.mediumFont,
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '500',
        letterSpacing: 0.5,
        textAlign: 'center',
    },



    // --------------------------- BUTTON without background.
    button: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 50,
    },
    buttonText: {
        color: Theme.primaryColor,
        fontFamily: Theme.lightFont,
        fontSize: 15,
        letterSpacing: 0.5,
        textAlign: 'center',
        fontWeight: '300',
        textDecorationLine: 'underline'
    },




    // --------------------------- VIEW SEPERATOR 
    viewSeperator: {
        backgroundColor: '#F2F2F2',
        alignItems: 'center'
    },
    viewSeperatorSquare: {
        width: 10.5,
        height: 10.5,
        backgroundColor: '#efb961',
        position: 'absolute',
        top: -5,
        transform: [{ rotate: '45deg' }]
    },





    // --------------------------- SECONDARY BUTTON - Button For Second Action.
    secondaryButton: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    secondaryButtonText: {
        fontSize: 15,
        fontFamily: Theme.regularFont,
        color: Theme.secondaryColor,
        fontWeight: '400'
    },
    secondaryButtonPrimaryText: {
        color: Theme.primaryColor,
        fontFamily: Theme.regularFont,
        fontSize: 15,
        marginLeft: 5,
        fontWeight: '400'
    },




    // --------------------------- INLINE LABEL
    inlineLabel: {
        marginLeft: 20,
        marginTop: 20,
    },
    inlineLabelText: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: Theme.regularFont,
        color: Theme.greyColor,
        fontWeight: '400'
    },


    // --------------------------- RADIO BUTTONS 
    radioButtonWrapper: {
        marginTop: 5,
        flexDirection: 'row',
    },
    radioButtonLabel: { flex: 0.5 },
    radioButtons: { flex: 0.5, flexDirection: 'row' },
    radioButton: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    radioButtonSquareBorder: {
        height: 2,
        margin: 20,
        borderBottomColor: '#c3c3c3',
        borderBottomWidth: 0.3,
    },
    radioSquare: {
        width: 10.5,
        height: 10.5,
        backgroundColor: Theme.secondaryColor,
        position: 'absolute',
        top: -25,
        transform: [{ rotate: '45deg' }],
        zIndex: 999
    },
    radioButtonText: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: Theme.regularFont,
        color: Theme.secondaryColor,
        fontWeight: '400'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    spaceForBottom: {
        marginBottom: 10
    },

    switchWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 15
    },

    switch: {
        shadowColor: 'rgba(190,190,190,0.6)',
        shadowOffset: {
            height: 2,
            width: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        borderWidth: 0.5,
        borderColor: 'rgba(190, 190, 190, 0.4)',

    },


    pageDoneWithDiscard:{
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        marginBottom: 30
    },

    pageDiscardView: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    pageDiscardButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    pageDiscardButtonImage: {
        marginRight: 10,
        width: 8,
        height:12
    },
    pageDiscardButtonText: {

    },
    pageDoneView: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },  
 
    pageDoneButton: {
        backgroundColor: Theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 15,
        width: 150,
    },
    pageDoneButtonText: {
        color: Theme.white,
        fontFamily: Theme.mediumFont,
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        letterSpacing: 0.5,
        textAlign: 'center',
    },


    dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 0.75,
        flex: 1,
        height: 48,
        paddingRight: 5
    },
    dropdownButtonText: {
        fontSize: 16,
        lineHeight: 24,
        color: Theme.primaryColor,
        paddingHorizontal: 0,
        letterSpacing: 0,
        fontFamily: Theme.regularFont,
        paddingRight: 10
    },
    dropdownButtonImage:{

    },

    bottomButton: {
        marginBottom: isIphoneX() ? 30 : 20,
        marginHorizontal: 15
    },

    submitButton: {
        borderRadius: 4,
        backgroundColor: Theme.primaryColor,
        bottom: 0,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButtonText: {
        fontSize: 16,
        fontFamily: Theme.mediumFont,
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: 0.5,
        color: Theme.white
    },
})