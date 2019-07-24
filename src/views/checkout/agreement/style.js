import { StyleSheet } from 'react-native'
import Theme from '../../../theme/style'

export default  StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: 'white', 
        paddingHorizontal: 15
    }, 
    title: {
        color: Theme.secondaryColor,
        fontSize: 14,
        lineHeight: 17,
        fontFamily: Theme.boldFont,
        marginTop: 15,
        marginBottom: 5
    },
    text: {
        color: '#999',
        fontSize: 13,
        lineHeight: 17,
        fontFamily: Theme.regularFont
    }

});