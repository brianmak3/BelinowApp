import React, { Component } from "react";
import {
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native";

class FunnelButton extends Component {

    constructor(props) {
        super(props)
    }

    onPressEvent(){
        this.props.navigation.navigate('FunnelScreen')
    }
 
    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => { this.onPressEvent() }} >
                <Image style={styles.image} source={require('../assets/images/icon-funnel.png')} />
            </TouchableOpacity>
        );
    }
}
export default FunnelButton;

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 15
    },
    image: {
        width: 34/2,
        height: 35/2
    }
});