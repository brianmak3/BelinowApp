import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {colors, Iconn} from '../../common/Index';
import Theme from '../../theme/style'
import BackButton from '../../theme/back'

class NoOrders extends React.Component{
   render(){
       return (
           <View style={styles.noOrders}>
               <Text  style={{fontWeight:'bold',fontSize:15}}>There are no orders placed yet </Text>
               <TouchableOpacity  style={styles.noOrdersBtn}>
                    <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Continue Shopping </Text>
               </TouchableOpacity>
           </View>
       )
   }
}
class Item extends React.Component{
    componentDidMount(){
      
    }
    render(){
        const { itemData }= this.props;
       
        return(
            <View style={{width:'100%',marginTop:15,padding:5,paddingTop:0,flexDirection:'row'}}>
                  <View style={{height:70,width:70}}>
                      {/*<Image style={{height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../images/dress1.jpeg')}/>*/}
                  </View>
                  <View style={{width:'75%',marginLeft:5}}>
                      <Text> {itemData.name}  </Text>
                      <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                          <View style={{marginTop:10}}>
                              <Text>RM{itemData.subtotal}</Text>
                              <View style={{flexDirection:'row'}}>
                                    <Iconn name={'close'} size={18} color={'#6A6969'} />
                                    <Text> {itemData.quantity} </Text>
                              </View>
                          </View>
                          <Text style={{color:colors.main,fontStyle:'italic'}}> Delivered </Text>
                      </View>
                  </View>
            </View>
        )
    }
}
class Order extends React.Component{
    render(){
        const { item }= this.props;

        return(
            <View style={{padding:5,paddinTop:10, borderBottomWidth:7,borderBottomColor: '#E8E8E7'}}>
                 <View style={{flexDirection:'row',padding:5,justifyContent:'space-between',alignItems:'center'}}>
                     <View >
                       <Text style={{fontWeight:'bold'}}>Order {item.number} </Text>
                       <Text style={styles.placed}>Placed on 15 Aug 2018 20:02:38 </Text>
                       <Text style={styles.placed}>Paid on 15 Aug 2018 20:04:05 </Text>
                     </View>
                     <Text style={{color:'#6A6969',fontStyle:'italic' }}> {item.status} </Text>
                 </View>
                 { 
                     item.line_items.map((a,index)=>{
                         return(  <Item key={index} itemData={a}></Item>)
                     })
                 }
               
                 <View style={{flexDirection:'row',justifyContent:'flex-end',height:40,alignItems:'center'}}>
                     <Text style={{color:'#6A6969',marginRight:10}}>{item.line_items.length} item{(item.line_items.length > 1?'s':'')}, Total:  </Text>
                     <Text style={{color:colors.main, fontWeight:'bold',fontSize:16}}>RM24.60 </Text>
                 </View>
            </View>
        )
    }
}
class Orders extends React.Component{
   
    render(){
         const { props, item }= this.props;
         const {navigate } = props.navigation;
        return (
            <TouchableOpacity onPress={()=>navigate('OrderDetails')} style={{flex:1}}>
                 <Order item={item} />
            </TouchableOpacity>
        )
    }
 }

class MyOrders extends React.Component {
    constructor(props){
        super(props)
         this.state = {
             activeTab:'ALL',
              orders: []
         }
    }
    componentDidMount(){
       
     }
  render() {
    const { goBack } = this.props.navigation;

    getActive = (btn,button)=>{
        if(btn == this.state.activeTab)
         return colors.main;
         else
         return (button ? 'transparent':'#000');
      }
      changeRender = (page)=>{
         this.setState({activeTab:page});
      }
    var buttons = ['ALL', 'To Pay'];
    return (
    <View style={styles.main}>
        {/* <Header title={'My Orders'} props={this.props}/>*/}
         <View style={styles.actionBtns}>
           {
               buttons.map((a, index)=>{
                   return(
                       <TouchableOpacity onPress={()=>changeRender(a)} key={index} style={[styles.selectBtn,{borderBottomWidth:3,borderBottomColor:getActive(a,true)}]}>
                           <Text style={{letterSpacing:2,color: getActive(a)}}>{a} </Text>
                       </TouchableOpacity>
                   )
               })
           }
         </View>
        {/*--------- if no orders----------- <NoOrders/>*/}
         {/* use a flatlist here*/}
         <FlatList data={this.state.orders} style={{flex:1}} ref={"chatsConatiner"}renderItem={
            ({item, index})=>{
                return(
                    <Orders props={this.props} item={item} />
                )
            }}
            keyExtractor={(item, index) => index.toString()} />
    </View>)
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
    actionBtns:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:50,
        borderBottomWidth:5,
        borderBottomColor: '#E8E8E7',
    },
    selectBtn:{
        width:'30%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    noOrders:{
       flex:1,
       alignItems:'center',
       justifyContent:'center'
    },
    noOrdersBtn:{
      backgroundColor:colors.main,
      height:50,
      width:250,
      marginTop:50,
      borderRadius:2,
      alignItems:'center',
      justifyContent:'center'
    }
})
MyOrders.navigationOptions = ({ navigation }) => ({
    title: 'My Orders',
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} backTo={'Profile'}/>
}) 

export default MyOrders;