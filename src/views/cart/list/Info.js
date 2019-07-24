import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import Styles from './style';
export default class Info extends React.Component{
    render(){
         const {product, addRemoveButtons} = this.props;
        return(
       <View style={[Styles.infoBtn,{ width:(addRemoveButtons?'75%':'100%')}]}>
                <Text style={Styles.description}>{product.name}</Text>
                <View style={Styles.infoView}>
                    <View>
                         {addRemoveButtons?<Text style={Styles.detailedDes}>OEM... </Text>:null}
                         <Text style={Styles.newPrice}>RM{product.price} </Text>
                         <Text style={Styles.oldPrice}><Text style={Styles.crossedText}>RM{product.regular_price} </Text> -50% </Text>
                    </View>
                    {
                      addRemoveButtons?
                      <View style={Styles.addRmDiv}>
                        <TouchableWithoutFeedback>
                          <View style={Styles.addRmBtn}>
                              <Text style={Styles.addRemBtn}> - </Text>
                          </View>
                         </TouchableWithoutFeedback>
                           <Text style={[Styles.addRmBtn,Styles.addRemBtn]}> 1 </Text>
                         <TouchableWithoutFeedback>
                          <View style={Styles.addRmBtn}>
                              <Text style={Styles.addRemBtn}> + </Text>
                          </View>
                        </TouchableWithoutFeedback>
                      </View>:null
                    }
                </View>
            </View>
        )
    }
  }