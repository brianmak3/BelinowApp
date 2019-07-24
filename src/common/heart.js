import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    Easing,
    Animated,
    Image
} from "react-native";

import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WhislistAction from '../redux/actions/whislist'
import fsManager from './fs-manager'

const empty = require('../assets/images/ic_heart.png')
const loved = require('../assets/images/ic_heart_red.png')

class Heart extends Component {

    constructor(props){
        super(props)
        this.state = {
            key: 1
        }
    }
    
    componentDidMount(){
        const { width } = this.props
        this.animatedValue = new Animated.Value(width)
        this.setState({key: 1})
    }

    checkIsInWhislist(product) {
        const { whislist } = this.props
        for (var i = 0; i < whislist.length; i++)
            if (whislist[i].id === product.id) {
                return true
            }
        return false
    }

    render() { 
        const { height, product, buttonStyles } = this.props
        const isLoved = this.checkIsInWhislist(product)
        const animatedStyle = { width: this.animatedValue }
        return (
            <TouchableOpacity key={this.state.key} activeOpacity={1} style={[styles.button, buttonStyles]} onPress={() => { this.toggle() }}>
                <Animated.View style={[animatedStyle, { height: height }]}>
                    <Image 
                        source={!isLoved ? empty : loved} 
                        resizeMode={'contain'}
                        style={[styles.image, { width: '100%', height: '100%', marginTop: 2 }]} />
                </Animated.View>
            </TouchableOpacity> 
        );
    }

    async toggle() {
        const { product, width } = this.props
        let data = await fsManager.getWhislist()
        data = data || '[]'
        let wl = JSON.parse(data);
        if (wl.length > 0) {
            let exists = false
            for (var i = 0; i < wl.length; i++) {
                if (wl[i].id == product.id) {
                    exists = true
                }
            }
            if (exists) {
                this.props.WhislistAction.remove(product)
                wl = wl.filter(i => i.id !== product.id)
                this.saveFile(wl)
            } else {
                wl.push(product)
                this.props.WhislistAction.add(product)
                this.saveFile(wl)
            }
        }
        else {
            wl.push(product)
            this.props.WhislistAction.add(product)
            this.saveFile(wl)
        }

        const isLoved = this.checkIsInWhislist(product)
        if (isLoved){
            Animated.sequence([
                Animated.spring(this.animatedValue, { toValue: width / 3, speed:500 }),
                Animated.spring(this.animatedValue, { toValue: width, speed: 100 }),
            ]).start();
        }
       

    //     Animated.timing(this.animatedValue, {
    //         toValue: width/3,
    //         duration: 500,
    //         easing: Easing.ease,
    //     }).start();
    //     Animated.timing(this.animatedValue, {
    //         toValue: width,
    //         duration: 500,
    //         easing: Easing.ease,
    //         delay: 1000
    //     }).start();
    }

    async saveFile(wl){
        await fsManager.saveWhislist(JSON.stringify(wl))
    }
}


function mapStateToProps(state) {
    return {
        whislist: state.whislist, 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        WhislistAction: bindActionCreators(WhislistAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heart)

const styles = StyleSheet.create({
    button: {

    },
    image: {

    }
});