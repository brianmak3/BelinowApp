import React from "react";
import { StyleSheet, View,TouchableWithoutFeedback, Dimensions,Text} from "react-native";
import  Iconn  from "../../src/common/Icon";
const btns = [
    {icon:'cart',page:'Cart'},{icon:'person',page:'Profile'}
]
const SearchButton = (props) => (
    <View style={styles.header}>
        <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('SearchScreen')}>
                <View style={styles.searchBox} >
                    <Iconn name={'search'} size={20} color={'grey'}/>
                    <View style={{marginLeft:5}} >
                        <Text style={{color:'grey'}}>Search Belinow</Text>
                    </View>
                </View>
        </TouchableWithoutFeedback>
        <View style={styles.moreBtns}>
            {
                    btns.map((btn,index)=>(<TouchableWithoutFeedback key={index} onPress={()=>props.navigation.navigate(btn.page)}>
                    <View style={styles.headerBtn}>
                        <Iconn name={btn.icon} size={25} color={'#fff'}/>
                    </View>
                </TouchableWithoutFeedback>))
            }
        </View>
    </View>

    )
export default SearchButton;

const styles = StyleSheet.create({
    button: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15 
    },
    searchBox:{
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:20,
        paddingLeft:10,
        height:30,
        alignItems:'center',
        marginLeft:5,
        flex:1
      },
      headerBtn:{
        flex:10,
        justifyContent:'center',
        alignItems:'center'
     },
     header:{
        flexDirection:'row',
        alignItems:'center',
     },
     moreBtns:{flexDirection:'row',
     width:90,
     justifyContent:'space-around'},
});