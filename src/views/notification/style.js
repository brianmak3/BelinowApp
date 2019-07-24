import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.backgroundColor,
        paddingTop: 20
    },
    item: {
        paddingBottom: 30,
        marginBottom: 20,
        borderBottomColor: '#E8e8e8',
        borderBottomWidth: 1,
        marginLeft: 20,
        paddingLeft: 0,
        flexDirection: 'row'
    },
    left: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    right: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5
    },
    img: {
        width: 40,
        height: 40
    },
    text: {
        fontFamily: Theme.regularFont,
        fontWeight: '400',
        color: Theme.primaryColor,
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0.5,

    },
    time: {
        fontFamily: Theme.regularFont,
        fontWeight: '400',
        color: '#6E6E6E',
        fontSize: 13,
        lineHeight: 19,
        letterSpacing: 0.5,
        marginTop: 3
    },
});