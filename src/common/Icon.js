import React from 'react';
import {View,Text} from 'react-native';
import {platform} from './Platform';
import Icon from 'react-native-vector-icons/Ionicons';
class Iconn extends React.Component {
  render() {
      const {name} =this.props;
      const {color} =this.props;
      const {size} =this.props;
    return (
        <View>
                <Text><Icon name={platform+'-'+name} size={size} color={color} /> </Text>
        </View>
    )
  }
}

export default Iconn;