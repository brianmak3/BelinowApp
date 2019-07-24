import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView,
    StatusBar,
    Animated,Easing
} from "react-native";

import * as Animatable from 'react-native-animatable'
import styles from './style'
import SearchHistory from './searchHistory';
import Loading from '../../common/loading'
import { Connect, mapDispatchToProps,mapStateToProps } from '../../Redux';
import { Iconn,colors } from '../../common/Index';
import ProductList from '../../components/ProductList';
import Headroom from 'react-native-headroom';
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchBarFocused: false,
            searchTerm: '',
            searched:false,
            activeSelection:'',
             showFilter:false,
             showList:false,
             showsideMenu:false,
             animatedFilterValue: new Animated.Value(0),
             animatedMenuValue: new Animated.Value(0)
        }
        
    }

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidShow', this.keyboardDidHide)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        setTimeout(() => {
            this.textInput.focus()
        }, 500)
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('#fff')
        alert('cool')
    }
    componentWillUnmount(){
        StatusBar.setBarStyle('light-content');
        this.props.ProductAction.removeSearchProducts([]);
        StatusBar.setBackgroundColor(colors.status)

    }
  
    
    render() {

        const { animatedFilterValue,showFilter, searchTerm, searched,showList,activeSelection } = this.state
        const { navigation,ProductAction, productsSearch } = this.props

        const buttons = [
            {
                icon:'funnel',
                text:'Filter'
            },
            {
              icon:(showList?  'grid': 'list'),
              title:'grid'
            }
        ];
        const options = ['Popularity', 'Price low to high', 'Price high to low'];
        toggle = (q)=>{
            if(q.text){
                if(showFilter)
                    sortToggle();
                    navigation.openDrawer()
            }else{
                if(showFilter)
                    sortToggle();
                this.setState({showList:(showList?false:true)})
            }
        }
        returnActive = (value)=>{
            if(value == activeSelection)
              return true;
           else
             return false
        }
        sortItems = (index)=>{
            var data = productsSearch.data;
            switch (index) {
                case 2:
                    data.sort((a,b)=>{return(b.price - a.price)});
                    break;
                case 1:
                     data.sort((a,b)=>{return(a.price - b.price)});
                    break;
                default:
                      data.sort((a,b)=>{return(b.average_rating - a.average_rating)});
                    break;
            }
           ProductAction.removeSearchProducts(data);
            sortToggle();
        }
        sortToggle =()=>{
            this.setState(
                {showFilter:(this.state.showFilter?false:true)},
                () => {
                    Animated.timing(
                        animatedFilterValue,
                      { toValue: this.state.showFilter ? 32 : 0 ,
                        duration: 300,        
                        easing: Easing.ease,
                        delay: 0, }
                    ).start()
                }
                )
         }
         const header = (
             <View>
                    <View style={styles.searchBar}>
                    {productsSearch.data.length !== 0?
                    <TouchableOpacity onPress={() => {
                        this.setState({searched:false}); 
                    ProductAction.removeSearchProducts([]);
                        sortToggle(); 
                        }} style={styles.closeButton}>
                    <Iconn name={'arrow-back'} size={20} color={'grey'} />
                </TouchableOpacity>:null}
                <Animatable.View animation="slideInRight" duration={500} style={styles.searchBarInner}>
                    <Iconn name={'search'} size={20} color={'grey'} />
                <TextInput 
                keyboardType="default"
                onKeyPress={this.handleKeyDown}
                style={styles.searchText}
                onChangeText={(searchTerm) => { this.setState({ searchTerm }) }}
                ref={(item) => this.textInput = item}
                returnKeyType='search'
                autoFocus={true}
                onFocus={()=>{
                    if(showFilter)
                    sortToggle();
                    this.setState({searched:false})}}
                onSubmitEditing={() => { 
                    if(showFilter)
                        sortToggle();
                    if(searchTerm && searchTerm.trim()){
                    ProductAction.searchProducts(searchTerm) 
                    this.setState({searched:true})
                    }
                }}
                placeholder={'Search item'} 
                placeholderTextColor={'grey'}
                clearButtonMode={'always'}/>
                </Animatable.View>
                <TouchableOpacity onPress={() => { 
                    if(productsSearch.data.length !== 0)
                        navigation.navigate('Cart')
                    else
                        navigation.goBack() }} style={{marginLeft:(productsSearch.data.length !== 0?10:5)
                    }}>
                    {productsSearch.data.length !== 0?<Iconn name={'cart'} size={20} color={'grey'} />:<Text style={{color:colors.cancelBlue}}>Cancel</Text>}
                </TouchableOpacity>
                
            </View>
            {productsSearch.data.length?
                <View style={styles.sortDiv}>
                        <TouchableOpacity style={styles.allBtn}>
                            <Text style={styles.allText}>All</Text>
                        </TouchableOpacity>
                    <View style={styles.more}>
                            <TouchableOpacity onPress={()=>sortToggle()} style={styles.sortSelection}>  
                                <Text style={{marginRight:5, color:(showFilter?colors.main:'#000')}}>Sort by {activeSelection}</Text>
                                <Iconn name={'arrow-'+(showFilter?'up':'down')} size={20} color={(showFilter?colors.main:'#000')} />
                            </TouchableOpacity>
                        <View style={styles.btnsList}>
                        {
                            buttons.map((q,index)=>{
                                return(
                                    <TouchableOpacity  key={index} onPress={()=>toggle(q)} style={{flexDirection:'row',alignItems:'center'}}>
                                        <View style={styles.imgDiv} >
                                            <Iconn name={q.icon} size={20} color={'#676666'} />
                                        </View>
                                        {q.text?<Text style={styles.flterText}>Filter</Text>:null}
                                    </TouchableOpacity>
                                )
                            })
                        }
                        </View>
                </View>
            </View>:null}
       </View>)
        return (
               <SafeAreaView style={styles.searchView}>
                <View style={styles.searchView}>
                    <Headroom
                    style={{flex:1}}
                    headerComponent={ header }
                    ScrollableComponent={ScrollView}
                    headerHeight={ 120 }
                    scrollEventThrottle={ 120 }
                    >
                    {
                         productsSearch.data.length === 0  && !productsSearch.loading && searched &&
                      <View style={{ marginTop:20,justifyContent: 'center', alignItems: 'center' }}>
                         <Text style={styles.noResults}>{'No result found for your search.'}</Text>
                      </View>
                    }
                    {!productsSearch.loading && !productsSearch.data.length?<SearchHistory />:productsSearch.data && productsSearch.loading? <Loading />:
                        <Animated.View  style={{flex:1,
                            transform: [{
                             translateY: animatedFilterValue,
                           }]}}>
                              <ProductList showList={showList} horizontal navigation={navigation}  data={productsSearch.data}/>
                           { showFilter? <View style={styles.popover} >
                            {
                                options.map((Q,index)=>{
                                    var title = Q.toLocaleLowerCase();
                                    return(
                                            <TouchableOpacity key={index} onPress={()=>{
                                                 this.setState({activeSelection:title})
                                                 sortItems(index)
                                                }} style={styles.optionBtn}>
                                                <Text style={{fontSize:13,fontWeight:(returnActive(title)?'bold':'normal'),color:(returnActive(title)?colors.main:'#000')}}>{Q}</Text>
                                                {returnActive(title)?<Iconn name={'checkmark'} size={22} color={colors.main} />:null}
                                            </TouchableOpacity>
                                    )
                                })
                            }
                            <TouchableWithoutFeedback onPress={()=>sortToggle()}>
                               <View style={{flex:1}}></View>
                            </TouchableWithoutFeedback>
                        </View>:null}
                       </Animated.View>

                     }
                     </Headroom>
                </View>
             </SafeAreaView>
        );
    }
}

export default Connect(mapStateToProps, mapDispatchToProps)(Search);
