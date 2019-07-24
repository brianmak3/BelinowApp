import React, { Component } from "react";
import { 
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native";
import {Iconn} from '../common/Index';

class BackButton extends Component {

    constructor(props){
        super(props)
    }

    backButton = () => {
        const {backTo, page, embedded, changePage} = this.props;
        if(page && page !== embedded)
            changePage(page)
        else if (!backTo)
            this.props.navigation.goBack()
        else 
            this.props.navigation.navigate(backTo)

    }

    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => { this.backButton() }} >
              <Iconn name={'arrow-back'} size={20} color={'#fff'} />
            </TouchableOpacity>
        );
    }
}
export default BackButton;

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 15
    },
    image: {
        width: 20,
        height: 16
    }
});