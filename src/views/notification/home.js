import React, { Component } from "react";
import {
    View,
    ScrollView,
    Image,
    Text
} from "react-native";

import Theme from '../../theme/style'
import BackButton from '../../theme/back'
import styles from './style'

class Notification extends Component {

    constructor(props) {
        super(props)
        this.notifications = [
            {
                img: require('../../assets/images/ic_ship.png'),
                text: 'Your order #IB136928 has been shipped!',
                time: '20 mins ago'
            },
            {
                img: require('../../assets/images/ic_discount.png'),
                text: 'Happy Birth Day To You! Gift a 15% to you!',
                time: '20 mins ago'
            },
            {
                img: require('../../assets/images/ic_offer.png'),
                text: 'Special Offer 25% all product t-shirt to day.',
                time: '20 mins ago'
            },
            {
                img: require('../../assets/images/ic_ship.png'),
                text: 'Your order #IB136928 has been shipped!',
                time: '20 mins ago'
            },
            {
                img: require('../../assets/images/ic_discount.png'),
                text: 'Happy Birth Day To You! Gift a 15% to you!',
                time: '20 mins ago'
            },
            {
                img: require('../../assets/images/ic_offer.png'),
                text: 'Special Offer 25% all product t-shirt to day.',
                time: '20 mins ago'
            },
        ]
    }
   
    renderNotifications(notifications) {
        return notifications.map((item, index) => {
            return <View key={index} style={styles.item}>
                <View style={styles.left}>
                    <Image source={item.img} style={styles.img} />
                </View>
                <View style={styles.right}>
                    <Text style={styles.text}>{item.text}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {this.renderNotifications(this.notifications)}
                </ScrollView>
            </View>
        );
    }
}

Notification.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: 'NOTIFICATION',
    headerRight: (<View></View>)

})

export default Notification