import React, { Component } from "react";
import { View, Text, FlatList, SafeAreaView,ScrollView, StatusBar } from "react-native";
import Slideshow from 'react-native-image-slider-show';
import Theme from '../../theme/style'
import SearchButton from '../../theme/searchButton'
import styles from './style'
import ProductList from '../../components/ProductList'
import fsManager from '../../common/fs-manager'
import CategoryBlock from './category-block'
import {colors} from '../../common/colors';
import { findAllUsers,saveMessage }from '../../Realm';
import {mapStateToProps,mapDispatchToProps, Connect} from '../../Redux';
import { fetchAndUpdate } from '../../redux/actions/current-customer';
import Headroom from 'react-native-headroom';


class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            position: 1,
            interval: null,
            dataSource:[
                { url:'https://belinow.com/wp-content/uploads/2019/05/LALAKI.jpg' },
                { url:'https://belinow.com/wp-content/uploads/2019/05/FITBIT-Offer1.png' },
                { url:'https://belinow.com/wp-content/uploads/2019/04/BAJU-RAYA.jpg' },
                { url:'https://belinow.com/wp-content/uploads/2019/05/Fitbit-offer-Raya.png' },
                { url:'https://belinow.com/wp-content/uploads/2019/04/Gayakan-hari-anda.jpg' }
            ]
        }
    }

    componentDidMount() {
        // this.props.ProductAction.getFeaturedProducts()
        this.props.ProductAction.getPopularProducts()
       // this.props.ProductAction.getRatingProducts()
        this.props.ProductAction.getProductCategories()
        StatusBar.setHidden(false, 'slide');
        StatusBar.setBarStyle('light-content');
        this.refreshWhislist();
        findAllUsers().then(users=>{
            if(users.length){
                this.props.CurrentCustomer.setCurrentCustomer(users[0],null);
                fetchAndUpdate(users[0]).then((user)=>this.props.CurrentCustomer.setCurrentCustomer(user,true)).catch(e=>alert(e))
            }
       }).catch(e=>alert(e))
       //this.props.navigation.navigate('ReportScreen')
    }
    componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
          }, 3500)
        });
      }

    async refreshWhislist() {
        let data = await fsManager.getWhislist()
        data = data || '[]'
        const wl = JSON.parse(data);
        for (var i = 0; i < wl.length; i++)
            this.props.WhislistAction.add(wl[i]) 
    }

    render() {
        const { navigation, productsFeatured, productsPopular, productsRating, categories } = this.props;
        const { dataSource, position } = this.state;
        const header = (
            <View style={{height:50, backgroundColor:colors.main,justifyContent:'center'}}>
                <SearchButton navigation={navigation} />
            </View>
        );
        return (
            <View style={{backgroundColor:colors.main, flex:1}}>
                <SafeAreaView/>
                <Headroom
                    style={{flex:1, backgroundColor:colors.background}}
                    headerComponent={ header }
                    ScrollableComponent={ScrollView}
                    headerHeight={ 50 }
                    scrollEventThrottle={ 50 } >
                        <Slideshow  
                            height={140}
                            dataSource={dataSource}
                            position={position}
                            onPositionChanged={position => this.setState({ position })}
                            />
                                <Text style={{fontSize:18, margin:15, marginLeft:5}}>Popular Categories</Text>
                                <FlatList numColumns={3} data={categories}  renderItem={({item,index})=>(
                                    <CategoryBlock item={item} navigation={navigation} index={index} />
                                )} keyExtractor={(item, index) => item.key}/>
                                <View style={{flexDirection:'row', margin:15,justifyContent:'space-between'}}>
                                    <Text style={{fontSize:18,  marginLeft:-10}}>Popular Products</Text>
                                    {/*<TouchableOpacity style={{flexDirection:'row'}}>
                                            <Text style={styles.seeMoreButtonText}>{'see more'}</Text>
                                            <Image style={styles.seeMoreImage} resizeMode={'contain'} source={require('../../assets/images/ic_arrow_right.png')} />
                                </TouchableOpacity>*/}
                                </View>
                                <ProductList horizontal navigation={navigation} data={productsPopular.data} loading={productsPopular.loading} />
                    </Headroom>
            </View>
        )
    }
}
HomeScreen.navigationOptions = ({ navigation }) => ({
  //  headerStyle: Theme.headerStyle,
   // headerTitle:<SearchButton navigation={navigation} />,
   // headerTitleStyle: Theme.headerTitleStyle,
    headerMode:'none',
    header:null
})



export default Connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
