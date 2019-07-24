import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'

export default StyleSheet.create({
  
    pageTitleWrapper: { 
        marginTop:10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 40,
    },
    pageTitle: {
        fontFamily: Theme.regularFont,
        color: Theme.secondaryColor,
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0,
        fontWeight: '400',
        position: 'absolute',
        top: 0,
    },
    pageTitleCurrent: {
        color: Theme.primaryColor,
    },
    
    seperatorSquareView: { 
        height: 0.5, 
        backgroundColor: '#D8D8D8',
        flexDirection: 'row', 
        alignItems: 'center',
        marginHorizontal: 40
    },
    seperatorSquareWrapper: {
        flex: 0.3333,
        height: 4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    seperatorSquare: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: Theme.backgroundColor,
        borderWidth: 1,
        borderColor:'#D8D8D8',
        top: -6,
        position: 'absolute'
    },
    seperatorSquareCurrent: {
        borderColor: Theme.primaryColor,
        backgroundColor: Theme.primaryColor
    }

});