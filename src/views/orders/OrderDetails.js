import React from 'react';
import { StyleSheet,ScrollView, Text, View,Image, TouchableOpacity} from 'react-native';
import {colors, Header, Icon1} from './common/Index';

export class Item extends React.Component{
    render(){
         return(
            <View style={{width:'100%',marginTop:15,padding:5,paddingTop:0,flexDirection:'row'}}>
                <View style={{height:70,width:70}}>
                    <Image style={{height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../images/dress1.jpeg')}/>
                </View>
                <View style={{width:'75%',marginLeft:5}}>
                    <Text>this dress is actually nice, a little larger than i expected but fits me well. </Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View >
                            <Text style={[styles.placed,{marginTop:5}]}>No Warranty</Text>
                            <Text style={{marginTop:5}}>RM24.60</Text>
                            <View style={{flexDirection:'row'}}>
                                <Icon1 name={'close'} size={18} color={'#6A6969'} />
                                <Text> 1</Text>
                            </View>
                        </View>  
                </View>
                </View>
            
            </View>
         )
    }
}
class OrderDetails extends React.Component {
  render() {

     const {navigate} = this.props.navigation;
    return (
          <View style={styles.main}>
                <Header props={this.props} title={'Order Details'}/>
                <ScrollView >
                    <View style={{paddingBottom:10, borderBottomWidth:5,borderBottomColor: '#E8E8E7',padding:10}}>
                        <Text style={{color:'#6A6969'}}>Ship & bill to</Text>
                        <Text style={{marginTop:5}}>Brian Henry</Text>
                        <Text style={{marginTop:5}}>0245602546</Text>
                        <Text style={{color:'#6A6969',marginTop:5,fontSize:11}}>agdagad gad, adfgafdgadfg, gsdf, gsdfgsdfg, dfgsdfgsfd, sdfgsdf, sdfgsdf sdfgsdf sdfgsdf</Text>
                    </View>
                   <View style={{padding:10}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{flexDirection:'row'}}>
                                <Icon1 name={'cube'} color={'#6A6969'} size={20}/>
                                <Text style={{marginLeft:10, fontSize:14}}>Package 1</Text>
                          </View>
                          <Text style={{color:'#6A6969',fontStyle:'italic' }}>Processing</Text>
                       </View>
                       <View style={{marginLeft:30}}>
                        <Text style={styles.placed}>Sold by James Gathanja</Text>
                        <Text style={styles.placed}>Get by Tue 27 Nov - Fri 30 Nov, Standard</Text>
                       </View>
                   </View>
                   <TouchableOpacity onPress={()=>navigate('DeliveryDetails')}> 
                        <Item/>
                   </TouchableOpacity>
                    <View style={{alignItems:'flex-end',paddingRight:20,paddingBottom:20, borderBottomWidth:7,borderBottomColor: '#E8E8E7'}}>
                        <TouchableOpacity >
                            <View style={styles.package}>
                                <Text style={{color:'#6A6969'}}>WRITE A REVIEW</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}}>
                            <View style={styles.package}>
                                <Text style={{color:'#6A6969'}}>Track Package</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding:10,borderBottomWidth:5,borderBottomColor: '#E8E8E7'}}>
                       <Text style={{fontWeight:'bold',color:colors.order}}>Order #325234523452345</Text>
                       <Text style={styles.placed}>Placed on 15 Aug 2018 20:02:38</Text>
                       <Text style={styles.placed}>Paid on 15 Aug 2018 20:04:05</Text>
                     </View>
                     <View style={{margin:10,paddingBottom:10,borderBottomWidth:1,borderBottomColor: '#E8E8E7'}}>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={[styles.placed, {fontSize:12}]}>Subtotal</Text>
                            <Text>RM11.00</Text>
                         </View>
                         <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={[styles.placed, {fontSize:12}]}>Shipping fee</Text>
                            <Text>RM2.55</Text>
                         </View>
                     </View>
                     <View style={{padding:10, alignItems:'flex-end'}}>
                         <Text style={[styles.placed, {fontSize:12,color:'#000'}]}>1 item, 1 package </Text>
                         <Text style={[styles.placed, {fontSize:12,color:'#000',marginTop:10}]}>Total(0% GST):<Text style={{color:colors.main,fontWeight:'bold'}}>RM3.55</Text></Text>
                         <Text style={[styles.placed, {fontSize:10,marginTop:10}]}>Paid by <Text style={{color:'#000'}}>Credit/Debit Card</Text></Text>
                     </View>
                </ScrollView>
          </View>
          
          )
  }
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#fff',
        flex:1
    },
    placed:{
        fontSize:11,
        marginTop:2,
        color:'#6A6969'
    },
    package:{borderWidth:1,
        borderColor:'#6A6969',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10
    }
})
export default OrderDetails;