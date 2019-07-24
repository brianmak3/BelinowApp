import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text
} from "react-native";

import Theme from '../../theme/style'
import BackButton from '../../theme/back'
import Styles from './style'
import Loading from '../../common/loading'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OrderAction from '../../redux/actions/orders'
import { TouchableOpacity } from "react-native-gesture-handler";

class OrderDetails extends Component {

    constructor(props) {
        super(props)
    } 

    componentWillMount(){
        const { OrderAction, currentCustomer } = this.props
        OrderAction.getOrders(currentCustomer.customer.id)
    }
 
    render() {
        const { navigation } = this.props
        const order = navigation.getParam('item')
        return (
            <View style={Styles.container}>
                 
            </View>
        );
    }
}

OrderDetails.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: 'Order Details',
    headerRight: (<View></View>)
})

function mapStateToProps(state) {
    return {
        orders: state.orders,
        currentCustomer: state.currentCustomer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        OrderAction: bindActionCreators(OrderAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);