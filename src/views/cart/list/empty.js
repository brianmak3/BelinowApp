import React from "react";
import Styles from './style' 

import {
    View,
    Text,
    TouchableWithoutFeedback,
} from "react-native";

const EmptyCardHolder = (props) => {
 const { navigation } = props;
  return(
    <View style={Styles.container}>
              <View  style={Styles.main}>
                <View style={{ alignItems:'center',paddingTop:15}}> 
                    <Text style={Styles.subtitle}>There are no items in this cart</Text>
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Profile')}>
                        <View style={Styles.btn}>
                          <Text>CONTINUE SHOPPING</Text>
                        </View>
                    </TouchableWithoutFeedback>
                  </View>
              </View>
    </View>
)}
export default EmptyCardHolder

