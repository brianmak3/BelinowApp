import React from "react";
import {
    View,
    Text,
} from "react-native";

import HeaderStyle from './header-style'

const headerData = [
    'Delivery', 'Payment', 'Confirm'
]

const CheckoutHeader = (props) => (
    <View style={{paddingTop: 10}}>
        <View style={HeaderStyle.seperatorSquareView}>
            {
                headerData.map((h, i) => (
                    <View key={i} style={HeaderStyle.seperatorSquareWrapper}>
                        <View style={[HeaderStyle.seperatorSquare, props.current == i ? HeaderStyle.seperatorSquareCurrent : {}, i == 0 ? { left: 0} : i == 2 ? {right: 0} : {} ]} />
                    </View>
                ))
            }
        </View>
        <View style={HeaderStyle.pageTitleWrapper}>
            {
                headerData.map((h, i) => (
                    <Text style={[HeaderStyle.pageTitle, props.current == i ? HeaderStyle.pageTitleCurrent : {}, i == 0 ? { left: -14 } : i == 2 ? { right: -18 } : {}]}
                    key={i}>{h}</Text>
                ))
            }
        </View>
    </View>
)

export default CheckoutHeader
