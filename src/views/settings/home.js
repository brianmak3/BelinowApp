import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Alert, TextInput,Switch, TouchableOpacity, Text, Image,View} from 'react-native';
import {colors, Iconn, Styles, icons} from '../../common/Index';
import { deleteUsers, updateUser }from '../../Realm';
import { validatePassword,apiData } from '../../Functions';
import { Bubbles } from 'react-native-loader';
import Toast from 'react-native-root-toast';
import Theme from '../../theme/style';
import BackButton from '../../theme/back';

import FBSDK from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
const {  LoginManager } = FBSDK;
import {mapStateToProps,mapDispatchToProps, Connect} from '../../Redux';
const trackColor = {true:colors.bottomColor ,false:'#DBDADA'};
export class Item extends React.Component{
    signOut = async () => {
        try {
          await GoogleSignin.signOut();
          this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };
    isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
     if(isSignedIn)
       this.signOut()
    };
    render(){
          const { item, handleTitle, CurrentCustomer, goBack } = this.props;
        return(
            <View style={styles.item}>
                <TouchableWithoutFeedback onPress={()=>{
                     if(item.title !== 'Logout')
                         handleTitle({title: item.title})
                      else
                            {
                            Alert.alert(
                                'Log out',
                                'Are you sure you want to log out?',
                                [
                                    {text:'No'},
                                    {text:'Yes', onPress:()=>{
                                        CurrentCustomer.logout();
                                        goBack();
                                        deleteUsers();
                                         LoginManager.logOut();
                                         this.isSignedIn();
                                    }}
                                ]
                            )
                            }
                        }
                     }>
                    <View style={styles.sub}>
                        <View style={{flexDirection:'row'}}>
                            {item.img?
                                <Image source={item.img} style={styles.img} />
                                :item.title == 'Logout'?<Iconn name={'log-out'} size={30} color={'grey'} /> :null}
                            <View style={{marginLeft:5}}>
                            <Text style={styles.optionText}> {item.title} </Text>
                            <Text style={styles.message}>{item.message}</Text>
                            </View>
                        </View>
                        <Iconn size={15} color={'grey'} name={icons.forwardDrop} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export class Password extends React.Component{
    constructor(props){
         super(props)
         this.state = {
            passwordErrr:'',
            passMAtch:'',
            oldPass:'',
            newPass:'',
            confPass:'',
            errorColor:'',
            toastMessage:'',
            toastVisible:''
         }
    }
    render(){
        const { customer, changePage,setCurrentCustomer}= this.props;
         var  state = this.state,
         oldPasswordErrr = state.passwordErrr,
          errorColor = state.errorColor,
          passMAtch = state.passMAtch;
          allFeilds = ()=>{
              return (state.oldPass.trim() =='' && !customer.socialLogin || state.newPass.trim() =='' || state.confPass.trim() =='');
          }
        return(
            <View style={styles.Password}>
                <View style={{padding:15}}>
                    {!customer.socialLogin?
                    <View>
                        <Text style={styles.label}>Enter old password  {oldPasswordErrr?<Text style={Styles.error}>*{oldPasswordErrr}</Text>:null}</Text>
                       <TextInput value={state.oldPass} onChangeText={pass=>this.setState({oldPass:pass})} onKeyPress={()=>this.setState({passwordErrr:''})} style={styles.input} secureTextEntry={true} />
                    </View>:null}
                    <View>
                        <Text style={{fontSize:14}}>{customer.socialLogin?'Create a password for local log in':'Please enter your new password below'}</Text>
                        <Text style={[styles.warning, {color:errorColor}]}>{errorColor?<Text>*</Text>:null}The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).</Text>
                    </View>
                    <Text style={styles.label}>{customer.socialLogin?'Enter':'New'} password</Text>
                    <TextInput value={state.newPass} onChangeText={pass=>this.setState({newPass:pass})} onKeyPress={()=>this.setState({passMAtch:'',errorColor:'#000'})}  style={styles.input} secureTextEntry={true} />
                    <Text style={styles.label}>Retype password {passMAtch?<Text style={Styles.error}>*{passMAtch}</Text>:null}</Text>
                    <TextInput value={state.confPass} onChangeText={pass=>this.setState({confPass:pass})} onKeyPress={()=>this.setState({passMAtch:''})} style={styles.input} secureTextEntry={true} />
                </View>
                <TouchableOpacity onPress={()=>{
                     if(!validatePassword(state.newPass))
                        this.setState({errorColor:'red'})
                    else if(state.newPass !== state.confPass)
                    this.setState({passMAtch:'Password does not match new password'});
                    else if(!state.loader){
                    apiData({
                        action: 'changePassword',
                        newPass: state.newPass,
                        oldPass:(customer.socialLogin?customer.socialLogin:state.oldPass) ,
                        userEmail: customer.email
                    }).then((res)=>{
                        this.setState({loader:''});
                        if(res.error)
                          this.setState({passwordErrr: res.error});
                        else if(res.success){
                           this.setState({toastVisible:true, toastMessage:res.success});
                           if(customer.socialLogin)
                                { 
                                    var userx = {...customer};
                                    userx = {...userx,socialLogin:true};
                                    updateUser(userx).then((user)=>{
                                        setCurrentCustomer(user)
                                    }).catch(e=>alert(e));
                                }
                           setTimeout(()=>{
                            this.setState({toastVisible:false, toastMessage:''});
                            changePage('Settings');
                           },2000)
                        }
                    }).catch((e)=>{
                           this.setState({loader:''});
                        }
                    )
                    this.setState({loader:true})
                    } 
                }} disabled={allFeilds()}>
                    <View style={styles.changePassBtn}>
                    {state.loader?<Bubbles size={10} color={'#fff'} />:<Text style={{color:'#fff'}}>CHANGE PASSWORD</Text>}
                    </View>
                </TouchableOpacity>
            {state.toastMessage?<Toast visible={this.state.toastVisible} position={Toast.positions.CENTER} shadow={false} opacity={0.7}  animation={false} hideOnPress={true}>{state.toastMessage}</Toast>:null}
            </View>
        )
    }
}
export class Notifications extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options : [
                {
                    title:'Messages',
                    Message:'Receive exclusive offers and personalized update',
                    active: false
                },
                {
                    title:'Order and Logistics',
                    Message:'Receive timely updates on your orders',
                    active: false
                },
                {
                    title:'System notifications',
                    Message:'Receive wishlist and shopping cart updates',
                    active: true
                }
            ]
        }
    }
    render(){
        changeValue = (index,value)=>{
            var options = [...this.state.options ];
            options[index] = {...options[index], active:value};
            this.setState({options:options})
        }
         return(
             <View style={styles.main}>
                 {
                     this.state.options.map((a,index)=>{
                         return (
                             <View key={index} style={styles.option}>
                                <View style={{width:'90%'}}>
                                    <Text> {a.title} </Text>
                                    <Text style={{fontSize:12,color:'grey'}}> {a.Message} </Text>
                                </View>
                               <Switch value={a.active} onValueChange ={(value)=>changeValue(index,value)} trackColor={trackColor} ios_backgroundColor={'transparent'} thumbColor={(a.active?colors.main:'#494848')}/>
                            </View>
                         )
                     })
                 }
             </View>
         )
    }
}
export class Country extends React.Component{
    render(){
           const countries = [
               {name: 'Malaysia',flag: require('../../assets/images/Malaysia.png'),select:true},
               {name: 'Singapore',flag: require('../../assets/images/Singapore.png'),select:false},
               {name: 'Indonesia',flag: require('../../assets/images/Indonesia.jpeg'),select:false},
               {name: 'Philipines',flag: require('../../assets/images/Philipines.jpg'),select:false},
               {name: 'Thailand',flag: require('../../assets/images/Thailand.png'),select:false},
               {name: 'Vietnam',flag: require('../../assets/images/Vietnam.jpg'),select:false}
           ]
         return(
             <View style={styles.countries}>
                {
                    countries.map((a,index)=>{
                        return(
                            <TouchableOpacity>
                            <View style={[styles.sub,{borderBottomColor:(index != countries.length-1 ? colors.bottomColor :'#fff'),borderBottomWidth:1}]} key={index}>
                               <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={a.flag} style={styles.img} />
                                    <Text style={[styles.optionText,{marginLeft:10,fontSize:12}]}> {a.name} </Text>
                                </View>
                                <Iconn size={15} color={a.select?colors.main:'grey'} name={a.select?'radio-button-on':'radio-button-off'} />
                            </View>
                            </TouchableOpacity>
                        )
                    })
                }
             </View>
         )
    }
}


