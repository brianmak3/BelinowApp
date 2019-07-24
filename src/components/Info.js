import React, { Component } from "react";
import { Text,  View} from "react-native"
import Styles from './style'
import StarRating from '../components/StarRating' 

import { discounted } from '../../src/Functions'
export default class Info extends React.Component{
    render(){
         const {item, showList} = this.props;
        return(
            <View style={{padding:5,width:(showList?'70%':'100%')}}>
                <Text style={Styles.name} numberOfLines={2}>{item.name}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                         <Text style={Styles.newPrice}>RM{parseFloat(item.price).toFixed(2)} </Text>
                         {discounted(item.regular_price,item.price)?<Text style={Styles.oldPrice}><Text style={{textDecorationLine:'line-through'}}>RM{item.regular_price}</Text>  {discounted(item.regular_price,item.price)}% </Text>:null}
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:15}}>
                        {parseInt(item.average_rating)?<StarRating ratingObj={{
                                                ratings: parseInt(item.average_rating || 0),
                                                views: item.rating_count
                                            }}/>:
                        <Text style={{color:'grey', fontSize:11}}>No Ratings</Text>}
                </View>
                {/*<Text>{item.shipping_required.toString()}</Text>
                <Text>{item.shipping_taxable.toString()}</Text>}
                {
                    Object.keys(item).map((key)=>(
                        <Text>{key}</Text>
                    ))
                    */}
                   
            </View>
        )
    }
  }