import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'
import iphone6 from '../../common/iphone6'
import ix from '../../common/iphonex'

export default  StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'

    },
    section: {
        marginTop: 8,
        marginBottom: 0
    },
    sectionHead:{
        flexDirection: 'row',
        marginBottom: 5
    },
    seeMoreButton: {
        flex:0.5,
        paddingRight: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    seeMoreButtonText:{
        textAlign: 'right',
        fontSize: 14,
        lineHeight: 16,
        fontFamily: Theme.regularFont, 
        letterSpacing: 0,
        color: '#9B9B9B',
        paddingRight: 2,
        top: 0,
        
    },
    seeMoreImage: {
        width: 16,
        height: 14,
        top: 1
    },

    sectionTitle: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: Theme.mediumFont,
        paddingLeft: 15,
        paddingBottom: 5,
        letterSpacing: 1,
        flex: 0.5,
        color: Theme.primaryColor
    },
    cartegoryBlocks: {
        flex: 1
    },

});