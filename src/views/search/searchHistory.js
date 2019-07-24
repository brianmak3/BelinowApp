import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Iconn } from '../../common/Index';
import styles from './style'

export default class SearchHistory extends Component {
  render() {
    const items = [
        {
            title:'Search History',
            icon:{
                name:'trash',
                color: '#000'
            },
            buttons:['Shoes','Shows','winter jacket women']
        },
        {
          title:'Search Discovery',
          icon:{
              name:'eye',
              color: 'grey'
          },
          buttons:['Vans','Shoes for women','Shoes for men','kids dress','christmas dress', 'winter jacket women', 'winter jacket women']
      }
    ];
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {
            items.map((a,index)=>{
                return(
                    <View style={styles.div} key={index}>
                        <View style={styles.title}>
                            <Text style={styles.title}>{a.title}</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Iconn name={a.icon.name} size={25} color={a.icon.color} />
                                </TouchableOpacity>
                        </View>
                            <View style={styles.buttons}>
                              {
                                a.buttons.map((b,indc)=>{
                                    return(
                                        <TouchableOpacity key={indc} style={styles.button}>  
                                            <Text style={styles.buttonText}> {b} </Text>
                                        </TouchableOpacity>
                                    )
                            
                                })}
                            </View>
                    </View>
                )
            })
        }
        </ScrollView>
    );
  }
}
