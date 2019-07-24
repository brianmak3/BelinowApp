import React from 'react';
import { Text,View, StyleSheet, TouchableWithoutFeedback, FlatList, Dimensions} from 'react-native'
import Modal from 'react-native-modalbox';
import  CSC from 'country-state-city';
import { Icon1, getIndex } from '../../common/Index';
export default class AddModal extends React.Component{
    constructor(props){
        super(props)
    }
    showModal = ()=>{
        this.refs.modalRef.open();
    }

    render(){
        const States = CSC.getStatesOfCountry(132);
        const {handlePhoneChange} = this.props;
        const { options } = this.props;
        const { inputs } = this.props;
        const { title } = this.props;
        getData = (title) =>{
            switch(title){
                case 'State':
                return States
                case 'City':
                return CSC.getCitiesOfState(States[getIndex(inputs[2].value,States,'name')].id);
            }
        }
        
        findIndex = (title, value)=>{
             switch(title){
                 case 'State':
                 return value == inputs[2].value;
                 case 'City':
                 return value == inputs[3].value;
             }
        }
        return(
            <Modal ref={"modalRef"} style={[styles.modal,{maxHeight:'95%'}]} position="center" backdrop={true} >
            <View style={{justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:18,marginLeft:10, marginTop:5, fontWeight:'bold'}}>{title}</Text>
            </View>
                <FlatList data={getData(title)} style={{margingTop:5,padding:10}} keyExtractor={(item, index) => index.toString()} renderItem={
                ({item, index})=>{
                    return(
                        <TouchableWithoutFeedback onPress={()=>{
                            this.refs.modalRef.close();
                            handleResponse({
                                input:(title =='State'?2:title=='City'?3:4),
                                value: item.name,
                                newVals:(title =='State'?[getData('City')[0] ?getData('City')[0].name:null,45687]:[4898])
                            });
                        }}> 
                        <View style={styles.item}>
                            <Text style={{fontSize:14, marginLeft: 0}}>{item.name}</Text>
                           {findIndex(title,item.name)?<Icon1 size={30} color={'orange'} name={'checkmark'} />:null }
                        </View>
                        </TouchableWithoutFeedback>
                    )} 
            }/>
         </Modal>
        )
    }
}
const styles = StyleSheet.create({
    modal:{
        justifyContent:'center',
        borderRadius:10,
        shadowRadius:10,
        width: '95%',
        padding:15
    },
    item:{
        height:40,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'
    }
})