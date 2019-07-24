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

class Orders extends Component {

    constructor(props) {
        super(props)
    } 

    componentWillMount(){
        const { OrderAction, currentCustomer } = this.props
        OrderAction.getOrders(currentCustomer.customer.id)
    }

    orderDetails (item){
        const { navigation } = this.props
        // navigation.navigate('OrderDetailScreen', {item})
    }

    renderOrders(data){
        return data.map((item, index) => {
            return <TouchableOpacity key={index} style={Styles.item} onPress={ () => { this.orderDetails(item) }}>
                <View style={Styles.left}> 
                    <Text style={Styles.order_no}>Order No SX{item.id}</Text>
                    <View style={Styles.dateItems}>
                        <Text style={Styles.date}>{item.date_created}</Text>
                        <View style={Styles.sep}></View>
                        <Text style={Styles.items}>{item.line_items.length} items</Text>
                    </View>
                </View>
                <View style={Styles.right}> 
                    <View style={[Styles.status, 
                            item.status == 'pending' ? Styles.pending : 
                                item.status == 'processing' ? Styles.processing : 
                                    item.status == 'on-hold' ? Styles.onhold : 
                                        item.status == 'completed' ? Styles.completed : 
                                            item.status == 'cancelled' ? Styles.cancelled : 
                            Styles.refunded
                        ]}>
                        <Text style={Styles.status_text}>{item.status}</Text> 
                    </View>
                </View>
            </TouchableOpacity>
        })
    }

    render() {
        const { orders } = this.props

        return (
            <View style={Styles.container}>
                {orders.loading ? <Loading /> : 
                    <View>
                        <View style={Styles.cartHeader}>
                            <View style={Styles.cartHeaderLeft}>
                                <View style={Styles.cartStatusBottom}>
                                    <Text style={Styles.cartStatusText2}>
                                        {orders && orders.data && `${orders.data.length} Orders`}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <View style={Styles.orders}>
                                {this.renderOrders(orders.data)}
                            </View>
                        </ScrollView>
                    </View>
                }
            </View>
        );
    }
}

Orders.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: 'MY ORDERS',
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

export default connect(mapStateToProps, mapDispatchToProps)(Orders);