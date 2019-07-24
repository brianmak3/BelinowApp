import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback, TouchableOpacity,Image} from 'react-native'
import Modal from 'react-native-modalbox';
import {colors, Styles, Icon1} from './common/Index';

import LinearGradient from 'react-native-linear-gradient';

export default class OrderModal extends React.Component{
    constructor(props){
        super(props)
    }
    showModal = ()=>{
        this.refs.modalRef.open();
    }
    returnItem(item){
        return(
            <View style={{width:'100%',marginTop:15,padding:5,paddingTop:0,flexDirection:'row'}}>
                <View style={{height:70,width:70}}>
                    <Image style={{height:null,width:null,flex:1,resizeMode:'contain'}} source={require('../images/dress1.jpeg')}/>
                </View>
                <View style={{width:'75%',marginLeft:5}}>
                    <Text styl={{fontSize:12}}>this dress is actually nice, a little larger than i expected but fits me well. </Text>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View >
                            <Text style={[styles.placed,{marginTop:5}]}>No Warranty</Text>
                            <Text style={{marginTop:5,fontSize:12}}>RM24.60</Text>
                            <View style={{flexDirection:'row'}}>
                                <Icon1 name={'close'} size={18} color={'#6A6969'} />
                                <Text style={{fontSize:12}}> 1</Text>
                            </View>
                        </View>  
                </View>
                </View>
            
            </View>
         )                
    }

