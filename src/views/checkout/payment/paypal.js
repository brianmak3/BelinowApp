import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    WebView,
} from 'react-native';

import Theme from '../../../theme/style'
import BackButton from '../../../theme/back'
import Styles from '../style'
  
import config from '../../../config'

class PaypalPayment extends Component {

    constructor(props) {
        super(props)
    }

    paypalResponse(data) {
        const { navigation } = this.props;
        let order = navigation.getParam('order') 
        
        function gup(name, url) {
            if (!url) url = location.href;
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(url);
            return results == null ? null : results[1];
        }
        order.transactionid = gup('transactionid', data.url)

        if (data.title === "success") {
            navigation.navigate('CheckoutComplete', { order })
        } else if (data.title === "cancel") {
            navigation.goBack()
        } else {
            return;
        }
    }

    render() {
        const { navigation } = this.props;
        const order = navigation.getParam('order')

        let injectJavascriptString = ''
        injectJavascriptString += `<input type="hidden" name="currency" value="${order.currency}" />`
        injectJavascriptString += `<input type="hidden" name="total" value="${order.total}" />`
        injectJavascriptString += `<input type="hidden" name="subtotal" value="${order.subtotal}" />`
        injectJavascriptString += `<input type="hidden" name="shipping" value="${order.shipping}" />`
        injectJavascriptString += `<input type="hidden" name="customer_id" value="${order.customer_id}" />`
       
        order.cart.map((item, index) => {
            injectJavascriptString += `<input type="hidden" name="items[${index}][name]" value="${item.name + " (" + item.attributes.join(", ") + ")"}" />`
            injectJavascriptString += `<input type="hidden" name="items[${index}][sku]" value="${item.product.sku}" />`
            injectJavascriptString += `<input type="hidden" name="items[${index}][price]" value="${(parseFloat(item.product.sale_price)||parseFloat(item.product.price)).toFixed(2)}" />`
            injectJavascriptString += `<input type="hidden" name="items[${index}][currency]" value="${order.currency}" />`
            injectJavascriptString += `<input type="hidden" name="items[${index}][quantity]" value="${item.quantity}" />`
        })

        const injectJavascript = `var div=document.createElement('div');div.innerHTML = '${injectJavascriptString}';document.getElementById('form').appendChild(div);document.getElementById('form').submit();`
        return (
            <SafeAreaView style={Styles.container}>
                <WebView
                    source={{ uri: config.paypalServerURL }}
                    onNavigationStateChange={data => this.paypalResponse(data)}
                    injectedJavaScript={injectJavascript}
                    style={{ padding: 0 }}
                />
            </SafeAreaView>
        )
    }
}

PaypalPayment.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    title: '',
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: (<View />)
})

export default PaypalPayment