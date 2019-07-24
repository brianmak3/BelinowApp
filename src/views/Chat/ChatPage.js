import React  from 'react';
import {TouchableWithoutFeedback, Image,SafeAreaView, Text, View} from 'react-native';
import {colors, Iconn} from '../../common/Index';
import { AutoGrowTextInput } from 'react-native-auto-grow-textinput';
//import { sendData } from  '../Socket';
import { fetchChats, deleteMessage } from '../../Realm';
//import { Events } from '../Events';
import { returnDate } from '../../Functions';
import Styles from './styles';
import {mapStateToProps,mapDispatchToProps, Connect} from '../../Redux';
import ReversedFlatList from 'react-native-reversed-flat-list';

export class Item extends React.Component{
    render(){
         return(
            <View style={Styles.item}>
                    <View style={{height:50,width:50}}>
                        <Image style={Styles.img} source={require('../../assets/images/home.png')}/>
                    </View>
                    <View style={{width:'75%',marginLeft:5}}>
                        <Text style={{fontSize:11}}>this dress is actually nice, a little larger than i expected but fits me well.  </Text>
                        <Text style={Styles.price}>RM24.60 </Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <View style={Styles.actionBtn}>
                                <Text style={{fontSize:12,color:'#fff'}}>SEND</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={[Styles.actionBtn,{backgroundColor:'#EEEDED'}]}>
                                <Text style={{fontSize:12}}>CANCEL</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
         )
    }
}
export class Pic extends React.Component{
   render(){
        return( 
                <Image style={{height:14,width:14,margin:5, borderRadius:7}} source={require('../../assets/images/home.png')}/>
        )
   }
}
export class Message extends React.Component{
    render(){
          const { message, userId, currentIndex, indexPlus } = this.props;
           const from = JSON.parse(message.from);
           const to = JSON.parse(message.to);
          
         return(
             <TouchableWithoutFeedback onLongPress={()=>deleteMessage(message).then(()=>alert('deleted')).catch(e=>alert(e))}>
                        <View style={{marginTop:(indexPlus && JSON.parse(indexPlus.from).id == JSON.parse(currentIndex.from).id?0:10)}}>
                        {!indexPlus || returnDate(currentIndex.time)[0] !== returnDate(indexPlus.time)[0]?<Text style={Styles.date}>{returnDate(message.time)[0]}</Text>:null}
                        {/*<View style={{paddingTop:5,flexDirection:'row'}}>
                            {from.id == userId?<View style={{flex:10}}></View>:null}
                            {from.id !== userId?<Pic />:null}
                                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                    {/*<View style={{justifyContent:'flex-end',margin:5}}>
                                        <Text style={{fontSize:11,color:'grey'}}>Read</Text>
                                    </View>*/}
                                    {/*<View style={Styles.template}>
                                        <View style={{height:50,width:50}}>
                                            <Image style={Styles.img} source={require('../images/dress2.jpeg')}/>
                                        </View>
                                        <View style={{width:'75%',marginLeft:5}}>
                                            <Text style={{fontSize:11}}>this dress is actually nice, a little larger than i expected but fits me well.  </Text>
                                            <Text style={Styles.price}>RM24.60 </Text>
                                            <Text style={{marginTop:10,color:'grey'}}> <Text style={{textDecorationLine:'line-through'}}>RM24</Text> -50%</Text>
                                        </View>
                                    </View>}
                                    <View style={[Styles.messageDiv,{backgroundColor:(from.id == userId?colors.fromChat:colors.toChat)}]}>
                                        <Text>{message.text+' '} </Text>
                                    </View>
                                {from.id == userId?<Pic />:null}
                                {to.id == userId?<View style={{flex:10}}></View>:null}
                                </View>
                        </View>*/}
                        <View style={{paddingTop:1,flexDirection:'row'}}>
                                {from.id == userId?<View style={{flex:10}}></View>:null}
                                {from.id !== userId?<Pic />:null}
                                <View style={[Styles.messageDiv,{backgroundColor:(from.id == userId?colors.fromChat:colors.toChat)}]}>
                                    <Text>{message.text+' '} </Text>
                                    <Text style={Styles.time}>{returnDate(message.time)[1]}</Text>
                                </View>
                                {from.id == userId?<Pic />:null}
                        </View>
                    </View>
           </TouchableWithoutFeedback>
         )
    }
}
class ChatScreen extends React.Component{
    constructor(props){
         super(props)
          this.state = {
               text:'',
               item:false,
               media:'',
               messages:[]
          }
    }
    componentDidMount(){
       /* this.fetchChats();
        Events.addEventListener('socketPage', (data)=>{
            this.fetchChats();
        })*/
    }
    fetchChats(){
        fetchChats({friendId: 58}).then((messages)=>{
           this.setState({messages:messages})
        }).catch(e=>alert(e));
    }
    render(){
        const {user , navigation } = this.props;
         const { goBack } = navigation;
         const { text, media,messages } = this.state;
         sendMesage = ()=>{
            sendData({
                action:'newMessage',
                text:text,
                from:JSON.stringify({
                    name:user.username,
                    id:user.ID,
                    pic:''
                }),
                to:JSON.stringify({
                    name:'MOMO HOUSE',
                    id:58,
                    pic:''
                }),
                media:JSON.stringify(media),
                sentStatus:'unsent',
                time:Date.now(),
                friend:58
            });
            this.setState({text:''})
         }
        return(
            <View style={{flex:1, backgroundColor:colors.main}}>
                <SafeAreaView/>
                <View style={Styles.header0}>
                     <TouchableWithoutFeedback onPress={()=>{goBack()}}>
                         <View style={{padding:10}}>
                            <Iconn name={'arrow-back'} size={ 20 } color={ 'grey' } />
                         </View>
                     </TouchableWithoutFeedback>
                     <View>
                         <Text style={{fontSize:14,textAlign:'center'}}>MOMO HOUSE</Text>
                         <Text style={{color:'#676867',fontSize:12,textAlign:'center'}}>Very Responsive</Text>
                     </View>
                     <TouchableWithoutFeedback>
                         <View>
                             <Image source={require('../../assets/images/home.png')} style={{height:40,width:40,resizeMode:'contain'}} />
                         </View>
                     </TouchableWithoutFeedback>
                </View>
                  {this.state.item ? <Item/>:null}
                  <View style={{flex:85, backgroundColor:colors.background}}>
                        <ReversedFlatList style={{flexGrow:0}} 
                            data={messages} renderItem={({item, index})=>{
                                let curIndex = messages.length - index-1
                                let indexPlus = messages[curIndex-1];
                                let currentIndex = messages[curIndex];
                               // let sameChat = indexPlus&& indexPlus.from == currentIndex.from;
                                    return (<Message userId={user.ID} indexPlus={indexPlus} currentIndex={currentIndex}  index={index} message={item} key={index}/>)
                                }} 
                        />
                  </View>
                    <View style={Styles.footer}>
                        <TouchableWithoutFeedback>
                            <View style={Styles.attachBtn}>
                                <Iconn name={'add'} size={25} color={'#fff'} />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={Styles.textDiv}>
                        <AutoGrowTextInput style={Styles.texteArea}  
                           //   onBlur={()=>sendOnlineStatus('Online')}
                          //    onFocus={()=>{this.getUserChats();sendOnlineStatus('typing...')}}
                                onChangeText={(text) => this.setState({text})} value={text}
                                ref={"textInputRef"} 
                                maxHeight={ 80 }
                                minHeight={35}
                                placeholder="Type your message..."
                                placeholderTextColor={'grey'}
                             />
                            <TouchableWithoutFeedback>
                                <View style={[Styles.attachBtn,{backgroundColor:'transparent'}]}>
                                   <Image source={require('../../assets/images/smile.jpg')} style={Styles.btnImg} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableWithoutFeedback disabled={!text || text.trim()==''} onPress={()=>{/*sendMesage()*/}}>
                            <View style={[Styles.attachBtn,{backgroundColor:'transparent'}]}>
                                <Iconn name={'send'} size={25} color={'grey'} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
            </View>
        )
    }

}

export default  Connect(mapStateToProps,mapDispatchToProps)(ChatScreen);