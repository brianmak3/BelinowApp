import React, { Component } from 'react';
import {TouchableOpacity,TextInput, Stylesheet,ScrollView, Text, View, Alert} from 'react-native';
import {colors}  from '../../common/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { validatePassword, apiData } from '../../Functions';
import {Bars} from 'react-native-loader';
import { emitEvent } from '../../Events';
import Styles from './style';
import { GoogleSignin } from 'react-native-google-signin';
import FBSDK from 'react-native-fbsdk';
const {AccessToken, GraphRequest, GraphRequestManager, LoginManager } = FBSDK

const indexBtns = [ 'LOGIN', 'SIGN UP'];

const  inputs = [[
    { label: 'Phone Number or Email', value:'',error:'' },
    { label: 'Password', value:'',error:'' },
],
[
    { label: 'User name', value:'',error:'' },
    { label: 'Email', value:'',error:'' },
    { label: 'Password', value:'',error:'' },
] 
];
GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/profile.agerange.read','https://www.googleapis.com/auth/user.addresses.read','https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
       webClientId: '897503851113-07ejsqke669srp4ksqjhub9d3d4vohsf.apps.googleusercontent.com'
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeButton: 'LOGIN',
        inputs:inputs[0],
        currentIndex:0,
        loader:''
    };
  }
  componentWillMount(){
    var currentIndex = this.state.currentIndex;
    setTimeout(()=>this.setState({inputs:inputs[currentIndex]}),1);
    //AccessToken.getCurrentAccessToken().then().catch(e=>alert(e))
  }
  handleFacebookLogin(callback){
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
       (result) =>{
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
            AccessToken.getCurrentAccessToken()
            .then((data) => {
              callback(data.accessToken)
            })
            .catch(error => {
              console.log(error)
            })
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  async FBGraphRequest(fields, callback) {
    const accessData = await AccessToken.getCurrentAccessToken();
    // Create a graph request asking for user information
    const infoRequest = new GraphRequest('/me', {
      accessToken: accessData.accessToken,
      parameters: {
        fields: {
          string: fields
        }
      }
    }, callback.bind(this));
    // Execute the graph request created above
    new GraphRequestManager().addRequest(infoRequest).start();
  }
  async FBLoginCallback(error, result) {
    if (error) {
      this.setState({
        showLoadingModal: false,
        notificationMessage: I18n.t('welcome.FACEBOOK_GRAPH_REQUEST_ERROR')
      });
    } else {
      if(result.email)
      this.actionIndex('socialLogin',{
        type:'facebookLogin',
        email:result.email,
        photo:result.picture.data.url,
        name:result.first_name+' '+result.last_name
      });
      else{
        Alert.alert('Error logging in with facebook', 'We could not find a valid email address from this account.',[{text:'OK'}]);
        LoginManager.logOut();
      }
    }
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      var user = userInfo.user;
      this.actionIndex('socialLogin',{
        type:'googleLogin',
        email:user.email,
        photo:user.photo,
        name:'brian henry' //user.name
      });
  
     // call the storage fucnt
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
    updateInputWithError(index, error){
        var inputs = [...this.state.inputs ];
        inputs[index] = {...inputs[index],error:error};
        this.setState({inputs})
    }
    actionIndex(title, data){
        var inputs = this.state.inputs;
       if(title == 'SIGN UP' && !this.validateEmail(inputs[1].value))
         this.updateInputWithError(1, 'Please enter a valid email address')
        else if(title == 'SIGN UP' && !validatePassword(inputs[2].value))
         this.updateInputWithError(2, 'The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).')
        else if(!this.state.loader){ 
         apiData({
              action: title,
              inputs: !data?inputs.map(function(item) { 
                  delete item.error; 
                  return item; 
              }):'',
              data:data?data:''
          }).then((res)=>{
             this.setState({loader:''})
             if(res.error)
                this.updateInputWithError(res.inputIndex,res.error);
              else if(res.success){
                if(res.socialLogin)
                   res.userData.socialLogin = res.socialLogin;
                   this.props.saveUser(res.userData)
              }
          }).catch((e)=>{
                 this.setState({inputs, loader:''})
              }
          )
          this.setState({loader:true});
  
      }
   }
   validateEmail(text){
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        return reg.test(text)
   }
  render() {
    const socialBtns = [
        {text:'Continue with Facebook', icon:'facebook', color:'#3b5998',onPress:()=>this.handleFacebookLogin(() => this.FBGraphRequest('id, email,first_name,birthday, location, gender, last_name, picture.type(large)', this.FBLoginCallback))},
        {text:'Login with Google', icon:'google-plus', color:'#DB4437',onPress:()=>this.signIn()}
    ]
    getActive = (btn,button)=>{
        if(btn == this.state.activeButton)
         return colors.main;
         else
         return (button ? 'transparent':'#000');
      }
      activateActionBtn   = (title)=>{
        var inputs = this.state.inputs;
        if(inputs.length)
       return title == 'SIGN UP' && (!inputs[0].value  || inputs[0].value.trim() =='' 
             || !inputs[1].value  || inputs[1].value.trim() =='' || !inputs[2].value  || inputs[2].value.trim() =='') || 
             title == 'LOGIN' && (!inputs[0].value  || inputs[0].value.trim() =='' 
             || !inputs[1].value  || inputs[1].value.trim() =='') 
        }
        hr = () =>(<View style={{borderBottomColor: '#D0D0CF', borderBottomWidth: 1,  width:'47%'  }}/>)
    return (
      <View  style={Styles.main}>
         <View style={[Styles.authBtns,{borderBottomColor:'#EAE8E8',borderBottomWidth:1}]}>
            {indexBtns.map((a,index)=>{
                return(
                    <TouchableOpacity onPress={()=>{
                        this.setState({activeButton:a, inputs:inputs[index]})
                    }} key={index} 
                            style={[Styles.actionBtns,{borderBottomWidth:3,borderBottomColor:getActive(a,true)}]}>
                            <Text style={{color:getActive(a.title,null)}}>{a}</Text>
                    </TouchableOpacity>
                )
            })}
            </View>
            <ScrollView style = {{padding:10}}>
                <View style={Styles.inputs}>
                      {
                        this.state.inputs.map((input,index)=>(
                         <View key={index}>
                              <Text style={Styles.label}>{input.label} {input.error?<Text style={Styles.error}>*{input.error}</Text>:null}</Text>
                              <TextInput style={Styles.value} value={input.value} 
                                   secureTextEntry={input.label =='Password'} 
                                   onChangeText={(text)=>{
                                       
                                       var inputs = [...this.state.inputs ];
                                           inputs[index] = {...inputs[index],value:text};
                                          this.setState({inputs})
                                   }} 
                                   onKeyPress ={()=>{if(input.error){this.updateInputWithError(index,'')}}}
                               onFocus={()=>this.updateInputWithError(index,'')}/>
                         </View>   
                        ))
                    }
               
                </View>
                {this.state.activeButton == 'LOGIN'?
                <View style={{height:40,marginTop:20,justifyContent:'center',alignItems:'flex-end'}}>
                    <TouchableOpacity style={{widht:'50%',height:'100%'}}>
                       <Text style={{fontSize:16,color:'#098590'}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>:null}
               
                <View style={[Styles.authBtns,{borderBottomWidth:0,marginTop:10,}]}>
                       <TouchableOpacity onPress={()=>this.actionIndex(this.state.activeButton, null)} 
                                        style={[Styles.actionBtns,{backgroundColor:colors.main}]}
                                        disabled={activateActionBtn(this.state.activeButton)}
                                        >
                                 {this.state.loader?<Bars size={10} color={'#fff'} />:
                                <Text style={{color:'white',fontSize:18}}>{this.state.activeButton == 'SIGN UP' ? 'REGISTER': 'LOGIN'}</Text>}
                        </TouchableOpacity>
                </View>
                <View style={{marginTop:20,marginBottom:10, padding:10, flexDirection:'row'}}>
                       {hr()}
                         <Text style={{color:'#9E9E9E',fontSize:18}}>Or</Text>
                        {hr()}
                </View>
                <View style={{height:120,justifyContent:'space-between', alignItems:'center',marginBottom:20}}>
                    {/*this.makeLoginButton(() => this.FBGraphRequest('id, email,first_name,birthday, location, gender, last_name, picture.type(large)', this.FBLoginCallback))*/}
                   { socialBtns.map((btn, index)=>(<TouchableOpacity key={index}
                   style={[Styles.authBtns,{backgroundColor:btn.color,paddingLeft:7, alignItems:'center',justifyContent:'center'}]} onPress={()=>btn.onPress()} disabled={this.state.isSigninInProgress}>
                          <Icon name={btn.icon} size={20} color={'#fff'}/>
                          <Text style={{color:'#fff', marginLeft:30, fontSize:16}}>{btn.text}</Text> 
                    </TouchableOpacity>))
                   }
                </View>
              </ScrollView>
      </View>
    );
  }
}

export default Login;
