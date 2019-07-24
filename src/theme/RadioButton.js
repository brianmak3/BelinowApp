import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Iconn } from '../common/Index';

export default class RadioButton extends React.Component{
    render(){
      const { deleteItem } = this.props;
      return(
        <View style={[styles.radioBtn,{backgroundColor: (deleteItem ? 'red':'#fff')}]}>
            <Iconn name={'checkmark'} size={20} color={'#fff'} />
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
      radioBtn:{
        height:20,
        width:20,
        borderRadius:10,
        borderWidth:0.3,
        borderColor:'#000',
        alignItems:'center',
        justifyContent:'center'
      }
    })