    render(){
        const {orderSuccess}=this.props;
        return(
            <Modal ref={"modalRef"} style={Styles.main} backdrop={true} >
                 <View style={{height:35,justifyContent:'flex-start'}}>
                    <TouchableWithoutFeedback onPress={()=>this.refs.modalRef.close()}>
                        <View style={styles.headerBtn}>
                            <Icon1 name={'close'} size={25} color={'#000'} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            {orderSuccess == 'complete'?
             <View  style={styles.main}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F88824', '#FA973F', '#FBAA59']} style={styles.warning}>
                            <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',marginBottom:20}}>Payment Successs</Text>
                            <Text style={{color:'#fff',fontSize:13}}>Your order number is</Text>
                            <Text style={{color:'#fff',fontSize:13,fontWeight:'bold'}}>2167585678567</Text>
                    </LinearGradient>
                    <View style={styles.main1}>
                         <View style={{alignItems:'center'}}>

                            <View style={{marginTop:20}}>
                                    <Text style={{fontSize:13}}>You can track and manage your order at</Text>
                                    <Text style={{fontWeight:'bold',fontSize:13,marginTop:5}}>My Account > My Orders</Text>
                            </View>
                            <TouchableWithoutFeedback>
                                <View style={styles.trackBtn}>
                                    <Text style={{color:'#E95405',fontSize:13}}>TRACK ORDER</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.mailDiv}>
                                <Icon1 name={'mail'} size={50} color={'#C3C3C3'} />
                                <Text style={{marginLeft:10}}>We've sent a confirmation email to <Text style={{fontWeight:'bold'}}>shahfac@yahoo.com</Text> with the order deatils.</Text>
                            </View>
                            <View style={styles.trackDiv}>
                                <Image style={{height:40,width:40,resizeMode:'cover'}} source={require('../track.png')}/>
                                <Text style={{marginLeft:10}}>Your order will be delivere between <Text style={{fontWeight:'bold'}}>Tue 27 Nov - Fri 30 Nov</Text></Text>
                            </View>
                       </View>
                       <TouchableOpacity>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F88824', '#FA973F', '#FBAA59']} 
                            style={[Styles.btn,{width:250,marginTop:-70}]}>
                                <Text style={{color:'#fff'}}> Continue Shopping </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
            </View>:<View style={{flex:1}}>
                   
                       
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F30D02', '#EB3333', '#EA5757']} style={styles.warning}>
                            <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Payment Pending</Text>
                            <Text style={{color:'#fff',fontSize:13}}>Due by 2:30 ON 02 March 2019</Text>
                    </LinearGradient>
                    <View style={styles.main}>
                        <ScrollView>
                            <View style={{paddingBottom:10, backgroundColor:'#fff',marginBottom:2, padding:10}}>
                                <Text style={{color:'#6A6969'}}>Ship & bill to</Text>
                                <Text style={{marginTop:5}}>Brian Henry</Text>
                                <Text style={{marginTop:5}}>0245602546</Text>
                                <Text style={{color:'#6A6969',marginTop:5,fontSize:11}}>agdagad gad, adfgafdgadfg, gsdf, gsdfgsdfg, dfgsdfgsfd, sdfgsdf, sdfgsdf sdfgsdf sdfgsdf</Text>
                          </View>
                            <View style={{padding:10,backgroundColor:'#fff',marginTop:5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row'}}>
                                            <Icon1 name={'cube'} color={'#6A6969'} size={20}/>
                                            <Text style={{marginLeft:10, fontSize:14}}>Package 1</Text>
                                    </View>
                                    <Text style={{color:'#6A6969',fontStyle:'italic',fontSize:12 }}>Payment Pending</Text>
                                </View>
                                <View style={{marginLeft:30}}>
                                    <Text style={styles.placed}>Sold by James Gathanja</Text>
                                    <Text style={styles.placed}>Get by Tue 27 Nov - Fri 30 Nov, Standard</Text>
                                </View>
                                {this.returnItem()}
                            </View>
                            <View style={styles.order}>
                                <Text style={{fontWeight:'bold',color:colors.order}}>Order #325234523452345</Text>
                                <Text style={styles.placed}>Placed on 15 Aug 2018 20:02:38</Text>
                            </View>
                            <View style={styles.itemBottom}>
                                <Text style={styles.smLabel}>Subtotal</Text>
                                <Text style={styles.smValue}>RM5.90</Text>
                            </View>
                            <View style={styles.itemBottom}>
                                <Text style={styles.smLabel}>Shipping Fee</Text>
                                <Text style={styles.smValue}>RM2.40</Text>
                            </View>
                            <View style={styles.itemBottom0}>
                                <Text style={{fontSize:12}}>1 item, 1 Package</Text>
                                <Text style={{marginTop:8,fontSize:12}}>Total: <Text style={{color:colors.main,fontWeight:'bold',fontSize:14}}> RM8.30</Text></Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.bottomDiv}>
                        <TouchableWithoutFeedback>
                            <View style={[styles.btn,{borderColor:colors.bottomColor,borderWidth:0.5}]}>
                                <Text style={{fontSize:13}}>CANCEL</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F88824', '#FA973F', '#FBAA59']} style={styles.btn}>
                                <Text style={{color:'#fff', fontSize:13}}>PAY NOW</Text>
                         </LinearGradient>
                        </TouchableWithoutFeedback>
                    </View>
                </View>}
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    main1:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        flex:90
    },
   order:{
    padding:10,
    borderBottomWidth:5,
    borderBottomColor: '#E8E8E7',
    marginTop:7,
    marginBottom:2, 
    backgroundColor:'#fff'
},
mailDiv:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10
},
trackDiv:{
    marginTop:30,
    paddingRight:15,
    paddingLeft:38, 
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
},
trackBtn:{
    height:30,
    width:100,
    borderWidth:0.5,
    borderColor:'#E95405',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
},
smLabel:{
    color:'grey',
    fontSize:11
},
smValue:{
    fontSize:12
},
itemBottom:{
    flexDirection:'row',
    padding:10,
    backgroundColor:'#fff',
    justifyContent:'space-between'
},
itemBottom0:{
    padding:10,
    backgroundColor:'#fff',
    alignItems:'flex-end',
    marginTop:0.5
},
    headerBtn:{
        height:35,
        width:40,
        justifyContent:'center',
        alignItems:'center'
    },
    main:{
      flex:90
    },
    placed:{
        fontSize:11,
        marginTop:2,
        color:'#6A6969'
    },
    warning:{
        flex:10,
        padding:30
    },
    bottomDiv:{
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:5,
        height:35,
        paddingRight:20,
        marginBottom:5,
        backgroundColor:'#fff'
    },
    btn:{
        height:30,
        width:80,
        borderRadius:2,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
    }
})