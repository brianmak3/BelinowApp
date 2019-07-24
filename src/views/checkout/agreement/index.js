import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView
} from "react-native";

import Theme from '../../../theme/style'
import TitleLogo from '../../../theme/titleLogo'
import BackButton from '../../../theme/back' 
import Styles from './style'

export default class CheckoutAgreement extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={Styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <Text style={Styles.title}>Privacy</Text>
                    <Text style={Styles.text}>
                        Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
                        Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
                        Curabitur aliquet tellus ut libero posuere, ut maximus ipsum fermentum.
                        Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
                        Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
                    </Text>
                    <Text style={Styles.title}>Payments</Text>
                    <Text style={Styles.text}>
                        Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
                        Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
                        Curabitur aliquet tellus ut libero posuere, ut maximus ipsum fermentum.
                        Donec finibus molestie sapien sit amet tincidunt. Nunc ultrices nisl ante, ac ullamcorper dolor pulvinar sit amet. Sed quis tincidunt nunc. Pellentesque eget turpis quam. Vivamus faucibus quam enim. Vestibulum gravida mauris at sollicitudin blandit.
                        Donec urna nibh, vulputate commodo mauris et, porttitor porttitor mauris. Integer sit amet arcu sit amet massa efficitur vestibulum.
                    </Text>
                </ScrollView>
            </View>
        )
    }

}

CheckoutAgreement.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerTitle: 'TERMS AND CONDITIONS',
    headerTitleStyle: Theme.headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />,
})