import React, { Component } from "react";
import Theme from '../../theme/style'
import { Connect, mapDispatchToProps,mapStateToProps } from '../../Redux';
import Login from './Login';
import UserInfo from './UserInfo';
import { Text } from 'react-native';
import { event } from '../../Events';
import { saveUser }from '../../Realm';

class Account extends Component {
    constructor(props) {
        super(props)
        this.listener =  event.addEventListener('account',(data)=>{
            data = JSON.parse(data);
                
            })
            this.saveUser  = this.saveUser.bind(this);
    }
    logout(){
        this.props.CurrentCustomer.logout()
    }
    saveUser(user){
        saveUser(user).then((user)=>{
           this.props.CurrentCustomer.setCurrentCustomer(user);
        }).catch((e)=>alert(e))
    }
    render() {
       const { currentCustomer, navigation } = this.props;
        if(currentCustomer.ID)
         return (<UserInfo navigation={navigation} />)
        else
        return (<Login saveUser={this.saveUser} />)
      
        
    }
}

Account.navigationOptions = () => ({
    headerStyle: Theme.headerStyle,
    title: 'My Account',
    headerTitleStyle: Theme.headerTitleStyle
})
export default Connect(mapStateToProps, mapDispatchToProps)(Account);
