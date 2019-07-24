import React, { Component } from "react";
import {
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native";

class EditCartOk extends Component {

    constructor(props) {
        super(props)
    }

    onPressEvent(){
        this.props.navigation.goBack()
    }
 
    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => { this.onPressEvent() }} >
                <Image style={styles.image} source={require('../assets/images/icon-check.png')} />
            </TouchableOpacity>
        );
    }
}

export default EditCartOk

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