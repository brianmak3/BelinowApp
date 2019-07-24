import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-navigation'
import styles from './style'
import { Connect, mapDispatchToProps,mapStateToProps } from '../../Redux';
import {Iconn,colors} from '../../common/Index'
const stars = [1,2,3,4,5];
class Sidebar extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.ProductAction.getProductCategories()
    }

    navigate(nav) {
        const { navigation } = this.props
        navigation.navigate(nav)
    }

    render() {
        //const {  currentCustomer } = this.props
        const filterBtns = ['Reset','Done'];
        const filterOptions = [
            {
                title:'Category',
                buttons: ['Blouse & Shirts', 'T-Shirts', 'Dresses']
            },
            {
                title:'Size',
                buttons: ['S','M','L','XL','XXL'],
                label:'INT'
            }
            ,
            {
                title:'Service',
                more:true,
                buttons: ['Global Collection','Installement','Cash On Delivery']
            } ,
            {
                title:'Location',
                more:true,
                buttons: ['Local','Overseas']
            },
            {
                title:'Price',
                buttons:[]
            },
            {
                title:'Rating',
                buttons:[]
            }
        ]
        return (
          <View style={{flex:1}}>
            <View style={styles.container}>
                <SafeAreaView >
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}> 
                    {
                        filterOptions.map((a,index)=>{
                            return(
                                <View key={index} style={styles.filterDiv}>
                                    <View style={styles.moreBtn}>
                                        <Text style={styles.title}>{a.title} </Text>
                                        {a.more?<Iconn name={'arrow-down'} color={'grey'} size={15} />:null}
                                    </View>
                                    <View style={styles.buttons}>
                                        {
                                        a.buttons.map((b,indc)=>{
                                            return(
                                                <TouchableWithoutFeedback key={indc}>
                                                    <View style={styles.button}>  
                                                        <Text style={styles.buttonText}> {b} </Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                            )
                                            })
                                        }
                                    </View>
                                    {
                                        a.title == 'Rating'?
                                        <View style={{flexDirection:'row',margin:5,alignItems:'center'}}>
                                                {
                                                    stars.map((a,index)=>{
                                                        return(
                                                            <Iconn name={'star'} size={20} color={'#D3D2D2'} />
                                                        )
                                                    })
                                                }
                                                <Text style={{fontSize:13}}> & UP</Text>
                                        </View>:a.title =='Price'?
                                        <View style={{flexDirection:'row',margin:5,alignItems:'center'}}>
                                                <TextInput placeholder={'Max'} placeholderTextColor={'#B1B0B0'}  style={styles.priceInput}/>
                                                <View style={{backgroundColor:'#D3D2D2',width:15,height:1,margin:5}}></View>
                                                <TextInput placeholder={'Min'} placeholderTextColor={'#B1B0B0'} style={styles.priceInput} />
                                        </View>
                                        :null
                                    }
                                </View>
                            )
                        })
                    }
                    </ScrollView>
                </SafeAreaView>
                
            </View>
            <View style={{flexDirection:'row'}}>
                    {
                        filterBtns.map((a,index)=>{
                            return(
                                <TouchableOpacity style={styles.flterBtn}>
                                    <LinearGradient start={{x: 0, y: 0}}  end={{x: 1, y: 0}}  colors={(a=='Reset'?['#AE3D02', '#CF4713', '#FD603F']:['#F88824', '#FA973F', '#FBAA59'])}  style={styles.flterBtnGradient}>
                                        <Text style={{color:'#fff'}}>{a}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            )
                        })
                    
                    }
                </View>
            </View>
        )
    }

}




export default Connect(mapStateToProps, mapDispatchToProps)(Sidebar);

