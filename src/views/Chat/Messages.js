import React from 'react';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, FlatList, Text, Image,View} from 'react-native';
import {colors} from '../../common/colors';
import Iconn from '../../common/Icon'
import { Connect,mapStateToProps } from '../../Redux';
import Styles from './styles';
import Headroom from 'react-native-headroom';
import styles from './styles';

//import { emitEvent } from './Events'

class MessagesScreen extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       messages:[
         {
           name: 'hapyang',
           img:require('../../assets/images/avatar.jpg'),
           time:'12:30'
         },
         {
          name: 'MOMO House',
          img:require('../../assets/images/avatar.jpg'),
          time:'Yesterday'
         }
       ]
     }
   }
  render() {
       const {currentCustomer, navigation} = this.props;
       const header = (
        <View style={Styles.header}>
            <Text style={Styles.headerText}>Messages</Text>
        </View>
    )
    return (
        <View style={Styles.main}>
           <SafeAreaView/>
           <Headroom
                    style={Styles.container}
                    headerComponent={ header }
                    ScrollableComponent={ScrollView}
                    headerHeight={ 40 }
                    scrollEventThrottle={ 40 }
                    >
                 <View>
                    {!currentCustomer.ID?
                    <View style={Styles.container}>
                        <View style={Styles.subDiv}>
                            <Text style={Styles.loginOffers}>Login for more offers</Text>
                            <Text style={Styles.orderUpdates}>Login to receive order updates and chat with our sellers!</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                          <Image source={require('../../assets/images/superSale/9.png')} style={Styles.imgLog} />
                          <View style={Styles.loginBtn}>
                              <TouchableWithoutFeedback onPress={()=>navigation.navigate('Profile')}>
                                  <View style={Styles.btn}>
                                    <Text style={Styles.loginText}>Login</Text>
                                    <Iconn name={'arrow-dropright'} size={15} color={'#CF8A04'} />
                                  </View>
                              </TouchableWithoutFeedback>
                          </View>
                        </View>
                    </View>: this.state.messages.length == 0 ? 
                    <View style={Styles.noMessages}>
                            <Text style={{textAlign: 'center'}}>Once you start a new conversation with a seller about a product, you'll see it listed here.</Text>
                            <TouchableWithoutFeedback>
                                <Text style={Styles.shoppingText}>START SHOPPING</Text>
                            </TouchableWithoutFeedback>
                    </View>:
                    <View style={Styles.container0}>
                        <FlatList data={this.state.messages} renderItem = {({item, index})=>{
                          return(
                                <TouchableOpacity onPress={()=> navigation.navigate('ChatScreen')} style={Styles.Chat}>
                                  <View style={Styles.chatDiv}>
                                        <Image style={Styles.Imig} source={item.img}/>
                                        <View style={Styles.chatTextDiv}>
                                            <Text style={{marginLeft:15, color:'#000'}}>{item.name} </Text>
                                           <Text numberOfLines={1} style={Styles.lastMessage}>{'This is the last message we  is the last message we received.'} </Text>
                                        </View>
                                       
                                  </View>
                                  <View style={{flex:20}}>
                                    <Text style={Styles.chatTime}>{item.time}</Text>
                                    <View style={Styles.unreadChatDiv}>
                                      <Text style={Styles.unreadChatText}>10</Text>
                                    </View>
                                  </View>
                              </TouchableOpacity>
                          )
                        }}  keyExtractor={(item, index) => index.toString()}  />
                    </View>
                    }
                 </View>
             </Headroom>
        </View>
       )
  }
}

MessagesScreen.navigationOptions = () => ({
  headerMode:'none',
  header:null
})

export default  Connect(mapStateToProps)(MessagesScreen);