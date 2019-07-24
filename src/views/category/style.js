import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'
const tabContentText = {
    color: '#FFFFFF',
    fontSize: 19,
    fontFamily: Theme.regularFont,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 1,
};
const tabContentTextCount = {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: Theme.regularFont,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 2.5
};
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },

    tabContent: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 15
    },

    tabContentButton: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 20,
        borderRadius: 4
    },

    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    tabContentText: {
        ...tabContentText
    },
    tabContentTextCount: {
        ...tabContentTextCount
    },
    tabContentText2: {
        ...tabContentText,
        color: Theme.primaryColor
    },
    tabContentTextCount2: {
        ...tabContentTextCount,
        color: Theme.primaryColor
    },
    tabHeader: {
        flexDirection: 'row',
        paddingTop: 10,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },

    tabHeaderButton: {
        paddingBottom: 15,
        marginHorizontal: 15,
        bottom: -1,
    },

    tabHeaderButtonText: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: Theme.mediumFont,
        fontWeight: '500',
        letterSpacing: 1,
        textAlign: 'center',
    },

    tabHeaderButtonTextActive: {
        color: Theme.primaryColor,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: Theme.mediumFont,
        fontWeight: '500',
        letterSpacing: 1,
        textAlign: 'center',
    },

    tabHeaderButtonActive: {
        borderBottomColor: Theme.primaryColor,
        borderBottomWidth: 2,
        paddingBottom: 15,
        marginHorizontal: 15,
        bottom: -1,
    },

    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },


});