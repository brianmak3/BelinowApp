import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Iconn, icons} from '../../common/Index';
import { Connect, mapDispatchToProps,mapStateToProps } from '../../Redux';


class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            text:''
        }
    }
    
    render(){
             const {currentCustomer, navigation} = this.props;
             const { text }= this.state;
         const items = [
             {title: 'My Orders',icon: 'cube',page:'MyOrders'},
            {title: 'My Returns',icon: 'return-left', page:'MyReturns'},
            {title: 'My Cancellation',icon: 'close-circle-outline', page:'MyCancellations'},
            {title: 'My Reviews',icon: 'star-outline',page:'MyReviews'},
            {title: 'My Wishlist',icon: 'heart-empty',page:'WishList'},
            {title: 'Address Book',icon: 'pin',page:'Address'},
            {title: 'Settings',icon: 'cog',page:'Settings'},
            {title: 'Policies',icon: 'document',page:'Policies'},
            {title: 'Help',icon: 'help-circle-outline',page:'Help'}
        ]
        return(
            <View style={styles.main}>
                 <View style={{height:40,borderBottomColor:'#E8E8E7',justifyContent:'center',paddingBottom:5,borderBottomWidth:6}}>
                     <Text style={{fontWeight:'bold', fontSize:14,marginLeft:10}}>Hello, {currentCustomer.username}</Text>
                 </View>
                 <ScrollView style={{flex:1,padding:5}}>
                     {
                         items.map((a, index)=>{
                             return (
                                 <TouchableOpacity onPress={()=> navigation.navigate(a.page)} 
                                 key={index} style={{height:40,justifyContent:'center',marginTop:10,borderBottomWidth:1,borderBottomColor:'#E7E6E5'}}>
                                     <View style={{paddingLeft:20,flexDirection:'row',marginRight:10, justifyContent:'space-between'}}>
                                         <View style={{flexDirection:'row'}}>
                                            <Iconn name={a.icon} size={20} color={'#9E9E9E'}/>
                                            <Text style={{marginLeft:10}}>{a.title}</Text>
                                         </View>
                                         <Iconn name={icons.forwardDrop} size={20} color={'grey'}/>
                                     </View>
                                 </TouchableOpacity>
                             )
                         })
                     }
                 </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'#fff',
    }
})
export default Connect(mapStateToProps, mapDispatchToProps)(UserInfo);