class Settings extends React.Component {
    constructor(props){
        super(props);
         this.state ={
              title: 'Settings',
              country: 'Malaysia',
              options: [
                  {
                      title:'Change Password'
                  },
                  {
                    title:'Notifications'
                  },
                  {
                      title: 'Country',
                      message:'Malaysia is your country',
                      img: require('../../assets/images/Malaysia.png')
                  },
                  {
                      title:'Logout',
                      message:this.props.currentCustomer.email
                  }
              ]
         }
        
    }
  componentWillMount(){
      this.setTitle('Settings');
      this.props.navigation.setParams({
          changePage:this.changePage.bind(this)
      })
  }
  changePage(page){
    this.setState({title:page});
    this.setTitle(page);
  }
  setTitle(title){
    this.props.navigation.setParams({
        title:title
    })
  }
  render() {
    const { goBack } = this.props.navigation;
    const { title,options } = this.state;
    const { CurrentCustomer,currentCustomer } = this.props;
      handleTitle = (data)=>{
          var ItemTitle = data.title;
          ItemTitle = ItemTitle == 'Country'?'Change Country':ItemTitle;
          this.setState({title:ItemTitle});
          this.setTitle(ItemTitle);
      }
     
      setTitle = (title)=>{
          this.setState({title:title});
      }
      changeValue =(index, val)=>{
          var userUpdate = {...user};
             if(index == 'welcomeChatText')
               userUpdate = {...userUpdate, welcomeChatText:val}
             else if(index == 'showMessageShortcuts')
               userUpdate = {...userUpdate, showMessageShortcuts:val}
             else if(index == 'acceptChatFromProfile'){
               userUpdate = {...userUpdate, acceptChatFromProfile:val}
             }
             else if(index == 'sendAutoReply')
                userUpdate = {...userUpdate, sendAutoReply:val}
              this.props.CurrentCustomer.setCurrentCustomer(userUpdate);
      }
    return (
        <View style={styles.main}>
            { title == 'Settings'?
               options.map((a,index)=>{
                return(
                <Item goBack={goBack} CurrentCustomer={CurrentCustomer} key={index} item={a} handleTitle = {handleTitle} />
                )
                }):
                title == 'Change Country'?
                <Country />:
                title == 'Change Password'?
                <Password  customer={currentCustomer} changePage={this.changePage.bind(this)} setCurrentCustomer={CurrentCustomer.setCurrentCustomer}/>:
                <Notifications/>}
        </View>
       )
  }
}
Settings.navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state;
    return({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} page='Settings' changePage={params.changePage} embedded = {params.title} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: params.title
    })
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#fff',
        flex:1
    },
    Password:{
      flex:1,
      justifyContent:'space-between'
    },
    img:{
       height:30,
       width:30,
       borderRadius:15,
       borderColor:'grey',
       borderWidth:1
    },
    countries:{
        borderTopColor:colors.background,
        borderTopWidth:10
    },
    item:{
      borderBottomColor:colors.bottomColor,
      borderBottomWidth:1,
      marginTop:5
    },
    optionText:{
        fontSize:14,
    },
    message:{
        color:'grey',
         fontSize:11,
         marginLeft:5
    },
    sub:{
         alignItems:'center',
         justifyContent:'space-between',
         flexDirection:'row',
         padding:15
    },
    option:{
        padding:15,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:colors.bottomColor,
        borderBottomWidth:1,
        minHeight:70
    },
    changePassBtn:{
        height:40,
        backgroundColor:colors.main,
        justifyContent:'center',
        alignItems:'center'
    },
     label:{
         color: 'grey',
         fontSize:14,
         marginTop:10
     },
     input:{
         borderBottomColor:colors.bottomColor,
         borderBottomWidth:1,
          height:35,
          marginBottom:20
     },
      warning:{
          fontSize:12,
          color: 'grey',
          marginTop:10,
          marginBottom:15
      }
})
export default  Connect(mapStateToProps,mapDispatchToProps)(Settings);