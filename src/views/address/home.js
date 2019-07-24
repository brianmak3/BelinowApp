import React from 'react';
import { TouchableWithoutFeedback, TextInput, TouchableOpacity, Text, View} from 'react-native';
import {colors, Iconn} from '../../common/Index';
import AddModal from './AddModal';
import {mapStateToProps,mapDispatchToProps, Connect} from '../../Redux';
import Theme from '../../theme/style';
import BackButton from '../../theme/back';
import Styles from './style';
class Address extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:'Address Book',
            activeTab:'Shipping Address',
            inputs:[
                {dropdown:false,name: 'Full name',value:''},
                {dropdown:false,name: 'Address',value:''},
                {dropdown:true,name: 'State',value:'Johor'},
                {dropdown:true,name: 'City',value:'Bandar Maharani'},
                {dropdown:true,name: 'Postcode',value:''},
                {dropdown:false,name: 'Phone number',value:''},
            ],
            selected:''
        }
        this._onPressedShow = this._onPressedShow.bind(this);

    }
    _onPressedShow (){
        this.refs.addModal.showModal();
       }
    componentWillMount(){
        this.setTitle('Address Book');
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
      const { activeTab, title, inputs } = this.state;
      const { navigation, currentCustomer } = this.props;
      var { metaData } = currentCustomer;
      metaData = JSON.parse(metaData);
     handleResponse = (data)=>{
         var newVals = data.newVals;
         var arrayInputs = [...inputs];
         arrayInputs[data.input] = {...arrayInputs[data.input], value:data.value};
         if(newVals){
             if(newVals.length ==1)
               arrayInputs[4] = {...arrayInputs[4], value:newVals[0]};
             else{
               arrayInputs[3] = {...arrayInputs[3], value:newVals[0]};
               arrayInputs[4] = {...arrayInputs[4], value:newVals[1]};
             }

         }
       return  this.setState({inputs:arrayInputs})
     }
      getActive = (btn,button)=>{
        if(btn == activeTab)
         return colors.main;
         else
         return (button ? 'transparent':'#000');
      }
      changeRender = (page)=>{
         this.setState({activeTab:page});
      }
      goBackStep = () =>{
        if(title == 'Address Book')
        {
            const {goBack} = navigation;
              goBack();
        }
         else
         this.setState({ title:'Address Book'});

      }
    var buttons = ['Shipping Address', 'Billing Address'];
    var addressDetails = (activeTab == buttons[0]?{
          address: metaData.shipping_address_1,
          state:metaData.shipping_state,
          city:metaData.shipping_city,
          postcode:metaData.shipping_postcode,
          phone:metaData.shipping_phone
       }:{
           address: metaData.billing_address_1,
           state:metaData.billing_state,
           city:metaData.billing_city,
           postcode:metaData.billing_postcode,
           phone:metaData.billing_phone
       })
    return (
        <View style={Styles.main}>
            {/*<Header title={this.state.title} props={this.props} goBackStep={ goBackStep } />*/}
           {this.state.title == 'Address Book'? <View style={{flex:1}}>
                <View style={Styles.actionBtns}>
                {
                    buttons.map((a, index)=>{
                        return(
                            <TouchableOpacity onPress={()=>changeRender(a)} key={index} style={[Styles.selectBtn,{borderBottomWidth:3,borderBottomColor:getActive(a,true)}]}>
                                <Text style={{fontSize:14,color: getActive(a)}}>{a} </Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
                <View style={{flex:1,backgroundColor:colors.background}}> 
                    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',backgroundColor:'#fff',marginTop:5}}>
                        <View>
                            <Text style={{fontWeight:'bold'}}>{metaData.billing_first_name}</Text>
                            <Text style={Styles.more}>no. {addressDetails.address}</Text>
                            <Text style={Styles.more}>{addressDetails.state+' - ' +addressDetails.city+ ' - '+addressDetails.postcode}</Text>
                            <Text style={Styles.more}>{addressDetails.phone}</Text>
                            <TouchableWithoutFeedback>
                                <View style={{padding:5,paddingLeft:0}}>
                                    <Text style={{color:colors.main,fontSize:12}}>DEFAULT SHIPPING ADDRESS</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableWithoutFeedback  onPress={()=>this.changePage('Edit My Address')}>
                            <View style={{height:70,width:30,justifyContent:'center',alignItems:'center',marginRight:20}}>
                                <Iconn color={'#949493'} name={'create'} size={25} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>:
            <View style={{flex:1,backgroundColor:colors.background}}>
                <View style={{backgroundColor:'#fff',marginTop:10,padding:10}}>
                {
                     this.state.inputs.map((a,index)=>{
                   if(!a.dropdown)
                    return(
                    <View key={index} style={{marginBottom:5,marginTop:5}}>
                          <Text style={{color:'grey',fontSize:12}}>{a.name}</Text>
                          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                              <TextInput style={Styles.textInput} />
                              <View style={{borderBottomColor:'#DFDEDE', borderBottomWidth:1,marginRight:20,paddingBottom:10,marginTop:-10}}>
                                    <TouchableWithoutFeedback>
                                        <View style={{height:18, width:18,borderRadius:9,alignItems:'center',paddingLeft:4,paddingBottom:3,backgroundColor:'#DFDEDE'}}>
                                            <Iconn name={'close'} size={18} color={'#fff'} /> 
                                        </View>
                                    </TouchableWithoutFeedback>
                              </View>
                          </View>
                    </View>)
                    else return(
                    <TouchableWithoutFeedback  onPress={()=>{
                           this.setState({selected:a.name})
                           this._onPressedShow()}
                        } key={index}>
                        <View style={{marginBottom:5}}>
                            <Text style={{color:'grey',fontSize:12}}>{a.name}</Text>
                            <View style={Styles.dropdown}>
                                <Text>  {this.state.inputs[index].value} </Text>
                                <Iconn name={'arrow-dropdown'} size={18} color={'grey'} /> 
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    )
                   }) }
                </View>
            </View>}
            <TouchableOpacity onPress={()=>{
                     if(this.state.title == 'Add New Address')
                       alert('saved')
                     else 
                       this.changePage('Add New Address')
                }}>
                <View style={Styles.submitBtn}>
                    <Text style={{color:'#fff',fontSize:18}}>{this.state.title == 'Add New Address' || this.state.title == 'Edit My Address' ?'Save':'Add New Address'}</Text>
                </View>
            </TouchableOpacity>
            <AddModal ref={'addModal'} title ={ this.state.selected } inputs={this.state.inputs} from="chat" handleResponse={ handleResponse } />
        </View>
       )
  }
}

Address.navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state;
    return({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} page='Address Book' changePage={params.changePage} embedded = {params.title} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: params.title
  })
}

export default  Connect(mapStateToProps,mapDispatchToProps)(Address);

