import React from 'react';
import {View, Text, StatusBar, SafeAreaView, TouchableWithoutFeedback,TextInput, Image } from 'react-native';
import { colors, Styles, Iconn } from '../../common/Index';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles';
class Radio extends React.Component{
    render(){
        const { selected } = this.props;
        return(
            <View style={{borderWidth:1,borderColor:(selected?colors.main:'grey'),height:12,width:12,borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                <View style={{backgroundColor:(selected?colors.main:'#fff'),height:8,width:8,borderRadius:4}}></View>
            </View>
        )
    }
}
class ReportScreen extends React.Component{
    componentDidMount(){
        StatusBar.setBackgroundColor('#fff')
    }
    componentWillUnmount(){
        StatusBar.setBackgroundColor(colors.main)
    }
    render(){
         const { goBack } = this.props.navigation;
        return(
            <View style={styles.body}>
                <SafeAreaView />
                <View style={styles.main}>
               <View style={styles.Header}>
                    <TouchableWithoutFeedback onPress={()=>goBack()}>
                        <View style={[Styles.headerBtn,{flex:0,width:50}]}>
                            <Iconn name={'arrow-back'} size={20} color={'grey'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.headerTitle}>
                        <Text >Report this Product</Text>
                    </View>
               </View>
               <Text style={{margin:15,marginBottom:5}}>I want to...</Text>
               <View style={styles.container}>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Radio selected={true} />
                            <Text style={{marginLeft:5}}>Report this Product</Text>
                   </View>
                   <Text style={[styles.typeText,{marginTop:0}]}>The minimum character is 10. We encourage you to attach photos for clearer explanation</Text>
                   <TextInput placeholder={'Type your message here...'} placeholderTextColor={'grey'} multiline={true} numberOfLines={20} style={styles.input} />
                   <Text style={{marginTop:15,textAlign:'right',marginBottom:20}}><Text style={{color:'red'}}>0</Text>/1000</Text>
                   <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        <View style={styles.imageDiv}>
                            <View style={styles.close}><View style={styles.icon}><Iconn name={'close'}  size={18} color={'#000'} /></View></View>
                            <Image style={styles.img} source={require('../../assets/images/home.png')} />
                        </View>
                        <View style={styles.cameraDiv}>
                                <Iconn name={'camera'} size={25} color={'grey'} />
                                <Text style={{textAlign:'center', fontSize:11}}>Upload photo</Text>
                        </View>
                   </View>
                  
               </View>
               <TouchableWithoutFeedback>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F88824', '#FA973F', '#FBAA59']} style={Styles.btn}>
                    <Text style={{color:'#fff',fontWeight:'bold'}}> REPORT </Text>
                 </LinearGradient>
               </TouchableWithoutFeedback>
               </View>
            </View>
        )
    }
}

export default ReportScreen;