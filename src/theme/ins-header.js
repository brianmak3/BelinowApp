import React, { Component } from "react";
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
    Text,
} from "react-native"

import isIphoneX from '../common/iphonex'
import InsText from './instext'
import BackButton from './back'
import Theme from '../theme/style'

class InsHeader extends Component {

    constructor(props) {
        super(props)
    }

    backButton = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.leftButton}>
                    {this.props.back && <BackButton navigation={this.props.navigation} />}
                </View>
                <View style={styles.title}>
                    {this.props.headerTitle ? <Text style={styles.headerTitle}>{this.props.headerTitle}</Text> :
                     <InsText width={this.props.width}
                        leftText={this.props.leftText} rightText={this.props.rightText} />}
                </View>
                <View style={styles.rightButton}>
                    {
                        this.props.close &&
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image style={{ width: 25, height: 25 }} resizeMode={'contain'} source={require('../assets/images/icon-close.png')} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
}

export default InsHeader;

const styles = StyleSheet.create({
    header: {
        height: isIphoneX() ? 80 : 60,
        width: '100%',
        paddingTop: isIphoneX() ? 50 : 30,
        flexDirection: 'row',
        paddingHorizontal: 0
    },
    leftButton: {
        flex: 0.33,
        alignItems: 'flex-start',
        paddingLeft: 5
    },
    title: {
        flex: 0.33,
        alignItems: 'center',
        marginTop: 4,
        paddingLeft: 20
    },
    rightButton: {
        flex: 0.33,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    headerTitle:{
        fontSize: 18,
        color: Theme.secondaryColor,
        fontFamily: Theme.anticFont,
        marginTop: -4
    }
});

