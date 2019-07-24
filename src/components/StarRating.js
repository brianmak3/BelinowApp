// @flow
import React  from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Iconn } from '../common/Index'
export default class StarRating extends React.Component {
    render() {
        // Recieve the ratings object from the props
         const { ratingObj } = this.props;

        // This array will contain our star tags. We will include this
        // array between the view tag.
        let stars = [];
        // Loop 5 times
        for (var i = 1; i <= 5; i++) {
            // set the path to filled stars
            let icon = 'star'
            // If ratings is lower, set the path to unfilled stars
            if (i > ratingObj.ratings) {
                icon = 'star-outline';
            }

            stars.push((<Iconn  name={icon} color={'#F3C006'} size={20}/>));
        }

        return (
            <View style={styles.container}>
                {stars}
                {ratingObj.views ? <Text style={styles.text}>({ratingObj.views})</Text> : null}
			</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    text: {
        color:'grey', 
        fontSize:12,
         marginTop:3
    }
});